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

      {/* Anotaciones con líneas anguladas - Desktop y Mobile */}
      <div className='absolute inset-0'>
        {/* OJO - Derecha - AJUSTA: top-[X%] para mover arriba/abajo */}
        <div className='absolute top-[15%] right-2 sm:top-[16.5%] sm:right-4 lg:-right-5'>
          <div className='flex items-start gap-2 sm:gap-3'>
            <svg
              width='80'
              height='50'
              className='overflow-visible sm:h-[60px] sm:w-[100px] lg:h-[70px] lg:w-[120px]'
            >
              {/* Línea con ángulo (como ⌥) */}
              <polyline
                points='0,25 40,15 80,25'
                stroke='#FFFFFF'
                strokeWidth='2'
                fill='none'
                opacity='0.9'
              />
              {/* Punto inicial */}
              {/*  <circle cx='0' cy='25' r='4' fill='#FFFFFF'>
                <animate
                  attributeName='r'
                  values='4;5;4'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle> */}
              {/* Punto final */}
              <circle cx='80' cy='25' r='3' fill='#FBBF24' />
            </svg>
            <p className='max-w-[140px] text-xs leading-tight text-white/90 sm:max-w-[180px] sm:text-sm lg:max-w-[200px]'>
              Iris amarillento o gris claro en adultos
            </p>
          </div>
        </div>

        {/* PICO - Izquierda - AJUSTA: top-[X%] para mover arriba/abajo */}
        <div className='absolute top-[26%] left-2 sm:top-[16%] sm:left-4 lg:-left-28'>
          <div className='flex flex-row-reverse items-start gap-2 sm:gap-3'>
            <svg
              width='80'
              height='50'
              className='overflow-visible sm:h-[60px] sm:w-[100px] lg:h-[70px] lg:w-[120px]'
            >
              {/* Línea con ángulo invertida */}
              <polyline
                points='70,60 40,25 -10,25'
                stroke='#FFFFFF'
                strokeWidth='2'
                fill='none'
                opacity='0.9'
              />
              {/* Punto inicial */}
              {/*   <circle cx='80' cy='25' r='4' fill='#FFFFFF'>
                <animate
                  attributeName='r'
                  values='4;5;4'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle> */}
              {/* Punto final */}
              <circle cx='0' cy='25' r='3' fill='#FBBF24' />
            </svg>
            <p className='max-w-[160px] text-right text-xs leading-tight text-white/90 sm:max-w-[200px] sm:text-sm lg:max-w-[220px]'>
              Pico grande y robusto, diseñado para romper semillas y nueces
              duras
            </p>
          </div>
        </div>

        {/* CUELLO/PLUMAJE - Izquierda - AJUSTA: top-[X%] para mover arriba/abajo */}
        <div className='absolute top-[40%] left-2 sm:top-[26%] sm:left-4 lg:-left-6'>
          <div className='flex flex-row-reverse items-start gap-2 sm:gap-3'>
            <svg
              width='80'
              height='50'
              className='overflow-visible sm:h-[60px] sm:w-[100px] lg:h-[70px] lg:w-[120px]'
            >
              {/* Línea con ángulo invertida */}
              <polyline
                points='80,25 40,35 0,25'
                stroke='#FFFFFF'
                strokeWidth='2'
                fill='none'
                opacity='0.9'
              />
              {/* Punto inicial */}
              {/*  <circle cx='80' cy='25' r='4' fill='#FFFFFF'>
                <animate
                  attributeName='r'
                  values='4;5;4'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle> */}
              {/* Punto final */}
              <circle cx='0' cy='25' r='3' fill='#FBBF24' />
            </svg>
            <p className='max-w-[160px] text-right text-xs leading-tight text-white/90 sm:max-w-[200px] sm:text-sm lg:max-w-[220px]'>
              Plumaje azul turquesa brillante en el dorso, alas y cola
            </p>
          </div>
        </div>

        {/* ALA - Izquierda - AJUSTA: top-[X%] para mover arriba/abajo */}
        <div className='absolute top-[54%] left-2 sm:top-[65%] sm:left-4 lg:-left-10'>
          <div className='flex flex-row-reverse items-start gap-2 sm:gap-3'>
            <svg
              width='80'
              height='50'
              className='overflow-visible sm:h-[60px] sm:w-[100px] lg:h-[70px] lg:w-[120px]'
            >
              {/* Línea con ángulo invertida */}
              <polyline
                points='80,25 40,15 0,25'
                stroke='#FFFFFF'
                strokeWidth='2'
                fill='none'
                opacity='0.9'
              />
              {/* Punto inicial */}
              {/* <circle cx='80' cy='25' r='4' fill='#FFFFFF'>
                <animate
                  attributeName='r'
                  values='4;5;4'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle> */}
              {/* Punto final */}
              <circle cx='0' cy='25' r='3' fill='#FBBF24' />
            </svg>
            <p className='max-w-[150px] text-right text-xs leading-tight text-white/90 sm:max-w-[180px] sm:text-sm lg:max-w-[200px]'>
              Debajo del pico tiene una franja de plumas azuladas
            </p>
          </div>
        </div>

        {/* PECHO - Derecha - AJUSTA: top-[X%] para mover arriba/abajo */}
        <div className='absolute top-[66%] right-2 sm:top-[50%] sm:right-4 lg:-right-20'>
          <div className='flex items-start gap-2 sm:gap-3'>
            <svg
              width='80'
              height='50'
              className='overflow-visible sm:h-[60px] sm:w-[100px] lg:h-[70px] lg:w-[120px]'
            >
              {/* Línea con ángulo */}
              <polyline
                points='0,25 40,35 80,25'
                stroke='#FFFFFF'
                strokeWidth='2'
                fill='none'
                opacity='0.9'
              />
              {/* Punto inicial */}
              {/* <circle cx='0' cy='25' r='4' fill='#FFFFFF'>
                <animate
                  attributeName='r'
                  values='4;5;4'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </circle> */}
              {/* Punto final */}
              <circle cx='80' cy='25' r='3' fill='#FBBF24' />
            </svg>
            <p className='max-w-[140px] text-xs leading-tight text-white/90 sm:max-w-[180px] sm:text-sm lg:max-w-[200px]'>
              Amarillo dorado en el pecho y vientre
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
