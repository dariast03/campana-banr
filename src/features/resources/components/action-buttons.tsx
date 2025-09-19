'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { ExternalLink, QrCode } from 'lucide-react';

interface ActionButtonsProps {
  className?: string;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  className = ''
}) => {
  const t = useTranslations('ResourcesPage');

  return (
    <div className={`grid gap-8 md:grid-cols-2 ${className}`}>
      {/* Gallery Button */}
      <div className='rounded-2xl bg-slate-800/50 p-6 transition-colors hover:border-orange-300'>
        <div className='mb-4 text-center'>
          <p className='mb-4 text-orange-300'>{t('buttonGallery.title')}</p>
          <Button className='bg-orange-600 px-8 py-3 text-lg text-white hover:bg-orange-700'>
            <ExternalLink className='mr-2 h-5 w-5' />
            {t('buttonGallery.cta')}
          </Button>
        </div>
      </div>

      {/* Scanner Button */}
      <div className='rounded-2xl bg-slate-800/50 p-6 transition-colors hover:border-orange-300'>
        <div className='mb-4 text-center'>
          <p className='mb-4 text-orange-300'>{t('buttonScanner.title')}</p>
          <Button className='bg-orange-600 px-8 py-3 text-lg text-white hover:bg-orange-700'>
            <QrCode className='mr-2 h-5 w-5' />
            {t('buttonScanner.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
};
