'use client';

import {
  ImageGallery,
  VideoStack,
  ActionButtons,
  HeroSection
} from '@/features/resources';

export default function RecursosPage() {
  return (
    <div className='min-h-screen text-white'>
      {/* Hero Section */}
      <section className='relative px-4 pt-20'>
        <div className='mx-auto max-w-6xl'>
          <HeroSection className='mb-12' />
          <ActionButtons className='mb-16' />
        </div>
      </section>

      {/* Content Sections */}
      <section className='px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid items-start gap-16 lg:grid-cols-2'>
            {/* Left Column - Gallery */}
            <div className='space-y-8'>
              <ImageGallery />
            </div>

            {/* Right Column - Video Stack */}
            <div className='space-y-8'>
              <VideoStack />
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      {/*      <section className='px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
          <ReportsList />
        </div>
      </section> */}
    </div>
  );
}
