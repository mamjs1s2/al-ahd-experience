'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MOTION } from '@/lib/constants';

export default function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = indicatorRef.current?.querySelector('[data-line]');
      const text = indicatorRef.current?.querySelector('[data-text]');

      // Animate line
      gsap.to(line, {
        scaleY: 1,
        opacity: 1,
        duration: MOTION.durationSlow,
        ease: 'power2.out',
        delay: 0.5,
      });

      // Pulse animation
      gsap.to(line, {
        y: 4,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: 'sine.inOut',
        delay: 1.5,
      });

      // Fade text
      gsap.to(text, {
        opacity: 1,
        duration: MOTION.durationMedium,
        ease: 'power2.out',
        delay: 0.3,
      });
    });

    // Hide on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to(indicatorRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: MOTION.durationFast,
        });
      } else {
        gsap.to(indicatorRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: MOTION.durationFast,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
    >
      <p
        data-text
        className="text-xs uppercase tracking-widest text-text-muted opacity-0"
      >
        Scroll
      </p>
      <div
        data-line
        className="w-px h-8 bg-gradient-to-b from-gold to-transparent scaleY-0 opacity-0"
      />
    </div>
  );
}
