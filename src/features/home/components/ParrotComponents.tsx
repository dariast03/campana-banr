'use client';

import React from 'react';
import { ClockAlert, Play } from 'lucide-react';

interface ParrotInfoCardProps {
  label: string;
  side: 'left' | 'right';
  style?: React.CSSProperties;
}

export const ParrotInfoCard: React.FC<ParrotInfoCardProps> = ({
  label,
  side,
  style
}) => {
  return (
    <div
      className={`pointer-events-none absolute max-w-[200px] text-xs text-white/90 transition-opacity duration-300 md:text-sm`}
      style={style}
    >
      <div
        className={`flex items-start gap-2 ${side === 'left' ? 'flex-row-reverse' : ''}`}
      >
        <div
          className={`mt-2 h-[2px] w-2 bg-blue-400 ${side === 'left' ? 'ml-2' : 'mr-2'}`}
        />
        <p className={`${side === 'left' ? 'text-right' : 'text-left'}`}>
          {label}
        </p>
      </div>
    </div>
  );
};

interface VideoPreviewProps {
  onClick?: () => void;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({ onClick }) => {
  return (
    <div
      className='group relative aspect-video w-full max-w-[520px] cursor-pointer overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/40 to-blue-950/40 transition-all hover:border-blue-400/50'
      onClick={onClick}
    >
      {/* Imagen de preview del loro */}
      <img
        src='/assets/img/video-paraba.jpg'
        alt='Paraba Barba Azul'
        className='absolute inset-0 h-full w-full bg-cover opacity-50'
      />

      {/* Botón de play */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/80 transition-all group-hover:scale-110 group-hover:bg-blue-500 md:h-20 md:w-20'>
          <Play className='ml-1 h-8 w-8 fill-white text-white md:h-10 md:w-10' />
        </div>
      </div>

      {/* Efecto de brillo */}
      <div className='absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5' />
    </div>
  );
};

interface StatsInfoProps {
  text: string;
}

export const StatsInfo: React.FC<StatsInfoProps> = ({ text }) => {
  return (
    <div className='flex items-center gap-3 rounded-lg border border-orange-500/30 bg-orange-900/30 px-4 py-3 backdrop-blur-sm'>
      {/*  <div className='flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-orange-500'>
        <div className='h-2 w-2 rounded-full bg-orange-500' />
      </div> */}
      <ClockAlert className='h-6 w-6 border-orange-500 text-orange-400' />
      <p className='text-sm text-orange-200/90 md:text-base'>{text}</p>
    </div>
  );
};
