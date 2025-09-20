// features/support/components/SupportBenefits.tsx
import Typewriter from '@/components/typewriter';
import type { BenefitItem } from '../types';
import SplitText from '@/components/SplitText';

interface SupportBenefitsProps {
  benefits: BenefitItem[];
  title?: string;
  className?: string;
}

export const SupportBenefits = ({
  benefits,
  title = 'a la Paraba Barba Azul contribuyes a:',
  className = ''
}: SupportBenefitsProps) => {
  return (
    <div className={`${className}`}>
      <h1 className='mt-7 mb-2 flex flex-wrap gap-x-2 font-sans text-6xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 md:text-6xl'>
        Con tu{' '}
        <SplitText
          text='Apoyo'
          className='text-7xl font-extrabold text-[#056DB4] md:text-7xl'
          by='letter'
        />
      </h1>

      <h2 className='mb-8 font-sans text-6xl font-bold text-white md:text-6xl'>
        a la{' '}
        <SplitText
          text='Paraba Barba Azul'
          className='text-7xl font-extrabold text-[#056DB4] md:text-7xl'
          by='word'
        />{' '}
        <SplitText text='contribuyes a:' className='inline-block' by='word' />
      </h2>
      <br />
      <br />
      <div className='space-y-5'>
        {benefits.map((benefit) => {
          const isEven = benefit.id % 2 === 0;
          const textColor = isEven ? 'text-[#056DB4]' : 'text-white';
          const shadow = isEven ? 'drop-shadow-lg' : '';

          return (
            <div key={benefit.id} className='flex items-start gap-8'>
              <span
                className={`number-hover number-hover:hover min-w-[3rem] cursor-pointer font-sans text-4xl font-extrabold md:text-5xl ${textColor} ${shadow}`}
              >
                {benefit.id.toString().padStart(2, '0')}
              </span>
              <span
                className={`${textColor} ${shadow} fade-in-up font-sans text-lg leading-relaxed font-bold md:text-2xl`}
              >
                <Typewriter words={[benefit.text]} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
