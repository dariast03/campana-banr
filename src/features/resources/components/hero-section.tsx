'use client';

import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const t = useTranslations('ResourcesPage');

  return (
    <div className={`text-center ${className}`}>
      <h1 className='mb-8 text-5xl font-bold tracking-wider md:text-7xl'>
        {t('title')}
      </h1>

      {/* Subtitle with highlighted words */}
      <div className='space-y-4 text-2xl md:text-4xl'>
        <div className='flex flex-wrap items-center justify-center gap-2 md:gap-4'>
          <span className='text-primary'>{t('reserveVisit.description')}</span>
          <span className='text-4xl font-bold text-white xl:text-5xl'>
            {t('reserveVisit.title')}
            <span className='text-white'>?</span>
          </span>

          <span className='text-4xl font-bold text-white xl:text-5xl'>
            {t('reserveVisit.action')}
          </span>
          <span className='text-primary'>{t('reserveVisitComplete')}</span>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-2 md:gap-4'>
          <span className='text-primary'>
            {t('habitatExplore.description')}
          </span>
          <span className='text-4xl font-bold text-white xl:text-5xl'>
            {t('habitatExplore.title')}
          </span>
          <span className='text-primary'>{t('speciesTitle')}</span>
          <span className='text-4xl font-bold text-white xl:text-5xl'>
            {t('speciesExtraordinary')}
          </span>
        </div>
      </div>
    </div>
  );
};
