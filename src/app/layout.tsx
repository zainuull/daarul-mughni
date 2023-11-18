'use client';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { usePathname } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ['100','200','300','400', '500', '600'] });
const disbaledNavigation = [
  '/login',
  '/register',
  '/dashboard',
  '/dashboard/guru',
  '/dashboard/guru/add-data-guru',
  '/dashboard/siswa',
  '/dashboard/siswa/add-data-siswa',
  '/dashboard/activity',
  '/dashboard/activity/add-data-activity',
  '/dashboard/absensi',
  '/dashboard/absensi/add-data-absensi',
  '/dashboard/help',
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={poppins.className}>
        {!disbaledNavigation.includes(pathname) && <Navbar />}
        {children}
      </body>
      {!disbaledNavigation.includes(pathname) && <Footer />}
    </html>
  );
}
