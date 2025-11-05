import React from 'react';

interface ReportsSectionProps {
  // Props if needed
}

export const ReportsSection: React.FC<ReportsSectionProps> = () => {
  return (
    <section className='reports-section py-12'>
      <div className='container mx-auto'>
        <h3 className='text-center text-2xl font-bold'>Informes</h3>
        <p className='mt-4 text-center'>
          Descarga nuestros informes sobre la conservación de la Paraba Azul.
        </p>
        <div className='mt-4 text-center'>
          <a
            href='/report.pdf'
            className='rounded bg-blue-500 px-6 py-2 text-white'
          >
            Descargar Informe
          </a>
        </div>
      </div>
    </section>
  );
};
