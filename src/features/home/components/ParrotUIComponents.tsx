'use client';

import React from 'react';

interface Model3DLoaderProps {
  progress?: number;
}

export const Model3DLoader: React.FC<Model3DLoaderProps> = ({
  progress = 0
}) => {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-sm'>
      <div className='space-y-4 text-center'>
        {/* Spinner */}
        <div className='relative mx-auto h-16 w-16'>
          <div className='absolute inset-0 rounded-full border-4 border-blue-500/20'></div>
          <div className='absolute inset-0 animate-spin rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent'></div>
        </div>

        {/* Texto */}
        <div className='space-y-2'>
          <p className='text-sm font-medium text-white'>Cargando modelo 3D</p>
          {progress > 0 && (
            <div className='mx-auto h-1.5 w-48 overflow-hidden rounded-full bg-slate-700'>
              <div
                className='h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300'
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ParrotFeatureCard: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className='group relative overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-6 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10'>
      {/* Efecto de brillo en hover */}
      <div className='absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]' />

      <div className='relative space-y-3'>
        {icon && (
          <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400'>
            {icon}
          </div>
        )}
        <h3 className='text-lg font-semibold text-white'>{title}</h3>
        <p className='text-sm text-slate-300'>{description}</p>
      </div>
    </div>
  );
};
