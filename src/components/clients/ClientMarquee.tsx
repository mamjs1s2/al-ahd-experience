'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MOTION } from '@/lib/constants';
import { clients } from '@/lib/clients';

export default function ClientMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const inner = innerRef.current;
    if (!marquee || !inner) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    // Clone items for seamless loop
    const items = inner.querySelectorAll('[data-client]');
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      inner.appendChild(clone);
    });

    const totalWidth = inner.scrollWidth / 2;

    // Animation
    gsap.to(inner, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      repeatType: 'loop',
    });

    // Hover effect
    const handleMouseEnter = () => {
      gsap.to(inner, { timeScale: 0.5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(inner, { timeScale: 1, duration: 0.3 });
    };

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(inner);
    };
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="relative w-full py-16 md:py-20 overflow-hidden border-y border-steel/20 bg-steel/10 backdrop-blur-sm"
    >
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-obsidian to-transparent z-10" />

      <div ref={innerRef} className="flex gap-12 md:gap-20 whitespace-nowrap">
        {clients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            data-client
            className="flex-shrink-0 h-12 md:h-16 flex items-center px-8 group cursor-pointer"
            data-cursor="PARTNER"
          >
            <p className="text-lg md:text-xl font-display font-bold text-text-secondary group-hover:text-gold transition-colors">
              {client.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
