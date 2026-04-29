import type {
  FeatureItem,
  HeroHighlightItem,
  HowItWorksItem,
  LoginBenefitItem,
  PreviewStatItem,
  SectionHeaderContent,
} from "@/types";

export const LANDING_HERO_CONTENT = {
  title: "Ciptakan Film Impianmu Lebih Mudah",
  subtitle:
    "Platform kolaborasi film berbasis AI untuk membantu filmmaker membangun team, dokumentasikan produksi, dan raih opportunities setiap hari.",
  primaryCta: "Mulai Sekarang",
  secondaryCta: "Lihat Cara Kerja",
} as const;

export const LANDING_HERO_HIGHLIGHTS: ReadonlyArray<HeroHighlightItem> = [
  { id: "users", value: "1.200+", label: "Pengguna Aktif" },
  { id: "items", value: "50K+", label: "production Dipilah" },
  { id: "accuracy", value: "98%", label: "Akurasi AI" },
] as const;

export const HOW_IT_WORKS_HEADER: SectionHeaderContent = {
  title: "Bagaimana Cara Kerjanya?",
  description: "Empat langkah sederhana untuk memulai perjalanan film production Anda.",
};

export const HOW_IT_WORKS_ITEMS: ReadonlyArray<HowItWorksItem> = [
  {
    id: "upload",
    step: 1,
    title: "Upload Foto production",
    description: "Ambil foto production dari kamera atau galeri dalam hitungan detik.",
    accent: "emerald",
  },
  {
    id: "detect",
    step: 2,
    title: "AI Mendeteksi Jenis",
    description: "AI mengklasifikasikan production menjadi kategori yang tepat.",
    accent: "sky",
  },
  {
    id: "earn",
    step: 3,
    title: "Raih Poin & Badge",
    description: "Setiap aksi konsisten memberi poin dan membuka badge baru.",
    accent: "amber",
  },
  {
    id: "compete",
    step: 4,
    title: "Naik Leaderboard",
    description: "Bandingkan progresmu dengan komunitas dan tetap termotivasi.",
    accent: "violet",
  },
] as const;

export const FEATURES_HEADER: SectionHeaderContent = {
  title: "Fitur Unggulan",
  description: "Semua fitur inti dirancang modern, ringan, dan mudah dipakai.",
};

export const FEATURE_ITEMS: ReadonlyArray<FeatureItem> = [
  {
    id: "ai-classification",
    title: "AI Waste Classification",
    description: "Deteksi jenis production dari foto dengan pengalaman cepat dan intuitif.",
    icon: "🤖",
  },
  {
    id: "point-system",
    title: "Sistem Poin Dinamis",
    description: "Setiap kontribusi menambah poin untuk menaikkan level akun Anda.",
    icon: "⭐",
  },
  {
    id: "badge-challenge",
    title: "Badge & Challenge",
    description: "Selesaikan misi mingguan dan buka badge eksklusif bertema lingkungan.",
    icon: "🏅",
  },
  {
    id: "leaderboard",
    title: "Leaderboard Komunitas",
    description: "Pantau posisi Anda dan jadikan progres sebagai motivasi konsisten.",
    icon: "🏆",
  },
  {
    id: "impact",
    title: "Statistik Dampak",
    description: "Lihat dampak film production Anda dalam ringkasan yang mudah dipahami.",
    icon: "📊",
  },
  {
    id: "community",
    title: "Komunitas Peduli",
    description: "Terhubung dengan pengguna lain yang sama-sama peduli lingkungan.",
    icon: "🌍",
  },
] as const;

export const DASHBOARD_PREVIEW_HEADER: SectionHeaderContent = {
  title: "Preview Dashboard",
  description: "Ringkas, fokus, dan siap dipakai untuk aktivitas harian Anda.",
};

export const DASHBOARD_PREVIEW_STATS: ReadonlyArray<PreviewStatItem> = [
  {
    id: "points",
    label: "Total Poin",
    value: "3.420",
    detail: "+250 hari ini",
  },
  {
    id: "waste",
    label: "production Dipilah",
    value: "156",
    detail: "42 minggu ini",
  },
  {
    id: "badge",
    label: "Badge Aktif",
    value: "8",
    detail: "2 badge baru",
  },
] as const;

export const LANDING_CTA_CONTENT = {
  title: "Mulai aksi kecil, dampak besar.",
  description:
    "Gabung ke Cineku dan ubah kebiasaan memilah production jadi progres yang terukur.",
  buttonText: "Masuk dan Mulai",
} as const;

export const LOGIN_BENEFITS: ReadonlyArray<LoginBenefitItem> = [
  { id: "benefit-1", text: "AI membantu identifikasi production lebih cepat." },
  { id: "benefit-2", text: "Poin dan badge memotivasi kebiasaan positif." },
  { id: "benefit-3", text: "Dashboard progres mudah dipantau dari mobile." },
] as const;
