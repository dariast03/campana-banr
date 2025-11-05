'use client';

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface VideoStackProps {
  className?: string;
}

export const VideoStack: React.FC<VideoStackProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations('ResourcesPage');

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Here you would implement actual video play/pause logic
  };

  return (
    <div className={`relative ${className}`}>
      {/* Video Stack Container */}
      <div className='relative mx-auto w-full max-w-lg'>
        {/* Stack of video thumbnails */}
        <div className='relative h-80'>
          {/* Back cards - creating stack effect */}
          <div className='absolute inset-0 scale-90 rotate-6 transform rounded-2xl border-2 border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-blue-700/20' />
          <div className='absolute inset-0 scale-95 -rotate-3 transform rounded-2xl border-2 border-blue-400/40 bg-gradient-to-br from-blue-500/40 to-blue-700/40' />

          {/* Main video card */}
          <div className='relative h-full overflow-hidden rounded-2xl border-2 border-blue-400 bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl'>
            {/* Mock video thumbnail - you can replace this with actual video thumbnails */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20' />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K')] opacity-10" />

            {/* Parrot silhouettes for decoration */}
            <div className='absolute top-4 left-4 text-6xl text-blue-300/30'>
              🦜
            </div>
            <div className='absolute right-4 bottom-4 rotate-45 transform text-4xl text-blue-300/20'>
              🦜
            </div>

            {/* Play button overlay */}
            <div
              className='absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-black/20'
              onClick={handlePlayPause}
            >
              <div className='rounded-full bg-white/95 p-6 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white'>
                {isPlaying ? (
                  <Pause className='h-10 w-10 text-blue-600' />
                ) : (
                  <Play className='ml-1 h-10 w-10 text-blue-600' />
                )}
              </div>
            </div>

            {/* Video count indicator */}
            <div className='absolute right-6 bottom-6 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm'>
              1/5
            </div>

            {/* Title overlay */}
            <div className='absolute bottom-6 left-6 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm'>
              {t('videoSection.title')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
