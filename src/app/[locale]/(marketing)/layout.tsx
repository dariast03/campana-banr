import { HeaderHome } from '@/features/home';
import { Navbar } from '@/features/shared';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
}
