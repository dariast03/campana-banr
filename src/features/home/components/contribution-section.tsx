import React from 'react';

interface ContributionSectionProps {
  // Props if needed
}

export const ContributionSection: React.FC<ContributionSectionProps> = () => {
  return (
    <section className='contribution-section py-12'>
      <div className='container mx-auto text-center'>
        <h3 className='text-2xl font-bold'>¿A Quién Contribuye Tu Donación?</h3>
        <p>
          Tu aporte ayuda a la conservación de la Paraba Azul, apoyando
          proyectos de investigación y protección.
        </p>
      </div>
    </section>
  );
};
