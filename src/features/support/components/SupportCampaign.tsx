import WavyText from '@/components/WavyText';

interface SupportCampaignProps {
  title?: string;
  description?: string;
  ctaText?: string;
  className?: string;
}

export const SupportCampaign = ({
  title = 'Hazte Amigo de tu Paraba Favorita',
  description = 'Hazte Amigo y ayuda a salvar a la Paraba Barba Azul, especie única de Bolivia en peligro crítico. Con tu apoyo protegemos reservas naturales y mantenemos el programa de nidos adoptivos, donde cada temporada decenas de polluelos logran sobrevivir gracias a tu amistad.',
  ctaText = 'Conviértete en Friend hoy! Tu aporte se transforma en hábitat seguro, nidos activos y esperanza de vida para esta especie extraordinaria.',
  className = ''
}: SupportCampaignProps) => {
  return (
    <div className={`mt-9 w-full px-2 md:px-8 ${className}`}>
      {/* Main title matching the image */}
      <h2 className='mb-4 flex w-full flex-wrap gap-x-2 font-sans text-3xl font-extrabold text-white transition-transform duration-300 ease-in-out hover:scale-105 md:text-6xl'>
        <span>Apoya a la</span>
        <span className='text-3xl font-extrabold text-[#056DB4] md:text-7xl'>
          CAMPAÑA
        </span>
      </h2>

      {/* Secondary title matching the image */}
      <h3 className='fade-in-up mb-6 flex flex-wrap gap-x-2 font-sans text-4xl font-bold drop-shadow-lg md:text-6xl lg:text-7xl'>
        <span className='font-extrabold text-[#056DB4]'>Hazte</span>
        <span className='font-extrabold text-white'>Amigo de tu</span>
        <WavyText text='Paraba Favorita' className='text-[#056DB4]' />
      </h3>
      {/* Main banner text matching the image exactly */}
      <div className='text-2xl leading-tight font-bold hover:scale-80 md:text-4xl lg:text-5xl'>
        {/* First line */}
        <div className='mb-2'>
          <span className='text-4xl font-extrabold text-[#056DB4] drop-shadow-lg md:text-4xl'>
            Conviértete en{' '}
          </span>
          <span className='text-5xl font-extrabold text-white shadow-2xl md:text-5xl'>
            Friend{' '}
          </span>
          <span className='text-3xl font-bold text-[#056DB4] drop-shadow-lg md:text-4xl'>
            hoy!{' '}
          </span>
          <span className='text-5xl font-extrabold text-white shadow-2xl drop-shadow-lg md:text-5xl'>
            Tu aporte
          </span>
          <span className='text-4xl font-extrabold text-[#056DB4] drop-shadow-lg md:text-4xl'>
            {' '}
            se transforma en
          </span>
        </div>

        {/* Second line */}
        <div className='fade-in mb-2'>
          <span className='text-5xl font-extrabold text-white shadow-2xl md:text-5xl'>
            hábitat seguro{' '}
          </span>
          <span className='text-4xl font-extrabold text-[#056DB4] drop-shadow-lg md:text-4xl'>
            , nidos activos{' '}
          </span>
          <span className='text-5xl font-extrabold text-white shadow-2xl md:text-5xl'>
            y{' '}
          </span>
          <span className='text-5xl font-extrabold text-white shadow-2xl md:text-5xl'>
            esperanza de vida{' '}
          </span>
          <span className='text-4xl font-extrabold text-[#056DB4] drop-shadow-lg md:text-4xl'>
            para
          </span>
          <span className='text-4xl font-extrabold text-[#056DB4] drop-shadow-lg md:text-4xl'>
            {' '}
            esta{' '}
          </span>
          <span className='text-5xl font-extrabold text-white shadow-2xl drop-shadow-lg md:text-6xl'>
            {' '}
            Especie extraordinaria
          </span>
        </div>
      </div>
    </div>
  );
};
