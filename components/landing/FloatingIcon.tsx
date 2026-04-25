'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { FloatingIconConfig } from '@/types/landing';

interface FloatingIconProps {
  config: FloatingIconConfig;
}

export default function FloatingIcon({ config }: FloatingIconProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Create floating animation
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(element, {
      y: config.y,
      x: config.x,
      duration: config.duration,
      ease: 'sine.inOut',
    }, 0)
      .to(element, {
        opacity: 0.3,
        duration: config.duration / 2,
      }, 0)
      .to(element, {
        opacity: 1,
        duration: config.duration / 2,
      }, config.duration / 2);

    return () => {
      tl.kill();
    };
  }, [config]);

  return (
    <div
      ref={elementRef}
      className="absolute text-4xl md:text-5xl pointer-events-none"
      aria-hidden="true"
    >
      {config.icon}
    </div>
  );
}
