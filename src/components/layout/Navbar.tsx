'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useNavbarHide } from '@/hooks/useNavbarHide';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useNavbarHide();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close menu on scroll
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out"
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-xl font-display font-bold tracking-widest text-gold hover:text-cyan transition-colors"
          >
            AL AHD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-gold transition-colors duration-300"
                data-cursor="NAVIGATE"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex"
            data-cursor="START"
          >
            START A PROJECT
            <span className="ml-1">→</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-gold transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-gold transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-gold transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-steel/95 backdrop-blur-md border-b border-steel/50">
          <Container>
            <div className="flex flex-col gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="secondary" size="sm" className="w-full">
                START A PROJECT
              </Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
