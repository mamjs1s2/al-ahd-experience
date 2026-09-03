'use client';

import { useEffect, useRef } from 'react';
import ParticleField from '@/components/webgl/ParticleField';
import HeroHeadline from './HeroHeadline';
import ScrollIndicator from './ScrollIndicator';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import gsap from 'gsap';
import { MOTION } from '@/lib/constants';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in content
      gsap.fromTo(
        contentRef.current?.querySelectorAll('[data-fade]'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: MOTION.durationMedium,
          ease: MOTION.easeIndustrial,
          stagger: 0.1,
          delay: 0.8,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen md:h-[120vh] overflow-hidden bg-gradient-dark"
      id="hero"
    >
      {/* WebGL Background */}
      <ParticleField count={80} speed={0.3} />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/30 to-obsidian z-10" />

      {/* Content */}
      <Container className="relative z-20 h-full flex flex-col justify-center items-start pt-32 md:pt-20">
        <div ref={contentRef}>
          {/* Label */}
          <p
            className="text-xs uppercase tracking-widest text-gold mb-8 md:mb-12 font-mono"
            data-fade
          >
            AL AHD / GENERAL CONTRACTING
          </p>

          {/* Headline */}
          <HeroHeadline
            text="WE BUILD WHAT INDUSTRY DEPENDS ON."
            className="mb-8 md:mb-12"
          />

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
            data-fade
          >
            Delivering precision-engineered industrial solutions across Egypt.
            From steel structures to advanced flooring systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4" data-fade>
            <Button
              variant="primary"
              size="lg"
              data-cursor="EXPLORE"
            >
              EXPLORE OUR LEGACY
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              data-cursor="CONSULT"
            >
              REQUEST CONSULTATION
            </Button>
          </div>

          {/* Floating metadata */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12" data-fade>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted mb-2">Service</p>
              <p className="text-sm md:text-base text-text-primary">INDUSTRIAL CONSTRUCTION</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted mb-2">Specialization</p>
              <p className="text-sm md:text-base text-text-primary">STEEL & EPOXY</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs uppercase tracking-widest text-text-muted mb-2">Location</p>
              <p className="text-sm md:text-base text-text-primary">BENHA, EGYPT</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}
