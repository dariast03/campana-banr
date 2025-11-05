'use client';

import React, { useState } from 'react';
import { Flag } from 'lucide-react';
// import { ParrotScene } from './ParrotScene'; // Comentado - Modelo 3D para uso futuro
import { ParrotImageStatic } from './ParrotImageStatic';
import { VideoPreview, StatsInfo } from './ParrotComponents';
import { Button } from '@/components/ui/button';
import { ParrotScene } from './ParrotScene';
import DonaAhora from './dona-ahora';

interface HeroHomeProps {
  // Props if needed
}

export const HeroHome: React.FC<HeroHomeProps> = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      {/* Contenido principal */}
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid min-h-screen grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12'>
          {/* Columna izquierda - Contenido */}
          <div className='order-2 space-y-6 lg:order-1 lg:space-y-8'>
            {/* Título */}
            <div className='space-y-4'>
              <h1 className='text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl'>
                Paraba
                <br />{' '}
                <span className='text-primary text-5xl lg:text-7xl'>
                  Barba Azul
                </span>
              </h1>

              <p className='max-w-xl text-base text-slate-300 sm:text-lg lg:text-xl'>
                Un ave que solo existe en la sabana del Beni - Bolivia, lo que
                la convierte en un verdadero tesoro natural boliviano.
              </p>
            </div>

            {/* Video preview */}
            <VideoPreview onClick={() => setShowVideo(true)} />

            {/* Stats */}
            <StatsInfo text='Cada día cuenta • Población: menos de 300 aves' />

            {/* CTA Button */}
            <DonaAhora />
          </div>

          {/* Columna derecha - Paraba */}
          <div className='order-1 lg:order-2'>
            <div className='relative mx-auto h-[400px] w-full sm:h-[500px] lg:h-[600px]'>
              {/* Imagen estática de la paraba */}
              <ParrotImageStatic />

              {/* CÓDIGO 3D COMENTADO - Para uso futuro */}

              {/* <ParrotScene /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de video (simple) */}
      {showVideo && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
          onClick={() => setShowVideo(false)}
        >
          <div className='relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-slate-900'>
            <button
              onClick={() => setShowVideo(false)}
              className='absolute top-4 right-4 z-10 text-2xl text-white hover:text-blue-400'
            >
              ✕
            </button>

            <iframe
              src='https://www.youtube.com/embed/1uZNcAsJsi0?si=6AjgS-ajsbxnwFmn'
              title='YouTube video player'
              frameBorder={0}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
              className='h-full w-full'
            />
          </div>
        </div>
      )}
    </section>
  );
};
