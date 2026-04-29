import RegisterCard from "@/components/register/RegisterCard";
import RegisterDecorations from "@/components/register/RegisterDecorations";
import RegisterHeroText from "@/components/register/RegisterHeroText";

export default function RegisterPage() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-linear-to-br from-slate-950 via-[#11131c] to-slate-900 px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        <div className="absolute -top-44 left-1/2 h-72 w-120 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-14 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20" />
      </div>

      <RegisterDecorations />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center md:min-h-[calc(100vh-4rem)]">
        <div className="grid w-full items-center gap-6 md:gap-8 lg:grid-cols-[1.08fr_minmax(0,480px)] lg:gap-12">
          <RegisterHeroText />
          <div className="flex justify-center lg:justify-end">
            <RegisterCard />
          </div>
        </div>
      </div>
    </main>
  );
}
