import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'AceSphere Tennis | Premium Tennis Equipment Worldwide',
  description: 'Shop premium tennis racquets, shoes, clothing, bags, accessories and training equipment. Europe-first service with worldwide delivery.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
