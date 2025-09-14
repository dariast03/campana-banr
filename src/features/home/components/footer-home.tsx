import React from 'react';

interface FooterHomeProps {
  // Props if needed
}

export const FooterHome: React.FC<FooterHomeProps> = () => {
  return (
    <footer className='footer bg-blue-600 py-8 text-white'>
      <div className='container mx-auto text-center'>
        <p>&copy; 2025 ONG Campaña Banr. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
