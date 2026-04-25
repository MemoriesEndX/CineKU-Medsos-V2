import { Leaf, Recycle, Sparkles, Trash2, Wine } from "lucide-react";

interface DecorationItem {
  id: string;
  icon: typeof Recycle;
  className: string;
}

const DECORATIONS: DecorationItem[] = [
  {
    id: "recycle-top-left",
    icon: Recycle,
    className:
      "left-6 top-8 text-emerald-300/65 md:left-12 lg:left-20 lg:top-14 motion-safe:animate-[spin_18s_linear_infinite]",
  },
  {
    id: "trash-bottom-left",
    icon: Trash2,
    className:
      "bottom-10 left-5 text-lime-300/55 md:left-12 lg:bottom-16 lg:left-24 motion-safe:animate-pulse",
  },
  {
    id: "leaf-right",
    icon: Leaf,
    className:
      "right-5 top-24 text-emerald-200/60 md:right-8 lg:right-24 lg:top-20 motion-safe:animate-pulse",
  },
  {
    id: "bottle-right-mid",
    icon: Wine,
    className:
      "right-6 bottom-24 text-teal-200/55 md:right-10 lg:right-20 motion-safe:animate-pulse",
  },
  {
    id: "sparkles-upper-right",
    icon: Sparkles,
    className:
      "right-24 top-12 hidden text-lime-200/50 lg:block motion-safe:animate-pulse",
  },
];

export default function LoginDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {DECORATIONS.map((item) => {
        const Icon = item.icon;

        return <Icon key={item.id} className={`absolute h-6 w-6 ${item.className}`} strokeWidth={1.8} />;
      })}
    </div>
  );
}
