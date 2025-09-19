'use client';

import { Download, Eye, FileText, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ReportItem } from '../types';
import { mockReports } from '../data';

interface ReportsListProps {
  reports?: ReportItem[];
  className?: string;
}

export const ReportsList: React.FC<ReportsListProps> = ({
  reports = mockReports,
  className = ''
}) => {
  const t = useTranslations('ResourcesPage');

  return (
    <div className={`w-full ${className}`}>
      {/* Section Header */}
      <div className='mb-8'>
        <h3 className='mb-2 text-2xl font-bold text-white'>
          {t('reportsSection.title')}
        </h3>
        <p className='text-lg text-blue-300'>{t('reportsSection.subtitle')}</p>
      </div>

      {/* Reports List */}
      <div className='space-y-4'>
        {reports.map((report) => (
          <div
            key={report.id}
            className='rounded-lg border-2 border-orange-400 bg-gradient-to-r from-orange-600 to-orange-700 p-4 transition-colors hover:border-orange-300'
          >
            <div className='flex items-center gap-4'>
              {/* Thumbnail */}
              <div className='flex-shrink-0'>
                <Image
                  src={report.thumbnail}
                  alt={report.title}
                  width={120}
                  height={160}
                  className='rounded-lg border-2 border-orange-300 object-cover'
                />
              </div>

              {/* Content */}
              <div className='min-w-0 flex-1'>
                <div className='mb-2 flex items-start justify-between'>
                  <h4 className='truncate text-xl font-bold text-white'>
                    {t('speciesName')}
                  </h4>
                  <Badge
                    variant='secondary'
                    className='ml-2 bg-orange-200 text-orange-800'
                  >
                    {report.format}
                  </Badge>
                </div>

                {/* Metadata */}
                <div className='mb-3 flex items-center gap-4 text-orange-100'>
                  <div className='flex items-center gap-1'>
                    <User className='h-4 w-4' />
                    <span className='text-sm'>{t('reportItem.author')}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Calendar className='h-4 w-4' />
                    <span className='text-sm'>{t('reportItem.date')}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <FileText className='h-4 w-4' />
                    <span className='text-sm'>{t('reportItem.pages')}</span>
                  </div>
                </div>

                {/* Description */}
                <p className='mb-4 line-clamp-2 text-sm text-orange-100'>
                  {t('reportItem.description')}
                </p>

                {/* Action Buttons */}
                <div className='flex gap-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-orange-300 bg-transparent text-orange-100 hover:bg-orange-500 hover:text-white'
                  >
                    <Eye className='mr-1 h-4 w-4' />
                    {t('reportItem.viewPreview')}
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-orange-300 bg-transparent text-orange-100 hover:bg-orange-500 hover:text-white'
                  >
                    <Download className='mr-1 h-4 w-4' />
                    {t('reportItem.download')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
