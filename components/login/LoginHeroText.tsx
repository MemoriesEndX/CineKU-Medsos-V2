import { Leaf, Recycle, Sparkles, Trophy } from "lucide-react";

const HIGHLIGHTS = [
  {
    id: "point",
    icon: Trophy,
    text: "Kumpulkan poin dari setiap aksi pemilahan sampah.",
  },
  {
    id: "ai",
    icon: Sparkles,
    text: "Gunakan deteksi AI untuk mengenali jenis sampah lebih cepat.",
  },
  {
    id: "impact",
    icon: Recycle,
    text: "Naik leaderboard sambil menciptakan dampak hijau nyata.",
  },
] as const;

export default function LoginHeroText() {
  return (
    <aside className="hidden text-white/90 lg:block">
      <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-950/35 px-4 py-1.5 text-xs font-medium tracking-[0.12em] uppercase text-emerald-100">
        <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
        Pilah Yuk!!
      </p>

      <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white">
        Setiap sampah yang kamu pilah adalah langkah kecil untuk bumi yang lebih bersih.
      </h2>

      <p className="mt-4 max-w-lg text-base leading-relaxed text-emerald-50/80">
        Masuk untuk lanjutkan tantangan harianmu, unggah foto sampah, dan ubah kebiasaan baik jadi
        pencapaian seru.
      </p>

      <ul className="mt-8 space-y-3">
        {HIGHLIGHTS.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <li
              key={highlight.id}
              className="flex max-w-lg items-start gap-3 rounded-xl border border-emerald-300/20 bg-emerald-950/20 p-3"
            >
              <span className="mt-0.5 rounded-lg bg-emerald-300/15 p-2 text-emerald-100">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-emerald-50/90">{highlight.text}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
