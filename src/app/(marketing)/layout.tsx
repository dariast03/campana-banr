import { HeaderHome } from '@/features/home';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderHome />

      {children}
    </div>
  );
}
