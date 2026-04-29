import {
  HowItWorksStep,
  Feature,
  LeaderboardUser,
  ImpactStat,
  FloatingIconConfig,
} from '@/types/landing';

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: 'Setup Production',
    description: 'Siapkan crew, talent, dan equipment untuk project filmmu dengan mudah.',
    icon: '📸',
  },
  {
    id: 2,
    title: 'AI Documentation',
    description: 'Dokumentasi otomatis setiap peran, tugas, dan footage dalam satu sistem terpadu.',
    icon: '🤖',
  },
  {
    id: 3,
    title: 'Build Portfolio',
    description: 'Setiap proyek yang selesai menambah kredibilitas dan professional record kamu.',
    icon: '⭐',
  },
  {
    id: 4,
    title: 'Get Recognition',
    description: 'Dapatkan opportunities dan connect dengan filmmaker lain di komunitas global.',
    icon: '🏆',
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Smart Organization',
    description: 'Machine learning yang akurat mengorganisir 500+ parameter produksi film secara instant.',
    icon: '🧠',
    color: 'from-amber-400 to-rose-500',
  },
  {
    id: 2,
    title: 'Collaboration Tools',
    description: 'Kelola tim dan dokumentasikan setiap role dari creatives hingga technical crew.',
    icon: '💰',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 3,
    title: 'Badge & Challenge',
    description: 'Unlock badge eksklusif dan selesaikan challenge harian untuk bonus poin.',
    icon: '🎖️',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 4,
    title: 'Leaderboard Global',
    description: 'Bersaing dengan pengguna lain dan lihat peringkatmu di leaderboard dunia.',
    icon: '📊',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 5,
    title: 'Statistik Lingkungan',
    description: 'Lihat dampak positifmu terhadap lingkungan melalui dashboard personal.',
    icon: '🌍',
    color: 'from-amber-400 to-amber-500',
  },
  {
    id: 6,
    title: 'Riwayat Pemilahan',
    description: 'Pantau semua aktivitas pemilahan productionmu dalam satu tempat.',
    icon: '📝',
    color: 'from-purple-400 to-indigo-500',
  },
];

export const leaderboardUsers: LeaderboardUser[] = [
  {
    id: 1,
    rank: 1,
    name: 'Dafa Rizqy',
    points: 3250,
    avatar: '👨‍💼',
  },
  {
    id: 2,
    rank: 2,
    name: 'Sarah Putri',
    points: 2870,
    avatar: '👩‍💻',
  },
  {
    id: 3,
    rank: 3,
    name: 'Lutfi Rahman',
    points: 2450,
    avatar: '👨‍🎓',
  },
];

export const impactStats: ImpactStat[] = [
  {
    id: 1,
    label: 'production Terklasifikasi',
    value: 1200,
    suffix: '+',
    icon: '🎬',
    color: 'from-amber-400 to-rose-500',
  },
  {
    id: 2,
    label: 'Plastik Dipilah',
    value: 850,
    suffix: '+',
    icon: '🍾',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    label: 'User Aktif',
    value: 320,
    suffix: '+',
    icon: '👥',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 4,
    label: 'Kategori production',
    value: 5,
    suffix: '',
    icon: '📦',
    color: 'from-purple-400 to-pink-500',
  },
];

export const floatingIcons: FloatingIconConfig[] = [
  {
    id: 'bottle',
    icon: '🍾',
    delay: 0,
    duration: 4,
    x: -80,
    y: -60,
  },
  {
    id: 'leaf',
    icon: '🎞️',
    delay: 0.5,
    duration: 5,
    x: 120,
    y: -100,
  },
  {
    id: 'recycle',
    icon: '🎬',
    delay: 1,
    duration: 4.5,
    x: -120,
    y: 100,
  },
  {
    id: 'camera',
    icon: '📷',
    delay: 1.5,
    duration: 5.5,
    x: 100,
    y: 80,
  },
  {
    id: 'sparkles',
    icon: '✨',
    delay: 2,
    duration: 6,
    x: -60,
    y: 60,
  },
];

export const LOGIN_BENEFITS = [
  { id: 'benefit-1', text: 'AI membantu identifikasi production lebih cepat.' },
  { id: 'benefit-2', text: 'Poin dan badge memotivasi kebiasaan positif.' },
  { id: 'benefit-3', text: 'Dashboard progres mudah dipantau dari mobile.' },
] as const;
