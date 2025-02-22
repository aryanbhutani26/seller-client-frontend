import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClothBuddy - Business Registration',
  description: 'Register your clothing business with ClothBuddy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar className=" fixed top-0 left-0 w-full bg-white shadow-md z-50" >
         
      </NavBar>
        {children}
        </body>
    </html>
  );
}