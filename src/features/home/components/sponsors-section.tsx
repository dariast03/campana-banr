'use client';

import WavyText from '@/components/WavyText';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const sponsors = [
  {
    id: 1,
    name: 'Rainforest Trust',
    logo: '/assets/logos/rainforesttr.svg',
    tagline: ''
  },
  {
    id: 2,
    name: 'ICFC',
    logo: '/assets/logos/icfconfluence.svg',
    tagline: ''
  },
  {
    id: 3,
    name: 'Bird Life International',
    logo: '/assets/logos/abc.svg',
    tagline: ''
  },
  {
    id: 4,
    name: 'ICFC Canada',
    logo: '/assets/logos/icfc.svg',
    tagline: ''
  },
  {
    id: 5,
    name: 'Wildlife Conservation Society',
    logo: '/assets/logos/zooatlanta.svg',
    tagline: ''
  },
  {
    id: 6,
    name: 'World Wildlife Fund',
    logo: '/assets/logos/birdendow.svg',
    tagline: ''
  }
];

export default function SponsorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sponsors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sponsors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className='bg-black/20 px-4 py-16 backdrop-blur-sm'>
      <div className='mx-auto max-w-7xl'>
        {/* Title Section */}
        <div className='mb-12 text-center'>
          <h2 className='mb-2 text-4xl font-extrabold text-white md:text-5xl'>
            Gracias a{' '}
            <WavyText
              text='Nuestros Socios'
              className='glow inline-block text-[#238AD0]'
            />
            <br />
            <WavyText
              text='Internacionales'
              className='inline-block text-[#238AD0]'
            />
          </h2>
          <p className='text-xl font-extralight text-white/70 italic'>
            por su apoyo...
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative'>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className='absolute left-0 z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70'
            aria-label='Previous sponsors'
          >
            <ChevronLeft className='h-6 w-6' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-0 z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70'
            aria-label='Next sponsors'
          >
            <ChevronRight className='h-6 w-6' />
          </button>
          {/* Main Carousel - Automatic */}
          <div className='overflow-hidden'>
            <motion.div
              className='flex gap-2'
              animate={{
                x: `-${(currentIndex * 100) / 4}%`
              }}
              transition={{
                type: 'tween',
                duration: 0.1,
                ease: 'easeInOut'
              }}
              style={{
                width: `${(duplicatedSponsors.length * 100) / 4}%`
              }}
            >
              {duplicatedSponsors.map((sponsor, index) => (
                <motion.div
                  key={`${sponsor.id}-${Math.floor(index / sponsors.length)}`}
                  className='flex flex-shrink-0 items-center justify-center'
                  style={{ width: `${100 / duplicatedSponsors.length}%` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className='flex h-32 flex-col items-center justify-center'>
                    <img
                      src={sponsor.logo || '/placeholder.svg'}
                      alt={sponsor.name}
                      className='max-h-40 max-w-full object-contain'
                    />
                    {sponsor.tagline && (
                      <p className='mt-2 text-center text-xs font-medium text-white/70'>
                        {sponsor.tagline}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Auto-scroll ticker animation */}
          <div className='mt-8 overflow-hidden'>
            <motion.div
              className='flex gap-8 whitespace-nowrap'
              animate={{
                x: [0, -100 * sponsors.length]
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear'
                }
              }}
            >
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={`ticker-${sponsor.id}-${index}`}
                  className='flex-shrink-0 rounded-lg border border-white/20 bg-transparent px-6 py-3'
                >
                  <span className='text-sm font-semibold text-white'>
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
