'use client';

import Container from '@/components/ui/Container';
import ContactForm from './ContactForm';
import { LOCATION } from '@/lib/constants';

export default function Contact() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Location Info */}
          <div className="space-y-12">
            {/* Address */}
            <div className="sticky top-32">
              <h3 className="text-sm uppercase tracking-widest text-text-muted font-bold mb-4">
                Location
              </h3>
              <p className="text-xl md:text-2xl font-display font-bold text-text-primary mb-4">
                {LOCATION.name}
              </p>
              <p className="text-text-secondary mb-8">
                Our technical office is ready to discuss your project requirements and provide
                comprehensive engineering solutions.
              </p>

              {/* Map Placeholder */}
              <div className="w-full aspect-square rounded-lg border border-steel/30 bg-gradient-to-br from-navy-deep to-steel overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <p className="text-text-muted text-sm">INTERACTIVE MAP</p>
                  <p className="text-gold text-xs mt-2">PLACEHOLDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
