import React from 'react';

interface RegistrationFormSectionProps {
  // Props if needed
}

export const RegistrationFormSection: React.FC<
  RegistrationFormSectionProps
> = () => {
  return (
    <section className='registration-form-section bg-gray-100 py-12'>
      <div className='container mx-auto'>
        <h3 className='text-center text-2xl font-bold'>Regístrate</h3>
        <form className='mx-auto mt-8 max-w-md'>
          <input
            type='text'
            placeholder='Nombre'
            className='mb-4 w-full rounded border p-2'
          />
          <input
            type='email'
            placeholder='Email'
            className='mb-4 w-full rounded border p-2'
          />
          <button
            type='submit'
            className='w-full rounded bg-blue-500 px-6 py-2 text-white'
          >
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
};
