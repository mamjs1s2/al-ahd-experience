'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseTiltProps {
  maxRotation?: number;
  scale?: number;
}

export function useTilt({ maxRotation = 10, scale = 1.05 }: UseTiltProps = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotationX = (mouseY / rect.height) * maxRotation;
      const rotationY = -(mouseX / rect.width) * maxRotation;

      gsap.to(element, {
        rotationX,
        rotationY,
        scale,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxRotation, scale]);

  return elementRef;
}
