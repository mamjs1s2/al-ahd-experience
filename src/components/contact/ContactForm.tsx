'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import gsap from 'gsap';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import { MOTION } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  projectType: z.string().min(2, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('loading');
      // API call would go here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  useEffect(() => {
    if (submitStatus === 'success') {
      gsap.fromTo(
        formRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: MOTION.durationFast }
      );
    }
  }, [submitStatus]);

  return (
    <div className="space-y-8">
      <div>
        <SectionLabel label="GET IN TOUCH" />
        <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          START A PROJECT
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl">
          Tell us what you're building. Our technical office will review your requirements
          and provide a comprehensive solution.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register('name')}
              className="w-full"
            />
            {errors.name && (
              <p className="text-heat-orange text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Company *
            </label>
            <input
              type="text"
              placeholder="Company name"
              {...register('company')}
              className="w-full"
            />
            {errors.company && (
              <p className="text-heat-orange text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Email *
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register('email')}
              className="w-full"
            />
            {errors.email && (
              <p className="text-heat-orange text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Phone *
            </label>
            <input
              type="tel"
              placeholder="+20 (0)XX XXXX XXXX"
              {...register('phone')}
              className="w-full"
            />
            {errors.phone && (
              <p className="text-heat-orange text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Project Type *
          </label>
          <select {...register('projectType')} className="w-full">
            <option value="">Select a project type</option>
            <option value="civil">Civil & Concrete Works</option>
            <option value="steel">Steel Structures</option>
            <option value="flooring">Industrial Flooring</option>
            <option value="mep">MEP Systems</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && (
            <p className="text-heat-orange text-sm mt-1">{errors.projectType.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Project Details *
          </label>
          <textarea
            placeholder="Tell us about your project, requirements, and timeline..."
            rows={6}
            {...register('message')}
            className="w-full resize-none"
          />
          {errors.message && (
            <p className="text-heat-orange text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-gold/10 border border-gold/30 rounded-lg">
            <p className="text-gold font-medium">✓ Transmission Complete</p>
            <p className="text-text-secondary text-sm mt-1">
              Your request has been received. Our technical office will review it shortly.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-heat-orange/10 border border-heat-orange/30 rounded-lg">
            <p className="text-heat-orange font-medium">× Transmission Error</p>
            <p className="text-text-secondary text-sm mt-1">Please try again.</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full md:w-auto"
          data-cursor="SUBMIT"
        >
          SEND REQUEST
          <span className="ml-2">→</span>
        </Button>
      </form>
    </div>
  );
}
