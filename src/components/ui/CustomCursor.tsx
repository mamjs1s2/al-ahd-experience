'use client';

import { useEffect, useRef, useState } from 'react';
import { MOTION } from '@/lib/constants';

interface CursorState {
  x: number;
  y: number;
  label?: string;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
  });
  const [ringState, setRingState] = useState<CursorState>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Check if device supports hover (not touch)
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' &&
          navigator.maxTouchPoints > 0) ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };

    if (isTouchDevice()) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorState({ x: e.clientX, y: e.clientY });
      setRingState((prev) => ({
        x: prev.x + (e.clientX - prev.x) * 0.3,
        y: prev.y + (e.clientY - prev.y) * 0.3,
      }));
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const label = target.getAttribute('data-cursor');
      if (label) {
        setCursorLabel(label);
        if (dotRef.current) {
          dotRef.current.classList.add('scale-150');
        }
      }
    };

    const handleElementLeave = () => {
      setCursorLabel('');
      if (dotRef.current) {
        dotRef.current.classList.remove('scale-150');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a[data-cursor], button[data-cursor], [data-cursor]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 bg-gold rounded-full mix-blend-screen transition-transform duration-200 z-50"
        style={{
          transform: `translate(${cursorState.x - 4}px, ${cursorState.y - 4}px)`,
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border border-cyan rounded-full mix-blend-screen z-50"
        style={{
          transform: `translate(${ringState.x - 16}px, ${ringState.y - 16}px)`,
          opacity: 0.6,
        }}
      />

      {/* Label */}
      {cursorLabel && (
        <div
          className="pointer-events-none fixed text-xs font-bold text-gold whitespace-nowrap z-50"
          style={{
            transform: `translate(${cursorState.x + 15}px, ${cursorState.y + 15}px)`,
          }}
        >
          {cursorLabel}
        </div>
      )}
    </>
  );
}
