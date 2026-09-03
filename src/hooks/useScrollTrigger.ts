'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollTriggerProps {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  animation?: gsap.core.Timeline | gsap.core.Tween;
}

export function useScrollTrigger({
  trigger,
  start = 'top center',
  end = 'bottom center',
  scrub = false,
  pin = false,
  markers = false,
  onEnter,
  onLeave,
  animation,
}: UseScrollTriggerProps) {
  useEffect(() => {
    if (!animation) return;

    const ctx = gsap.context(() => {
      animation.scrollTrigger = ScrollTrigger.create({
        trigger,
        start,
        end,
        scrub,
        pin,
        markers,
        onEnter: () => onEnter?.(),
        onLeave: () => onLeave?.(),
        animation,
      });
    });

    return () => ctx.revert();
  }, [trigger, start, end, scrub, pin, markers, onEnter, onLeave, animation]);
}
