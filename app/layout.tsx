import React from 'react'
import type { Metadata } from 'next'
import { Bebas_Neue, Rajdhani, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BRAND } from '@/lib/data'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const rajdhani = Rajdhani({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-rajdhani' })
const inter = Inter({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: `%s | ${BRAND.name} Pakistan`,
    default: `${BRAND.name} Pakistan — Custom Steel Fabrication`,
  },
  description: BRAND.tagline + '. ' + BRAND.mission,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BRAND.website}/#business`,
      name: BRAND.name,
      description: BRAND.tagline + '. ' + BRAND.mission,
      url: BRAND.website,
      telephone: BRAND.phone,
      email: BRAND.email,
      image: `${BRAND.website}/og-image.jpg`,
      logo: {
        '@type': 'ImageObject',
        url: `${BRAND.website}/logo.png`,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Samsani Road Near Hanjarwaal (Syed Kabir Ali Shah Road)',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        postalCode: '53700',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.5204,
        longitude: 74.3587,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: BRAND.serviceAreas.map(area => ({
        '@type': 'City',
        name: area,
      })),
      priceRange: '$$',
      currenciesAccepted: 'PKR',
      paymentAccepted: 'Cash, Bank Transfer',
      sameAs: [BRAND.facebook, BRAND.instagram],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fabrication Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Food Street Carts', description: 'Mobile custom-built stainless steel food carts' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fries Counter', description: 'Stainless steel fries counters with integrated fryer space' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Food Stalls', description: 'BBQ, shawarma, juice, and chaat stalls' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Kitchen Equipment', description: 'Work tables, shelves, exhaust hoods, and commercial sinks' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Signage & Branding', description: 'Laser-cut steel and acrylic signage' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'General Fabrication', description: 'Gates, grills, railings and industrial parts' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BRAND.website}/#website`,
      url: BRAND.website,
      name: `${BRAND.name} Pakistan`,
      description: BRAND.tagline,
      publisher: { '@id': `${BRAND.website}/#business` },
      inLanguage: 'en-PK',
    },
    {
      '@type': 'WebPage',
      '@id': `${BRAND.website}/#webpage`,
      url: BRAND.website,
      name: `${BRAND.name} Pakistan — Custom Steel Fabrication`,
      isPartOf: { '@id': `${BRAND.website}/#website` },
      about: { '@id': `${BRAND.website}/#business` },
      description: BRAND.tagline + '. ' + BRAND.mission,
      inLanguage: 'en-PK',
    },
  ],
}

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${bebas.variable} ${rajdhani.variable} ${inter.variable} font-inter antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}