'use client';

import { motion } from 'framer-motion';
import type { FloatingIconConfig } from '@/types/landing';

interface FloatingIconProps {
  config: FloatingIconConfig;
}

export default function FloatingIcon({ config }: FloatingIconProps) {
  return (
    <motion.div
      className="absolute text-4xl md:text-5xl pointer-events-none"
      animate={{ x: [0, config.x, 0], y: [0, config.y, 0], opacity: [1, 0.3, 1] }}
      transition={{ duration: config.duration, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      {config.icon}
    </motion.div>
  );
}
