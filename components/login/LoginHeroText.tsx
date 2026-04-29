import { Camera, Clapperboard, Film, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    id: "cinema",
    icon: Clapperboard,
    text: "Masuk ke katalog film kreator Indonesia yang kurasi dan rapi.",
  },
  {
    id: "discover",
    icon: Sparkles,
    text: "Temukan rekomendasi tayangan dengan nuansa poster bioskop modern.",
  },
  {
    id: "watchlist",
    icon: Film,
    text: "Simpan watchlist, lanjutkan menonton, dan kelola pengalaman sinematikmu.",
  },
] as const;

export default function LoginHeroText() {
  return (
    <aside className="hidden text-white/90 lg:block">
      <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase text-amber-100">
        <Camera className="h-3.5 w-3.5" aria-hidden="true" />
        Cineku
      </p>

      <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white">
        Rasakan pengalaman login yang terasa seperti memasuki studio premiere.
      </h2>

      <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
        Cineku membantu kamu menjelajah film-film kreator Indonesia dengan tampilan gelap, modern,
        dan terasa premium.
      </p>

      <ul className="mt-8 space-y-3">
        {HIGHLIGHTS.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <li
              key={highlight.id}
              className="flex max-w-lg items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
            >
              <span className="mt-0.5 rounded-lg bg-amber-300/10 p-2 text-amber-100">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-slate-200">{highlight.text}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
