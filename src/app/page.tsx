'use client';

import Hero from '@/components/hero/Hero';
import ScrollStory from '@/components/about/ScrollStory';
import Metrics from '@/components/about/Metrics';
import Services from '@/components/services/Services';
import Projects from '@/components/projects/Projects';
import ClientMarquee from '@/components/clients/ClientMarquee';
import Contact from '@/components/contact/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import TechnicalGrid from '@/components/ui/TechnicalGrid';
import LenisProvider from '@/components/providers/LenisProvider';

export default function Home() {
  return (
    <LenisProvider>
      <div className="relative w-full bg-obsidian overflow-x-hidden">
        {/* Background Elements */}
        <TechnicalGrid opacity={0.02} />
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About / Who We Are */}
        <ScrollStory />
        <Metrics />

        {/* Services */}
        <Services />

        {/* Projects */}
        <Projects />

        {/* Clients */}
        <ClientMarquee />

        {/* Trust Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-navy-deep to-obsidian border-y border-steel/20">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[12vw] font-display font-bold text-steel/5 text-center whitespace-normal px-4">
              BUILT FOR THE EDGE
            </h2>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <p className="text-2xl md:text-4xl font-display font-bold text-text-primary leading-tight">
              Built for the environments where failure is not an option.
            </p>
          </div>
        </section>

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </LenisProvider>
  );
}
