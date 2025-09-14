import React from 'react';

interface HeaderHomeProps {
  // Props if needed
}

export const HeaderHome: React.FC<HeaderHomeProps> = () => {
  return (
    <header className='bg-blue-600 p-4 text-white'>
      <h1>Campaña para la Paraba Azul</h1>
      {/* Navigation or logo here */}
    </header>
  );
};
