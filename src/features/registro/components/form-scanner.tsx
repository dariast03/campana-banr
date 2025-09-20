'use client';

import { useState, useCallback, useRef } from 'react';
import { Upload, Camera, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useTranslations } from 'next-intl';
import { useOCR } from '../hooks/use-ocr';
import { FormData } from '../types';

interface FormScannerProps {
  onDataExtracted: (data: Partial<FormData>) => void;
  className?: string;
}

export const FormScanner: React.FC<FormScannerProps> = ({
  onDataExtracted,
  className = ''
}) => {
  const t = useTranslations('RegistroPage');
  const { processingState, processImage, resetState } = useOCR();
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) {
        return;
      }

      try {
        const result = await processImage(file);
        if (result.extractedData) {
          onDataExtracted(result.extractedData);
        }
      } catch (error) {
        // Error already handled by useOCR hook
      }
    },
    [processImage, onDataExtracted]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const getStageText = () => {
    switch (processingState.stage) {
      case 'uploading':
        return t('scannerSection.processing');
      case 'scanning':
        return t('scannerSection.scanning');
      case 'extracting':
        return t('scannerSection.extractingData');
      default:
        return t('scannerSection.processing');
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className='mb-6 text-center'>
        <h3 className='mb-2 text-2xl font-bold text-white'>
          {t('scannerSection.title')}
        </h3>
      </div>

      {/* Scanner Area */}
      <div className='relative'>
        <div
          className={`rounded-2xl border-2 border-dashed p-12 text-center transition-colors ${
            dragOver
              ? 'border-blue-400 bg-blue-400/10'
              : 'border-blue-400 bg-slate-800/30 hover:bg-slate-800/50'
          } ${processingState.isProcessing ? 'pointer-events-none' : 'cursor-pointer'} `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={processingState.isProcessing ? undefined : openFileDialog}
        >
          {processingState.isProcessing ? (
            <div className='space-y-4'>
              <Loader2 className='mx-auto h-16 w-16 animate-spin text-blue-400' />
              <div className='space-y-2'>
                <p className='text-blue-300'>{getStageText()}</p>
                <Progress
                  value={processingState.progress}
                  className='mx-auto w-full max-w-md'
                />
                <p className='text-sm text-blue-400'>
                  {processingState.progress}%
                </p>
              </div>
            </div>
          ) : (
            <div className='space-y-4'>
              <div className='flex justify-center space-x-4'>
                <div className='rounded-full border-2 border-blue-400 p-4'>
                  <Upload className='h-8 w-8 text-blue-400' />
                </div>
                <div className='rounded-full border-2 border-blue-400 p-4'>
                  <Camera className='h-8 w-8 text-blue-400' />
                </div>
              </div>

              <div className='space-y-2'>
                <p className='text-lg text-blue-300'>
                  {t('scannerSection.uploadText')}
                </p>
                <p className='text-sm text-blue-400'>
                  {t('scannerSection.dragDrop')}{' '}
                  <span className='text-orange-400 underline'>
                    {t('scannerSection.clickUpload')}
                  </span>
                </p>
              </div>

              <div className='flex justify-center space-x-4 pt-4'>
                <Button
                  variant='outline'
                  className='border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                >
                  <Camera className='mr-2 h-4 w-4' />
                  {t('scannerSection.takePhoto')}
                </Button>
                <Button
                  className='bg-orange-600 text-white hover:bg-orange-700'
                  onClick={openFileDialog}
                >
                  <Upload className='mr-2 h-4 w-4' />
                  {t('scannerSection.uploadImage')}
                </Button>
              </div>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleFileInputChange}
        />
      </div>

      {/* Error State */}
      {processingState.stage === 'error' && (
        <div className='mt-4 rounded-lg border border-red-500 bg-red-900/50 p-4'>
          <p className='text-center text-red-300'>
            {processingState.error || t('error.message')}
          </p>
          <div className='mt-2 text-center'>
            <Button
              variant='outline'
              size='sm'
              onClick={resetState}
              className='border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
            >
              {t('error.retry')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
