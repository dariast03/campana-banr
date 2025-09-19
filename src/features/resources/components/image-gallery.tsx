'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { GalleryItem } from '../types';
import { mockGalleryItems } from '../data';

interface ImageGalleryProps {
  items?: GalleryItem[];
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  items = mockGalleryItems,
  className = ''
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const t = useTranslations('ResourcesPage');

  return (
    <div className={`w-full ${className}`}>
      <h3 className='mb-6 text-2xl font-bold text-white'>
        {t('gallerySection.title')}
      </h3>

      {/* Gallery Grid with staggered effect */}
      <div className='grid grid-cols-2 gap-4'>
        {/* Left Column */}
        <div className='space-y-4'>
          {items
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <div
                key={item.id}
                className='relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg transition-colors'
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className='object-cover transition-transform duration-300 hover:scale-105'
                />
                {item.type === 'video' && (
                  <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
                    <Play className='h-12 w-12 text-white/80' />
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Right Column - offset downward */}
        <div className='mt-8 space-y-4'>
          {items
            .filter((_, index) => index % 2 === 1)
            .map((item) => (
              <div
                key={item.id}
                className='relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg transition-colors'
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className='object-cover transition-transform duration-300 hover:scale-105'
                />
                {item.type === 'video' && (
                  <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
                    <Play className='h-12 w-12 text-white/80' />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative max-h-full max-w-4xl'>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className='rounded-lg object-contain'
            />
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-4 right-4 text-2xl text-white hover:text-orange-400'
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
