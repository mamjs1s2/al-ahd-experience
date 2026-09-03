'use client';

import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { MOTION } from '@/lib/constants';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current?.querySelectorAll('[data-fade]'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: MOTION.durationMedium,
          ease: MOTION.easeIndustrial,
          stagger: 0.1,
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  if (!project) {
    notFound();
  }

  return (
    <div ref={pageRef} className="bg-obsidian text-text-primary">
      <Navbar />

      {/* Hero */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-gradient-dark mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/30 to-obsidian" />
        <Container className="relative z-10 h-full flex flex-col justify-center">
          <p className="text-gold text-sm uppercase tracking-widest mb-6" data-fade>
            PROJECT / {project.slug.toUpperCase()}
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text-primary mb-8"
            data-fade
          >
            {project.title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl" data-fade>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Location</p>
              <p className="text-text-primary">{project.location}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Category</p>
              <p className="text-text-primary">{project.category}</p>
            </div>
            {project.year && (
              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Year</p>
                <p className="text-text-primary">{project.year}</p>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container>
        <div className="py-24 md:py-32 space-y-12">
          {/* Scope */}
          {project.scope && (
            <section data-fade>
              <h2 className="text-3xl font-display font-bold text-gold mb-6">PROJECT SCOPE</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.scope.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="text-gold mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <section data-fade>
              <h2 className="text-3xl font-display font-bold text-gold mb-6">KEY METRICS</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-steel/30 rounded-lg bg-steel/20"
                  >
                    <p className="text-text-muted text-sm uppercase tracking-widest mb-2">
                      {metric.label}
                    </p>
                    <p className="text-3xl font-display font-bold text-gold">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Description */}
          {project.description && (
            <section data-fade>
              <h2 className="text-3xl font-display font-bold text-gold mb-6">OVERVIEW</h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </section>
          )}
        </div>
      </Container>

      {/* CTA */}
      <section className="relative py-24 md:py-32 border-t border-steel/20">
        <Container>
          <div className="text-center space-y-8" data-fade>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
              Interested in a similar project?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Let us know about your requirements and we'll provide a comprehensive solution.
            </p>
            <Link href="/#contact">
              <Button variant="primary" size="lg" data-cursor="CONTACT">
                START A PROJECT
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
