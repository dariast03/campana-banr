'use client';

import React from 'react';
import Image from 'next/image';

export const ParrotImageStatic: React.FC = () => {
  return (
    <div className='relative h-full w-full'>
      {/* Contenedor de la imagen */}
      <div className='relative h-full w-full'>
        {/* Imagen de la paraba */}
        <div className='relative flex h-full w-full items-center justify-center'>
          <Image
            src='/assets/img/paraba.png'
            alt='Paraba Barba Azul'
            fill
            className='object-contain object-center'
            priority
            quality={100}
          />
        </div>

        {/* Gradiente negro en la parte inferior */}
        {/* <div className='pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent sm:h-40 lg:h-48' /> */}
      </div>
    </div>
  );
};
