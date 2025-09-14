import React from 'react';

interface DonationSectionProps {
  // Props if needed
}

export const DonationSection: React.FC<DonationSectionProps> = () => {
  return (
    <section className='donation-section bg-green-100 py-12'>
      <div className='container mx-auto text-center'>
        <h3 className='text-2xl font-bold'>Haz Tu Donación</h3>
        <form className='mt-4'>
          <input
            type='number'
            placeholder='Monto'
            className='rounded border p-2'
          />
          <button
            type='submit'
            className='ml-4 rounded bg-green-500 px-6 py-2 text-white'
          >
            Donar
          </button>
        </form>
      </div>
    </section>
  );
};
