'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-obsidian text-text-primary flex items-center justify-center">
      <Container>
        <div className="text-center space-y-8 max-w-2xl">
          <div>
            <p className="text-gold text-sm uppercase tracking-widest mb-2">ERROR</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Something went wrong
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              We encountered an unexpected error. Our technical team has been notified.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={reset}>
              Try again
            </Button>
            <Button variant="secondary" size="lg" onClick={() => (window.location.href = '/')}>
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
