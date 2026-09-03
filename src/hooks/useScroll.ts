'use client';

import { useEffect, useState } from 'react';

interface ScrollPosition {
  y: number;
  direction: 'up' | 'down';
}

interface UseScrollProps {
  onScroll?: (position: ScrollPosition) => void;
}

export function useScroll({ onScroll }: UseScrollProps = {}) {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    y: 0,
    direction: 'down',
  });

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollPosition({
        y: currentScrollY,
        direction: direction as 'up' | 'down',
      });

      onScroll?.({ y: currentScrollY, direction: direction as 'up' | 'down' });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return scrollPosition;
}
