import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Navigation from './components/Navigation';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elvision Tech | Data Analytics & Business Intelligence Solutions',
  description: 'Transform your business with data-driven insights.',
  keywords: 'data analytics, business intelligence, BI solutions, data visualization, analytics consulting, Power BI, Tableau, data strategy',
  authors: [{ name: 'Samuel Simogiarto' }],
  openGraph: {
    title: 'Elvision Tech | Data Analytics & Business Intelligence Solutions',
    description: 'Transform your business with data-driven insights.',
    url: 'https://elvision.com',
    siteName: 'Elvision Tech',
    images: [
      {
        url: '/images/elvision-og.png',
        width: 1200,
        height: 630,
        alt: 'Elvision Tech',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elvision Tech | Data Analytics & Business Intelligence Solutions',
    description: 'Transform your business with data-driven insights.',
    images: ['/images/elvision-og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-darker text-main antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-[#0A0E23]">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-main-secondary">
            © {new Date().getFullYear()} Elvision Technology. All rights reserved.
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
