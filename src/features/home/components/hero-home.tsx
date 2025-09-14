import React from 'react';

interface HeroHomeProps {
  // Props if needed
}

export const HeroHome: React.FC<HeroHomeProps> = () => {
  return (
    <section className='hero flex h-96 items-center justify-center bg-cover bg-center text-white'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>Ayuda a Salvar la Paraba Azul</h2>
        <p>Tu donación puede marcar la diferencia.</p>
        <button className='mt-4 rounded bg-green-500 px-6 py-2'>
          Donar Ahora
        </button>
      </div>
    </section>
  );
};
