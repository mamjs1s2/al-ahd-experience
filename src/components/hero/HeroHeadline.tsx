'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { MOTION } from '@/lib/constants';

interface HeroHeadlineProps {
  text: string;
  className?: string;
}

export default function HeroHeadline({
  text,
  className = '',
}: HeroHeadlineProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const ctx = gsap.context(() => {
      // Split text into lines
      const split = new SplitType(headlineRef.current!, {
        types: 'lines',
        lineClass: 'line-wrapper',
      });

      const lines = split.lines || [];

      // Animate lines
      gsap.fromTo(
        lines,
        {
          opacity: 0,
          y: 100,
          rotationX: 90,
          transformOrigin: '50% 50% -50',
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: MOTION.durationMedium,
          ease: MOTION.easeIndustrial,
          stagger: 0.15,
          delay: 0.3,
        }
      );
    });

    return () => ctx.revert();
  }, [text]);

  return (
    <h1
      ref={headlineRef}
      className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-text-primary ${className}`}
      style={{ perspective: '1200px' }}
    >
      {text}
    </h1>
  );
}
