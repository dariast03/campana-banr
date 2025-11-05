import React from 'react';
import DonaAhora from './dona-ahora';

interface DonationSectionProps {
  // Props if needed
}

export const DonationSection: React.FC<DonationSectionProps> = () => {
  return (
    <div className='relative mx-auto max-w-7xl space-y-4 px-4 py-16 sm:px-6 lg:px-8'>
      {/* Primera línea */}
      <h1 className='text-3xl font-bold lg:text-5xl'>
        Apoya a la <span className='text-primary lg:text-6xl'>CAMPAÑA</span>
      </h1>
      {/* Segunda línea */}
      <h2 className='text-5xl font-extrabold lg:ml-14 lg:text-6xl'>
        <span className='text-primary'>Hazte</span>
        <span className='lg:text-5xl'> Amigo de tu </span>
        <span className='text-primary'>Paraba Favorita</span>
      </h2>
      {/* Texto explicativo */}
      <p className='text-center text-gray-300'>
        Hazte Amigo y ayuda a salvar a la Paraba Barba Azul, especie única de
        Bolivia en peligro crítico.
        <br />
        Con tu apoyo protegemos reservas naturales y mantenemos el programa de
        nidos adoptivos, donde cada temporada decenas de pichones logran
        sobrevivir gracias a tu amistad.
      </p>
      {/* Parte inferior destacada */}
      <div className='space-y-4'>
        <p className='text-3xl font-semibold lg:text-5xl'>
          <span className='text-primary'>Conviértete en</span>{' '}
          <span className='font-extrabold lg:text-6xl'>Friend</span>{' '}
          <span className='text-primary'>hoy!</span>
        </p>
        <p className='text-4xl font-bold'>
          <span className='font-extrabold lg:text-6xl'> Tu aporte</span>{' '}
          <span className='text-primary'>se transforma en</span>
        </p>
        <p className='text-4xl font-extrabold lg:text-5xl'>
          hábitat seguro,{' '}
          <span className='text-primary lg:text-4xl'>nidos activos</span> y{' '}
          esperanza de vida{' '}
          <span className='text-primary lg:text-4xl'>para esta</span>{' '}
          <span className='font-extrabold'>especie extraordinaria.</span>
        </p>
      </div>

      <DonaAhora />
    </div>
  );
};
