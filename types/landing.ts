export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface LeaderboardUser {
  id: number;
  rank: number;
  name: string;
  points: number;
  avatar: string;
}

export interface ImpactStat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  color: string;
}

export interface FloatingIconConfig {
  id: string;
  icon: string;
  delay: number;
  duration: number;
  x: number;
  y: number;
}
