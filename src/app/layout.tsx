import type { Metadata, Viewport } from 'next';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import TechnicalGrid from '@/components/ui/TechnicalGrid';
import LenisProvider from '@/components/providers/LenisProvider';
import A11yProvider from '@/components/providers/A11yProvider';
import PerformanceOptimizer from '@/components/providers/PerformanceOptimizer';
import './globals.css';
import './globals-components.css';

const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Industrial Construction & Engineering`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'industrial construction',
    'steel structures',
    'epoxy flooring',
    'MEP systems',
    'Egypt',
    'engineering',
    'manufacturing',
    'Benha',
  ],
  authors: [{ name: 'Al Ahd General Contracting' }],
  creator: 'Al Ahd General Contracting',
  publisher: 'Al Ahd General Contracting',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Industrial Construction & Engineering`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Industrial Construction & Engineering`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export { metadata };

const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'dark',
  themeColor: '#D4AF37',
};

export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#050505" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Al Ahd" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&display=swap"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <A11yProvider>
          <LenisProvider>
            <PerformanceOptimizer />
            <TechnicalGrid opacity={0.02} />
            <CustomCursor />
            <main id="main" className="relative w-full bg-obsidian overflow-x-hidden">
              {children}
            </main>
          </LenisProvider>
        </A11yProvider>
      </body>
    </html>
  );
}
