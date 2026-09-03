'use client';

import { useEffect } from 'react';

export default function A11yProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className =
      'fixed top-0 left-0 -translate-x-full focus:translate-x-0 bg-gold text-obsidian px-4 py-2 z-50';
    document.body.prepend(skipLink);

    // Announce route changes
    const handleRouteChange = () => {
      const heading = document.querySelector('h1');
      if (heading) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Navigated to ${heading.textContent}`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}
