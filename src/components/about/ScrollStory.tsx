'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import { MOTION } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    title: 'FROM DRAWING',
    subtitle: 'Blueprint to Reality',
    description: 'Every project begins with precision planning and technical specifications.',
  },
  {
    title: 'TO STRUCTURE',
    subtitle: 'Steel Takes Form',
    description: 'Advanced structural engineering creates the backbone of industrial facilities.',
  },
  {
    title: 'TO OPERATION',
    subtitle: 'Systems Integrated',
    description: 'Complete MEP integration and commissioning for full operational readiness.',
  },
  {
    title: 'TO PERFORMANCE',
    subtitle: 'Excellence Delivered',
    description: 'Facilities built to perform at the highest industrial standards.',
  },
];

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      });

      // Story text animations
      phases.forEach((phase, index) => {
        tl.fromTo(
          `[data-phase="${index}"]`,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          index * 0.3
        );
      });

      // Image animations
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden"
      id="about"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Story Text */}
          <div ref={textRef}>
            <SectionLabel label="WHO WE ARE" />

            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  data-phase={index}
                  className="opacity-0"
                >
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gold mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            ref={imageRef}
            className="hidden lg:block relative h-[600px] opacity-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-cyan/5 to-transparent rounded-lg overflow-hidden border border-steel/30">
              {/* Placeholder for industrial imagery */}
              <div className="w-full h-full bg-gradient-to-br from-navy-deep via-steel to-obsidian flex items-center justify-center">
                <div className="text-center">
                  <p className="text-text-muted mb-4">INDUSTRIAL FACILITY</p>
                  <p className="text-gold text-sm">IMAGE PLACEHOLDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
