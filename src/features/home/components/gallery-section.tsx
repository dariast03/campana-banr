import React from 'react';
import Image from 'next/image';

interface GallerySectionProps {
  // Props if needed
}

export const GallerySection: React.FC<GallerySectionProps> = () => {
  return (
    <section className='gallery-section py-12'>
      <div className='container mx-auto'>
        <h3 className='text-center text-2xl font-bold'>Galería</h3>
        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
          {/* Placeholder images */}
          <Image
            src='/placeholder1.jpg'
            alt='Paraba Azul'
            width={400}
            height={192}
            className='h-48 w-full rounded object-cover'
          />
          <Image
            src='/placeholder2.jpg'
            alt='Paraba Azul'
            width={400}
            height={192}
            className='h-48 w-full rounded object-cover'
          />
          <Image
            src='/placeholder3.jpg'
            alt='Paraba Azul'
            width={400}
            height={192}
            className='h-48 w-full rounded object-cover'
          />
        </div>
      </div>
    </section>
  );
};
