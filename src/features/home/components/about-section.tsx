import React from 'react';

interface AboutSectionProps {
  // Props if needed
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className='about-section py-12'>
      <div className='container mx-auto text-center'>
        <h3 className='text-2xl font-bold'>Sobre Nosotros</h3>
        <p className='mt-4'>
          Somos una ONG dedicada a la conservación de especies en peligro, como
          la Paraba Azul.
        </p>
      </div>
    </section>
  );
};
