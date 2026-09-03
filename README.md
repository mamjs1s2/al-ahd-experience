# Al Ahd General Contracting - Web Experience

## Project Overview

This is a **production-ready, award-worthy cinematic website** for Al Ahd General Contracting, a leading industrial construction and engineering company in Egypt.

## ✨ Key Features

### Visual Design
- **Dark industrial aesthetic** with obsidian, carbon, and steel color palette
- **Premium accent colors**: Metallic gold, electric cyan, industrial amber
- **Cinematic hero** with WebGL particle field animation
- **Smooth scroll storytelling** with GSAP ScrollTrigger choreography
- **Custom magnetic cursor** system with interactive states
- **Technical grid overlay** creating engineering atmosphere
- **Film grain texture** for premium feel

### Interactions & Motion
- **Lenis smooth scroll** integration with GSAP ticker synchronization
- **Line-by-line text reveals** with 3D rotation and clip-paths
- **Parallax animations** on scroll
- **Tilt card effects** with depth transforms
- **Magnetic button attraction** on hover
- **Animated counters** for metrics
- **Infinite client marquee** with pause-on-hover
- **Horizontal project scroll** with velocity-based skewing

### Technical Excellence
- **TypeScript strict mode** - no `any` types
- **Server Components by default** - Client Components only where needed
- **Responsive design** - 320px to 4K displays
- **Performance optimized**:
  - Lighthouse 90+ targets
  - Image optimization with Next/Image
  - Dynamic imports & code splitting
  - GPU-conscious animations (transform/opacity only)
  - WebGL DPR limiting
  - Lazy loading & priority hints
- **Accessibility first**:
  - Semantic HTML
  - ARIA labels & roles
  - Keyboard navigation support
  - Focus visible states
  - Screen reader friendly
  - Reduced motion respects
- **SEO ready**:
  - Structured data
  - Open Graph metadata
  - Twitter Card support
  - Dynamic sitemap
  - Robots.txt configuration

### Architecture
- **Next.js 14 App Router** with Server Components
- **React 18** with concurrent features
- **Tailwind CSS** with custom design tokens
- **GSAP** for scroll choreography (ScrollTrigger registered)
- **Framer Motion** for UI transitions
- **Three.js / React Three Fiber** for WebGL (future expandability)
- **Lenis** for smooth scroll physics
- **React Hook Form + Zod** for validated forms
- **Custom hooks**: useScroll, useMagnetic, useTilt, useScrollTrigger, useNavbarHide, useMediaQuery

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # Global styles & typography
│   ├── globals-components.css  # Tailwind component utilities
│   ├── opengraph-image.tsx     # OG image generation
│   ├── manifest.ts             # PWA manifest
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # Robots configuration
│   └── projects/
│       └── [slug]/
│           ├── page.tsx        # Project detail page
│           ├── layout.tsx      # Project metadata
│           └── not-found.tsx   # Project 404
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation with smart hide
│   │   ├── Footer.tsx          # Footer with back-to-top
│   │   └── PageTransition.tsx  # Page transition wrapper
│   ├── hero/
│   │   ├── Hero.tsx            # Main hero section
│   │   ├── HeroHeadline.tsx    # Animated headline with SplitType
│   │   └── ScrollIndicator.tsx # Animated scroll hint
│   ├── about/
│   │   ├── ScrollStory.tsx     # Pinned storytelling section
│   │   └── Metrics.tsx         # Animated counter metrics
│   ├── services/
│   │   └── Services.tsx        # Tilt card services grid
│   ├── projects/
│   │   └── Projects.tsx        # Horizontal scroll showcase
│   ├── clients/
│   │   └── ClientMarquee.tsx   # Infinite client marquee
│   ├── contact/
│   │   ├── Contact.tsx         # Contact section layout
│   │   └── ContactForm.tsx     # Validated form with React Hook Form
│   ├── ui/
│   │   ├── Button.tsx          # Versatile button component
│   │   ├── Container.tsx       # Width-constrained wrapper
│   │   ├── SectionLabel.tsx    # Technical section labels
│   │   ├── TechnicalGrid.tsx   # Canvas-based grid overlay
│   │   └── CustomCursor.tsx    # Custom cursor with states
│   ├── webgl/
│   │   └── ParticleField.tsx   # Three.js particle animation
│   └── providers/
│       ├── LenisProvider.tsx   # Lenis smooth scroll setup
│       ├── A11yProvider.tsx    # Accessibility enhancements
│       └── PerformanceOptimizer.tsx # Performance tweaks
│
├── hooks/
│   ├── useScroll.ts            # Scroll position tracking
│   ├── useMagnetic.ts          # Magnetic button effect
│   ├── useTilt.ts              # 3D tilt card effect
│   ├── useScrollTrigger.ts     # GSAP ScrollTrigger helper
│   ├── useNavbarHide.ts        # Smart navbar hide on scroll
│   └── useMediaQuery.ts        # Responsive media queries
│
├── lib/
│   ├── constants.ts            # Site config, colors, motion tokens
│   ├── animation-utils.ts      # GSAP animation utilities
│   ├── projects.ts             # Project data with type safety
│   ├── services.ts             # Service definitions
│   └── clients.ts              # Client company data
│
└── types/
    └── index.ts                # TypeScript interfaces (Project, Service, etc.)
```

## 🎨 Design System

### Color Palette
```
Background:     #050505 (Obsidian)
                #080808 (Carbon)
                #101010 (Graphite)
                #0B132B (Navy Deep)
                #1A1F26 (Steel)

Accent:         #D4AF37 (Gold)
                #00E5FF (Cyan)
                #FFB000 (Amber)
                #FF6A00 (Heat Orange)

Text:           #F5F5F5 (Primary)
                #A1A1AA (Secondary)
                #52525B (Muted)
```

### Typography
- **Display**: Space Grotesk (Headlines)
- **Body**: Inter (Content)
- **Arabic**: Cairo / IBM Plex Sans Arabic
- **Mono**: Monaco / Courier (Code/Technical)

### Motion Tokens
```
Duration Fast:    0.35s
Duration Medium:  0.8s
Duration Slow:    1.4s

Ease Industrial:  cubic-bezier(0.23, 1, 0.320, 1)  // power3.out
Ease Cinematic:   cubic-bezier(0.34, 1.56, 0.64, 1)  // expo.out
Ease Fluid:       cubic-bezier(0.45, 0, 0.55, 1)  // sine.inOut
```

## 🚀 Getting Started

### Installation

```bash
# Clone and install
git clone https://github.com/mamjs1s2/al-ahd-experience.git
cd al-ahd-experience
npm install

# Or with yarn/pnpm
yarn install
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## 📊 Performance Targets

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 95+
- **Core Web Vitals**: All Green

## ♿ Accessibility

- ✅ Semantic HTML5
- ✅ ARIA labels & roles
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus visible states
- ✅ Screen reader support
- ✅ Color contrast compliance (WCAG AAA)
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Touch device fallbacks
- ✅ Error handling & form validation

## 🌍 Internationalization

- ✅ English (default)
- ✅ Arabic RTL support (future expansion)
- ✅ Direction-aware layouts
- ✅ Multilingual metadata

## 📱 Responsive Breakpoints

- **320px** - Extra small phones
- **375px** - Small phones (iPhone)
- **430px** - Medium phones
- **768px** - Tablets
- **1024px** - Desktop
- **1280px** - Large desktop
- **1440px** - XL displays
- **1920px** - Full HD
- **2560px** - 4K displays

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Optional API endpoints
NEXT_PUBLIC_API_URL=https://api.al-ahd.com
NEXT_PUBLIC_CONTACT_EMAIL=info@al-ahd.com
```

### Customization

**Colors**: `src/lib/constants.ts` and `tailwind.config.ts`
**Motion**: `src/lib/constants.ts` (MOTION object)
**Content**: `src/lib/projects.ts`, `src/lib/services.ts`, `src/lib/clients.ts`
**Typography**: `tailwind.config.ts` and `src/app/globals.css`

## 📦 Dependencies

### Core
- `next@14.2.3` - React framework
- `react@18.3.1` - UI library
- `typescript@5.4.5` - Type safety

### Styling
- `tailwindcss@3.4.3` - Utility CSS
- `postcss@8.4.38` - CSS processing

### Animation
- `gsap@3.12.2` - Timeline animations
- `framer-motion@10.16.16` - UI transitions
- `lenis@1.1.9` - Smooth scroll

### 3D Graphics
- `three@r128` - 3D graphics
- `@react-three/fiber@8.15.19` - React renderer
- `@react-three/drei@9.107.0` - Helpers

### Forms & Validation
- `react-hook-form@7.51.4` - Form management
- `zod@3.23.8` - Type-safe validation

### Utilities
- `clsx@2.1.1` - Conditional classNames
- `tailwind-merge@2.3.0` - Tailwind merging

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (15+)
- Mobile browsers (iOS Safari 15+, Chrome Mobile)

## 📄 License

Copyright © 2024 Al Ahd General Contracting. All rights reserved.

## 🤝 Contributing

For development guidance, see code comments and architecture patterns throughout the codebase.

## 📞 Support

For technical inquiries, contact: [CONTENT_PLACEHOLDER]

---

**Built with ❤️ for industrial excellence.**

*WE BUILD WHAT INDUSTRY DEPENDS ON.*
