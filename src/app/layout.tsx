'use client';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { usePathname } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ['100','200','300','400', '500', '600'] });

const disabledDashboardPaths = [
  '/dashboard',
];

function isNavigationEnabled(pathname: string): boolean {
  return !disabledDashboardPaths.some((disabledPath) => pathname.startsWith(disabledPath));
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const navigationEnabled = isNavigationEnabled(pathname);

  return (
    <html lang="en">
      <body className={poppins.className}>
        {navigationEnabled && <Navbar />}
        {children}
        {navigationEnabled && <Footer />}
      </body>
    </html>
  );
}