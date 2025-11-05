import { Navbar } from '@/features/shared';
import React from 'react';

interface HeaderHomeProps {
  // Props if needed
}

export const HeaderHome: React.FC<HeaderHomeProps> = () => {
  return (
    <header className='absolute top-0 right-0 left-0 z-50'>
      <Navbar />
    </header>
  );
};
