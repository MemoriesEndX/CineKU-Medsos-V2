"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Camera, Clapperboard, Film, Sparkles, Ticket } from "lucide-react";

export default function RegisterCard() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const ageRaw = String(formData.get("age") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const age = ageRaw === "" ? null : Number(ageRaw);

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          age,
          password,
        }),
      });

      const result: { message?: string } = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message ?? "Register gagal.");
        return;
      }

      const signInResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (signInResult?.error) {
        router.replace("/login");
        return;
      }

      router.replace(signInResult?.url ?? "/dashboard");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block" aria-hidden="true">
        <motion.div
          className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-amber-400/10 blur-3xl"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-4 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ y: [0, -16, 0], x: [0, -10, 0] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative">
        <header className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-slate-950/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100 shadow-inner shadow-black/20">
            <Clapperboard className="h-3.5 w-3.5" aria-hidden="true" />
            Cineku Register
          </div>



          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">Buat Akun Cineku</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            Simpan film favorit, ikuti tontonan kreator Indonesia, dan nikmati pengalaman discovery yang terasa seperti poster utama di bioskop.
          </p>
        </header>

        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <motion.div className="space-y-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.5 }}>
            <label htmlFor="name" className="text-sm font-medium text-slate-200">
              Nama
            </label>
            <div className="group rounded-2xl border border-white/10 bg-slate-950/70 px-3 transition focus-within:border-amber-300/40 focus-within:ring-4 focus-within:ring-amber-400/10">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-200/70" aria-hidden="true" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Nama lengkap"
                  className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.5 }}>
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email
            </label>
            <div className="group rounded-2xl border border-white/10 bg-slate-950/70 px-3 transition focus-within:border-amber-300/40 focus-within:ring-4 focus-within:ring-amber-400/10">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-amber-200/70" aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="nama@email.com"
                  className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.5 }}>
            <label htmlFor="age" className="text-sm font-medium text-slate-200">
              Umur <span className="text-slate-400">(opsional)</span>
            </label>
            <div className="group rounded-2xl border border-white/10 bg-slate-950/70 px-3 transition focus-within:border-amber-300/40 focus-within:ring-4 focus-within:ring-amber-400/10">
              <div className="flex items-center gap-2">
                <Ticket className="h-4 w-4 text-amber-200/70" aria-hidden="true" />
                <input
                  id="age"
                  name="age"
                  type="number"
                  inputMode="numeric"
                  min={8}
                  max={120}
                  placeholder="Contoh: 21"
                  className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.5 }}>
            <label htmlFor="password" className="text-sm font-medium text-slate-200">
              Password
            </label>
            <div className="group rounded-2xl border border-white/10 bg-slate-950/70 px-3 transition focus-within:border-amber-300/40 focus-within:ring-4 focus-within:ring-amber-400/10">
              <div className="flex items-center gap-2">
                <Film className="h-4 w-4 text-amber-200/70" aria-hidden="true" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  placeholder="Buat password aman"
                  className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.45 }}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(255,255,255,0.12)] transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" />
              {isSubmitting ? "Memproses..." : "Daftar"}
            </motion.button>
          </motion.div>
        </form>
        

        {errorMessage ? <p className="mt-3 text-sm text-rose-300">{errorMessage}</p> : null}

        <motion.footer className="mt-6 text-center text-sm text-white" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.45 }}>
          <p>
            Sudah punya akun?{" "}
            <Link href="/login" className="font-semibold text-white transition hover:text-gray-200 hover:underline">
              Masuk
            </Link>
          </p>
        </motion.footer>
      </div>
    </motion.section>

    
  );
}
