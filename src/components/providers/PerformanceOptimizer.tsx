'use client';

import { useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function PerformanceOptimizer() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Disable animations on low-end devices
    const connection = (navigator as any).connection;
    if (connection?.saveData || connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') {
      document.documentElement.style.setProperty('--duration-slow', '0.01s');
      document.documentElement.style.setProperty('--duration-medium', '0.01s');
      document.documentElement.style.setProperty('--duration-fast', '0.01s');
    }

    // Prefetch critical resources
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = '/api/projects';
        document.head.appendChild(link);
      });
    }
  }, [isMobile]);

  return null;
}
