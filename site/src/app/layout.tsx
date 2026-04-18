import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PM Pilot — AI co-pilot for product managers',
  description:
    'PM Pilot turns Claude Code into your daily PM operating system. Meeting prep, PRDs, weekly status, market sizing — out of the box. No coding required.',
  openGraph: {
    title: 'PM Pilot — AI co-pilot for product managers',
    description:
      'Meeting prep, PRDs, weekly status, market sizing — out of the box. No coding required.',
    url: 'https://pm-pilot.dev',
    siteName: 'PM Pilot',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Pilot — AI co-pilot for product managers',
    description: 'Claude Code skills for PMs. Free & open source.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
