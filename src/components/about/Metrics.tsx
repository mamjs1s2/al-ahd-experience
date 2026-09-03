'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import { MOTION } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    value: '18,000',
    label: 'm² Roofing & Insulation',
  },
  {
    value: '1,000',
    label: 'Tons Industrial Lines',
  },
  {
    value: '05',
    label: 'Core Engineering Disciplines',
  },
  {
    value: '360°',
    label: 'End-to-End Execution',
  },
];

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((counter, index) => {
        const valueElement = counter.querySelector('[data-value]');
        if (!valueElement) return;

        const text = metrics[index].value;
        const numericValue = parseInt(text.replace(/,/g, ''));

        gsap.to(
          { value: 0 },
          {
            value: numericValue,
            duration: MOTION.durationSlow,
            ease: MOTION.easeIndustrial,
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: function () {
              if (text.includes(',')) {
                valueElement.textContent = Math.floor(this.targets()[0].value)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              } else {
                valueElement.textContent = Math.floor(this.targets()[0].value).toString();
              }
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-r from-navy-deep via-obsidian to-navy-deep"
    >
      <Container>
        <div className="mb-12">
          <SectionLabel label="CAPABILITIES" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            By The Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) counterRefs.current[index] = el;
              }}
              className="p-6 md:p-8 border border-steel/50 rounded-lg bg-steel/20 backdrop-blur-sm hover:border-gold/30 transition-all"
            >
              <p
                data-value
                className="text-3xl md:text-4xl font-display font-bold text-gold mb-2"
              >
                0
              </p>
              <p className="text-text-secondary text-sm md:text-base">{metric.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
