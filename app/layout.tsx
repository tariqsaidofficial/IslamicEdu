import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'IslamicEdu - Authentic Islamic Knowledge & Spiritual Learning',
  description: 'IslamicEdu provides a comprehensive and modern gateway to Islamic education, spiritual growth, and community services.',
  keywords: ['Islamic Education', 'Islamic Studies', 'Muslim Community', 'Quran', 'Hajj', 'Prayer', 'Ramadan'],
  authors: [{ name: 'IslamicEdu Team' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/images/logo/logo.webp',
    apple: '/images/logo/logo.webp',
  },
  openGraph: {
    title: 'IslamicEdu - Authentic Islamic Knowledge',
    description: 'Comprehensive Islamic education and spiritual learning platform',
    type: 'website',
    siteName: 'IslamicEdu',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#c5a075',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
