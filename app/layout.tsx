import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omsnet Digital Fortress - Enterprise Cybersecurity Solutions',
  description: 'Professional cybersecurity services protecting your digital assets with military-grade encryption, 24/7 threat monitoring, and expert threat intelligence.',
  keywords: 'cybersecurity, network security, cloud security, threat intelligence, incident response, Leeds, West Yorkshire',
  authors: [{ name: 'Omsnet Digital Fortress' }],
  creator: 'Omsnet Digital Fortress',
  publisher: 'Omsnet Digital Fortress',
  robots: 'index, follow',
  openGraph: {
    title: 'Omsnet Digital Fortress - Enterprise Cybersecurity Solutions',
    description: 'Professional cybersecurity services protecting your digital assets with military-grade encryption and 24/7 threat monitoring.',
    url: 'https://omsnet.co.uk',
    siteName: 'Omsnet Digital Fortress',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Omsnet Digital Fortress - Cybersecurity Solutions',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omsnet Digital Fortress - Enterprise Cybersecurity Solutions',
    description: 'Professional cybersecurity services protecting your digital assets',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
