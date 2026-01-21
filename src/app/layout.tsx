import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from '@/components/templates/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Fernando Mos | Desenvolvedor Full Stack',
  description: 'Portfólio de Fernando Mos - Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.',
  authors: [{ name: 'Fernando Mos' }],
  openGraph: {
    title: 'Fernando Mos | Desenvolvedor Full Stack',
    description: 'Portfólio de Fernando Mos - Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
