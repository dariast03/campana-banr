import React from 'react';

interface SponsorsSectionProps {
  // Props if needed
}

export const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
  return (
    <section className='sponsors-section bg-gray-200 py-12'>
      <div className='container mx-auto'>
        <h3 className='text-center text-2xl font-bold'>Patrocinadores</h3>
        <div className='mt-8 flex justify-center space-x-8'>
          {/* Placeholder sponsors */}
          <div className='sponsor'>Sponsor 1</div>
          <div className='sponsor'>Sponsor 2</div>
          <div className='sponsor'>Sponsor 3</div>
        </div>
      </div>
    </section>
  );
};
