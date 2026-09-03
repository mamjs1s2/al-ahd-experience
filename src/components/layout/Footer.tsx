'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';
import { MOTION } from '@/lib/constants';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer on mount
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 50,
        duration: MOTION.durationMedium,
        ease: MOTION.easeIndustrial,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-t from-obsidian via-navy-deep to-obsidian py-16 md:py-24 overflow-hidden border-t border-steel/20"
    >
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[15vw] font-display font-bold text-steel/5 whitespace-nowrap">
          AL AHD
        </h2>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-gold mb-4">AL AHD</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Building Trust. Delivering Quality.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase text-text-muted mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase text-text-muted mb-4">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-bold uppercase text-text-muted mb-4">Location</h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              Al Manar Tower
              <br />
              Nile Corniche
              <br />
              Benha, Egypt
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-steel to-transparent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2024 Al Ahd General Contracting. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            ref={backToTopRef}
            onClick={handleBackToTop}
            className="relative w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all group"
            aria-label="Back to top"
            data-cursor="TOP"
          >
            <svg
              className="w-4 h-4 text-gold group-hover:translate-y-[-2px] transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </Container>
    </footer>
  );
}
