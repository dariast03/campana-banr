'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FormScanner, ConfirmationForm } from '@/features/registro';
import { FormData } from '@/features/registro/types';

export default function RegistroPage() {
  const t = useTranslations('RegistroPage');
  const [extractedData, setExtractedData] = useState<Partial<FormData> | null>(
    null
  );

  const handleDataExtracted = (data: Partial<FormData>) => {
    setExtractedData(data);
  };

  const handleFormSubmit = (data: FormData) => {
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV === 'development'
    ) {
      // eslint-disable-next-line no-console
      console.log('Form submitted:', data);
    }
  };

  const handleReset = () => {
    setExtractedData(null);
  };

  return (
    <div className='min-h-screen text-white'>
      {/* Hero Section */}
      <section className='relative px-4 py-20'>
        <div className='mx-auto max-w-4xl'>
          {/* Title */}
          <div className='mb-12 text-center'>
            <h1 className='mb-8 text-5xl font-bold tracking-wider md:text-7xl'>
              {t('title')}
            </h1>
          </div>

          {/* Main Content */}
          <div className='grid items-start gap-8 lg:grid-cols-2'>
            {/* Left Side - Scanner */}
            <div className='space-y-6'>
              <FormScanner onDataExtracted={handleDataExtracted} />
            </div>

            {/* Right Side - Form or Placeholder */}
            <div className='space-y-6'>
              {extractedData ? (
                <ConfirmationForm
                  initialData={extractedData}
                  onSubmit={handleFormSubmit}
                  onReset={handleReset}
                />
              ) : (
                <div className='rounded-2xl border-2 border-dashed border-slate-600 bg-slate-800/30 p-12 text-center'>
                  <div className='space-y-4 text-slate-400'>
                    <div className='text-6xl'>📋</div>
                    <h3 className='text-xl font-semibold'>
                      {t('scannerSection.description')}
                    </h3>
                    <p className='text-sm'>
                      Los datos extraídos aparecerán aquí para su confirmación
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
