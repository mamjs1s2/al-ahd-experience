'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import { useTilt } from '@/hooks/useTilt';
import { MOTION } from '@/lib/constants';
import { services } from '@/lib/services';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
}

function ServiceCard({ id, title, description }: ServiceCardProps) {
  const cardRef = useTilt({ maxRotation: 8, scale: 1.02 });

  return (
    <div
      ref={cardRef as React.Ref<HTMLDivElement>}
      className="card group cursor-pointer h-full"
      data-cursor="EXPLORE"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
          <span className="text-xl md:text-2xl font-display font-bold text-gold">
            {id.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary mb-4 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: MOTION.durationMedium,
          ease: MOTION.easeIndustrial,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
      id="services"
    >
      <Container>
        <div className="mb-12 md:mb-20">
          <SectionLabel label="EXPERTISE" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary max-w-3xl">
            Core Engineering Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
