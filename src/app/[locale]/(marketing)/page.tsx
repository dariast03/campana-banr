import {
  HeroHome,
  InfoSection,
  ContributionSection,
  DonationSection,
  GallerySection,
  VideosSection,
  ReportsSection,
  RegistrationFormSection,
  FooterHome,
  infoCards
} from '@/features/home';
import AboutSection from '@/features/home/components/about-section';
import SponsorsSection from '@/features/home/components/sponsors-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campaña para Salvar la Paraba Azul | Donaciones ONG',
  description:
    'Únete a nuestra campaña para recaudar donaciones y salvar a la Paraba Azul, una especie en peligro de extinción. Tu aporte ayuda a la conservación y protección.',
  keywords: [
    'donaciones',
    'conservación',
    'Paraba Azul',
    'ONG',
    'medio ambiente',
    'especies en peligro'
  ],
  authors: [{ name: 'ONG Campaña Banr' }],
  creator: 'ONG Campaña Banr',
  publisher: 'ONG Campaña Banr',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Campaña para Salvar la Paraba Azul',
    description:
      'Ayuda a salvar la Paraba Azul con tu donación. Únete a nuestra campaña de conservación.',
    url: 'https://campana-banr.com',
    siteName: 'Campaña Banr',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Campaña para Salvar la Paraba Azul'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campaña para Salvar la Paraba Azul',
    description: 'Ayuda a salvar la Paraba Azul con tu donación.',
    images: ['/og-image.jpg'],
    creator: '@campana_banr'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google'
  }
};

export default async function Page() {
  return (
    <>
      <HeroHome />
      <InfoSection cards={infoCards} />
      <ContributionSection />
      <DonationSection />
      <GallerySection />
      <VideosSection />
      <ReportsSection />
      <RegistrationFormSection />
      <AboutSection />
      <SponsorsSection />
    </>
  );
}
