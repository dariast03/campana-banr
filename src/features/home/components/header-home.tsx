import Link from 'next/link';
import React from 'react';

interface HeaderHomeProps {
  // Props if needed
}

export const HeaderHome: React.FC<HeaderHomeProps> = () => {
  return (
    <header className='flex justify-between bg-blue-600 p-4 text-white'>
      <h1>Campaña para la Paraba Azul</h1>

      {/* LINKS */}
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
