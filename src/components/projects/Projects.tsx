'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { MOTION } from '@/lib/constants';
import { projects } from '@/lib/projects';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  slug: string;
  title: string;
  location: string;
  category: string;
  year?: string;
  metrics?: Array<{ label: string; value: string }>;
}

function ProjectCard({
  slug,
  title,
  location,
  category,
  year,
  metrics,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div
        className="group cursor-pointer"
        data-cursor="VIEW"
      >
        {/* Project Number */}
        <div className="mb-6">
          <p className="text-6xl md:text-7xl font-display font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
            {String(projects.indexOf(projects.find(p => p.slug === slug)!) + 1).padStart(2, '0')}
          </p>
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary group-hover:text-gold transition-colors">
            {title}
          </h3>

          <div className="space-y-2">
            <p className="text-text-secondary text-sm">
              <span className="uppercase tracking-widest">Location</span>
              <br />
              {location}
            </p>
            {year && (
              <p className="text-text-secondary text-sm">
                <span className="uppercase tracking-widest">Year</span>
                <br />
                {year}
              </p>
            )}
            <p className="text-text-secondary text-sm">
              <span className="uppercase tracking-widest">Category</span>
              <br />
              {category}
            </p>
          </div>

          {/* Metrics */}
          {metrics && (
            <div className="pt-4 border-t border-steel/30 space-y-2">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex justify-between text-xs">
                  <span className="text-text-muted uppercase tracking-widest">
                    {metric.label}
                  </span>
                  <span className="text-gold font-mono">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      gsap.registerPlugin(ScrollTrigger);

      const proxy = { skew: 0, skewSetter(skew: number) { this.skew = skew; gsap.set(scrollContainerRef.current, { skewY: skew }); }, getCurrentSkew() { return this.skew; }, onUpdate() { gsap.set(scrollContainerRef.current, { skewY: this.skew }); } },
        clamp = gsap.utils.clamp(-20, 20),
        onScrub = gsap.ticker.add(proxy.onUpdate.bind(proxy)),
        scrub = gsap.to(proxy, { skew: 0, duration: 0.8, ease: 'power3', onComplete: () => gsap.ticker.remove(onScrub) });

      ScrollTrigger.addEventListener('scrub', onScrub);

      gsap.set(scrollContainerRef.current, { transformOrigin: 'center center', force3D: true });

      gsap.fromTo(
        scrollContainerRef.current,
        { x: 0 },
        {
          x: -(scrollContainerRef.current?.scrollWidth! - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: () => `+=${(scrollContainerRef.current?.scrollWidth || 0) - window.innerWidth}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden" id="projects">
      <div className="px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
        <Container>
          <SectionLabel label="PORTFOLIO" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            Notable Projects
          </h2>
        </Container>
      </div>

      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 md:gap-12 px-4 sm:px-6 lg:px-8"
        >
          {projects.map((project, index) => (
            <div key={project.slug} className="flex-shrink-0 w-[90vw] md:w-[75vw]">
              <ProjectCard
                slug={project.slug}
                title={project.title}
                location={project.location}
                category={project.category}
                year={project.year}
                metrics={project.metrics}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
