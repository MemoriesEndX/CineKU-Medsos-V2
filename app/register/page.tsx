import RegisterCard from "@/components/register/RegisterCard";
import RegisterDecorations from "@/components/register/RegisterDecorations";
import RegisterHeroText from "@/components/register/RegisterHeroText";

export default function RegisterPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-linear-to-br from-[#041b14] via-[#0a2f23] to-[#071a2f] px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-44 left-1/2 h-72 w-120 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-14 h-64 w-64 rounded-full bg-lime-300/20 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <RegisterDecorations />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-6 md:gap-8 lg:grid-cols-[1.05fr_minmax(0,470px)] lg:gap-12">
          <RegisterHeroText />
          <div className="flex justify-center lg:justify-end">
            <RegisterCard />
          </div>
        </div>
      </div>
    </main>
  );
}
