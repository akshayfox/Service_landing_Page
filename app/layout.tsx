import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Service Management Software for Fast‑Moving Teams | YourBrand',
  description:
    'Centralize tasks, automate workflows, and accelerate billing. Real‑time dashboards, agent performance reports, and secure RBAC—start free today',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
