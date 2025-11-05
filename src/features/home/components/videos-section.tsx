import React from 'react';

interface VideosSectionProps {
  // Props if needed
}

export const VideosSection: React.FC<VideosSectionProps> = () => {
  return (
    <section className='videos-section bg-gray-200 py-12'>
      <div className='container mx-auto'>
        <h3 className='text-center text-2xl font-bold'>Videos</h3>
        <div className='mt-8'>
          {/* Placeholder video */}
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/placeholder'
            title='Video sobre Paraba Azul'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='mx-auto'
          ></iframe>
        </div>
      </div>
    </section>
  );
};
