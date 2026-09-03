import gsap from 'gsap';
import { MOTION } from './constants';

export const createRevealUpAnimation = (
  element: HTMLElement,
  options?: { delay?: number; stagger?: number }
) => {
  const tl = gsap.timeline();
  const children = element.querySelectorAll('[data-reveal]');

  if (children.length === 0) {
    // Fallback: animate the element itself
    tl.fromTo(
      element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.durationMedium,
        ease: MOTION.easeIndustrial,
        delay: options?.delay || 0,
      }
    );
  } else {
    tl.fromTo(
      children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.durationMedium,
        ease: MOTION.easeIndustrial,
        stagger: options?.stagger || 0.1,
        delay: options?.delay || 0,
      }
    );
  }

  return tl;
};

export const createScaleRevealAnimation = (
  element: HTMLElement,
  options?: { delay?: number }
) => {
  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: MOTION.durationMedium,
      ease: MOTION.easeIndustrial,
      delay: options?.delay || 0,
    }
  );
};

export const createParallaxAnimation = (
  element: HTMLElement,
  scrollTrigger: any,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: scrollTrigger || element,
      scrub: 1,
    },
  });
};

export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = MOTION.durationSlow
) => {
  const obj = { value: 0 };

  return gsap.to(obj, {
    value: target,
    duration,
    ease: MOTION.easeIndustrial,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
  });
};

export const createMagneticEffect = (
  element: HTMLElement,
  distance: number = 50
) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = (mouseX - centerX) * 0.1;
    const deltaY = (mouseY - centerY) * 0.1;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

export const createTiltEffect = (
  element: HTMLElement,
  options?: { maxRotation?: number; scale?: number }
) => {
  const maxRotation = options?.maxRotation || 10;
  const scale = options?.scale || 1.05;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotationX = (mouseY / rect.height) * maxRotation;
    const rotationY = -(mouseX / rect.width) * maxRotation;

    gsap.to(element, {
      rotationX,
      rotationY,
      scale,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};