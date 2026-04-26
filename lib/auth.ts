import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import { z } from "zod";

import prisma from "@/lib/prisma";

const isDevelopment = process.env.NODE_ENV === "development";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error("Missing GOOGLE_CLIENT_ID");
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing GOOGLE_CLIENT_SECRET");
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = credentialsSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          throw new Error("Email atau password tidak valid.");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: parsedCredentials.data.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("Email atau password salah.");
        }

        const passwordMatches = await bcrypt.compare(parsedCredentials.data.password, user.password);

        if (!passwordMatches) {
          throw new Error("Email atau password salah.");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: "USER",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: isDevelopment,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? token.sub;
        token.name = user.name ?? token.name;
        token.email = user.email ?? token.email;
        token.role = user.role ?? token.role ?? "USER";
      }

      if (!token.id && token.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { id: true },
        });

        token.id = dbUser?.id ?? token.sub;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id ?? token.sub ?? "") as string;
        session.user.name = token.name ?? session.user.name;
        session.user.email = token.email ?? session.user.email;
        session.user.role = (token.role as string) ?? "USER";
      }

      return session;
    },
  },
};