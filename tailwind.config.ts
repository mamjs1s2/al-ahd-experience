import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian & Blacks
        'obsidian': '#050505',
        'carbon': '#080808',
        'graphite': '#101010',
        'navy-deep': '#0B132B',
        'steel': '#1A1F26',
        
        // Accents
        'gold': '#D4AF37',
        'cyan': '#00E5FF',
        'amber': '#FFB000',
        'heat-orange': '#FF6A00',
        
        // Text
        'text-primary': '#F5F5F5',
        'text-secondary': '#A1A1AA',
        'text-muted': '#52525B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'arabic': ['Cairo', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      opacity: {
        '02': '0.02',
        '03': '0.03',
        '05': '0.05',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'cyan-glow': '0 0 20px rgba(0, 229, 255, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;