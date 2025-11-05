import { Button } from '@/components/ui/button';
import { Flag, SortDesc } from 'lucide-react';
import React from 'react';

function DonaAhora() {
  return (
    <div className='pt-4'>
      <Button
        size='lg'
        className='group bg-primary h-14 to-blue-500 text-base font-semibold text-white shadow-lg hover:from-blue-500 hover:to-blue-400 hover:shadow-xl sm:text-4xl'
      >
        <span>APOYA</span>{' '}
        <span className='text-primary-900 font-normal italic sm:text-2xl'>
          ahora!
        </span>
        <SortDesc className='ml-2 size-6 transition-transform group-hover:scale-110' />
      </Button>
    </div>
  );
}

export default DonaAhora;
