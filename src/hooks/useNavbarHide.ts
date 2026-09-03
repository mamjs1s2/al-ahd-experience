'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from './useScroll';

export function useNavbarHide() {
  const navbarRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);

  useScroll({
    onScroll: (position) => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      const isScrollingDown = position.direction === 'down';
      const isAtTop = position.y < 100;

      if (isAtTop) {
        navbar.classList.remove('translate-y-full');
        navbar.classList.remove('shadow-lg');
        navbar.classList.remove('bg-steel/90');
        navbar.classList.remove('backdrop-blur-md');
        navbar.classList.remove('border-b');
      } else {
        if (isScrollingDown) {
          navbar.classList.add('translate-y-full');
        } else {
          navbar.classList.remove('translate-y-full');
          navbar.classList.add('shadow-lg');
          navbar.classList.add('bg-steel/90');
          navbar.classList.add('backdrop-blur-md');
          navbar.classList.add('border-b');
          navbar.classList.add('border-steel/50');
        }
      }

      lastScrollYRef.current = position.y;
    },
  });

  return navbarRef;
}
