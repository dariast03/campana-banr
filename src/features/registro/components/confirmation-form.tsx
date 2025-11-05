'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useTranslations } from 'next-intl';
import { FormData } from '../types';
import { CheckCircle } from 'lucide-react';

interface ConfirmationFormProps {
  initialData: Partial<FormData>;
  onSubmit: (data: FormData) => void;
  onReset: () => void;
  className?: string;
}

export const ConfirmationForm: React.FC<ConfirmationFormProps> = ({
  initialData,
  onSubmit,
  onReset,
  className = ''
}) => {
  const t = useTranslations('RegistroPage');
  const [formData, setFormData] = useState<FormData>({
    name: initialData.name || '',
    email: initialData.email || '',
    nationality: initialData.nationality || '',
    age: initialData.age || '',
    date: initialData.date || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData({
      name: initialData.name || '',
      email: initialData.email || '',
      nationality: initialData.nationality || '',
      age: initialData.age || '',
      date: initialData.date || ''
    });
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onReset();
  };

  const handleChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${className}`}>
        <div className='rounded-2xl border border-green-500 bg-green-900/50 p-8'>
          <CheckCircle className='mx-auto mb-4 h-16 w-16 text-green-400' />
          <h3 className='mb-2 text-2xl font-bold text-green-300'>
            {t('success.title')}
          </h3>
          <p className='mb-6 text-green-200'>{t('success.message')}</p>
          <div className='space-y-3'>
            <Button
              onClick={handleReset}
              className='w-full bg-orange-600 text-white hover:bg-orange-700'
            >
              {t('success.processAnother')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className='rounded-2xl border-2 border-orange-400 bg-slate-800/50 p-6'>
        <h3 className='mb-6 text-center text-xl font-bold text-white'>
          {t('scannerSection.description')}
        </h3>

        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Name Field */}
          <div>
            <Label
              htmlFor='name'
              className='text-sm font-medium text-orange-300'
            >
              {t('form.name')}
            </Label>
            <Input
              id='name'
              value={formData.name}
              onChange={(e) => handleChange('name')(e.target.value)}
              className='mt-1 border-slate-600 bg-slate-700 text-white placeholder-slate-400'
              placeholder='Joey'
            />
            {initialData.name && (
              <div className='mt-1 flex items-center'>
                <CheckCircle className='mr-1 h-4 w-4 text-green-400' />
                <span className='text-xs text-green-300'>
                  Detectado automáticamente
                </span>
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Label
              htmlFor='email'
              className='text-sm font-medium text-orange-300'
            >
              {t('form.email')}
            </Label>
            <Input
              id='email'
              type='email'
              value={formData.email}
              onChange={(e) => handleChange('email')(e.target.value)}
              className='mt-1 border-slate-600 bg-slate-700 text-white placeholder-slate-400'
              placeholder='nissoso@gmail.com'
            />
            {initialData.email && (
              <div className='mt-1 flex items-center'>
                <CheckCircle className='mr-1 h-4 w-4 text-green-400' />
                <span className='text-xs text-green-300'>
                  Detectado automáticamente
                </span>
              </div>
            )}
          </div>

          {/* Nationality Field */}
          <div>
            <Label
              htmlFor='nationality'
              className='text-sm font-medium text-orange-300'
            >
              {t('form.nationality')}
            </Label>
            <Select
              value={formData.nationality}
              onValueChange={handleChange('nationality')}
            >
              <SelectTrigger className='mt-1 w-full border-slate-600 bg-slate-700 text-white'>
                <SelectValue placeholder='France' />
              </SelectTrigger>
              <SelectContent className='border-slate-600 bg-slate-700'>
                <SelectItem value='France'>France</SelectItem>
                <SelectItem value='Spain'>Spain</SelectItem>
                <SelectItem value='Bolivia'>Bolivia</SelectItem>
                <SelectItem value='Argentina'>Argentina</SelectItem>
                <SelectItem value='Brazil'>Brazil</SelectItem>
                <SelectItem value='Chile'>Chile</SelectItem>
                <SelectItem value='Peru'>Peru</SelectItem>
                <SelectItem value='Colombia'>Colombia</SelectItem>
                <SelectItem value='Ecuador'>Ecuador</SelectItem>
                <SelectItem value='Uruguay'>Uruguay</SelectItem>
                <SelectItem value='Paraguay'>Paraguay</SelectItem>
              </SelectContent>
            </Select>
            {initialData.nationality && (
              <div className='mt-1 flex items-center'>
                <CheckCircle className='mr-1 h-4 w-4 text-green-400' />
                <span className='text-xs text-green-300'>
                  Detectado automáticamente
                </span>
              </div>
            )}
          </div>

          {/* Age Field */}
          <div>
            <Label
              htmlFor='age'
              className='text-sm font-medium text-orange-300'
            >
              {t('form.age')}
            </Label>
            <Input
              id='age'
              type='number'
              value={formData.age}
              onChange={(e) => handleChange('age')(e.target.value)}
              className='mt-1 border-slate-600 bg-slate-700 text-white placeholder-slate-400'
              placeholder='48'
              min='1'
              max='120'
            />
            {initialData.age && (
              <div className='mt-1 flex items-center'>
                <CheckCircle className='mr-1 h-4 w-4 text-green-400' />
                <span className='text-xs text-green-300'>
                  Detectado automáticamente
                </span>
              </div>
            )}
          </div>

          {/* Date Field */}
          <div>
            <Label
              htmlFor='date'
              className='text-sm font-medium text-orange-300'
            >
              {t('form.date')}
            </Label>
            <Input
              id='date'
              type='date'
              value={formData.date}
              onChange={(e) => handleChange('date')(e.target.value)}
              className='mt-1 border-slate-600 bg-slate-700 text-white placeholder-slate-400'
            />
            {initialData.date && (
              <div className='mt-1 flex items-center'>
                <CheckCircle className='mr-1 h-4 w-4 text-green-400' />
                <span className='text-xs text-green-300'>
                  Detectado automáticamente
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3 pt-4'>
            <Button
              type='button'
              variant='outline'
              onClick={onReset}
              className='flex-1 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
            >
              {t('form.reset')}
            </Button>
            <Button
              type='submit'
              className='flex-1 bg-orange-600 text-white hover:bg-orange-700'
            >
              {t('form.submit')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
