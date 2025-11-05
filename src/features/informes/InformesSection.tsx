'use client';
import { useState } from 'react';

const InformesSection = () => {
  const [isActive, setIsActive] = useState(false);

  const informes = [
    {
      id: 1,
      title: 'Blue-throated macaw',
      author: 'Tjalle Boorsma',
      date: '02 sep 2025',
      pages: '29 pág',
      description:
        'Conviértete en Amigo loy! Tu aporte se transforma en habitat seguro, nidos activos y esperanza de vida para esta especie extraordinaria',
      image: '/api/placeholder/150/100'
    },
    {
      id: 2,
      title: 'Blue-throated macaw',
      author: 'Tjalle Boorsma',
      date: '02 sep 2025',
      pages: '29 pág',
      description:
        'Conviértete en Amigo loy! Tu aporte se transforma en habitat seguro, nidos activos y esperanza de vida para esta especie extraordinaria',
      image: '/api/placeholder/150/100'
    }
  ];

  return (
    <div className='bg-transparent p-6 text-white'>
      {/* Header */}
      <div className='mb-6'>
        <h2 className='text-xl font-normal'>
          Explora los informes de la{' '}
          <span className='font-medium text-blue-400'>Paraba Barba Azul</span>
        </h2>
        <p className='mt-1 text-sm text-gray-300'>
          que tenemos preparados para ti...
        </p>
      </div>

      {/* Cards Container */}
      <div className='space-y-4'>
        {informes.map((informe) => (
          <div
            key={informe.id}
            className='flex gap-4 rounded-lg bg-gradient-to-r from-yellow-700 to-yellow-800 p-4'
          >
            {/* Image */}
            <div className='flex-shrink-0'>
              <div className='h-24 w-32 overflow-hidden rounded-lg bg-blue-400'>
                <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-300 to-blue-600'>
                  <div className='text-center text-xs text-white'>
                    Blue-throated
                    <br />
                    macaw
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className='flex-1'>
              {/* Title and Icons */}
              <div className='mb-2 flex items-start justify-between'>
                <h3 className='text-lg font-medium text-white'>
                  {informe.title}
                </h3>
              </div>

              {/* Author and Date */}
              <div className='mb-3 flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-4 w-4 items-center justify-center rounded-full bg-orange-500'>
                    <span className='text-xs text-white'>👤</span>
                  </div>
                  <span className='text-sm text-white'>{informe.author}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex h-4 w-4 items-center justify-center rounded-full bg-gray-600'>
                    <span className='text-xs text-white'>📅</span>
                  </div>
                  <span className='text-sm text-white'>{informe.date}</span>
                </div>
                <div className='flex gap-2'>
                  <span className='rounded bg-orange-600 px-2 py-1 text-xs font-medium text-white'>
                    PDF
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className='mb-3 text-sm leading-relaxed text-white'>
                {informe.description}
              </p>

              {/* Footer */}
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-white'>
                  {informe.pages}
                </span>
                <div className='flex gap-2'>
                  <button className='rounded-full bg-orange-500 px-4 py-1 text-sm font-medium text-white transition-colors hover:bg-orange-600'>
                    Vista previa
                  </button>
                  <button className='rounded-full border border-white bg-transparent px-4 py-1 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900'>
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformesSection;
