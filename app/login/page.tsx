import LoginCard from "../../components/login/LoginCard";
import LoginDecorations from "../../components/login/LoginDecorations";
import LoginHeroText from "../../components/login/LoginHeroText";

export default function LoginPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-linear-to-br from-[#041911] via-[#07271C] to-[#03140F] px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 -top-112 h-168 w-2xl -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-24 h-104 w-104 rounded-full bg-lime-400/15 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <LoginDecorations />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_minmax(0,460px)] lg:gap-12">
          <LoginHeroText />
          <div className="flex justify-center lg:justify-end">
            <LoginCard />
          </div>
        </div>
      </div>
    </main>
  );
}
