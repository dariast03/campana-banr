'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from '@/components/typewriter';
export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('nosotros');

  const tabs = [
    {
      id: 'nosotros',
      label: 'Sobre NOSOTROS',
      content: {
        text: 'Desde 1996, como Asociación Armonía trabajamos por la conservación de las aves y sus hábitats en Bolivia, en alianza con comunidades locales. Gracias a proyectos liderados por Armonía y aliados internacionales, la población se ha estabilizado y aumentado desde niveles mucho más críticos en los años 90.',
        logo: true
      }
    },
    {
      id: 'mision',
      label: 'Nuestra MISIÓN',
      content: {
        text: 'Nuestra misión es conservar las aves y sus ecosistemas en Bolivia, trabajando de la mano con las comunidades locales para crear un futuro sostenible donde la biodiversidad y las personas puedan prosperar juntas.',
        logo: false
      }
    }
  ];

  return (
    <section className='flex min-h-screen flex-col items-center justify-center px-4 py-16'>
      {/* Title */}
      <div className='mb-12 text-center'>
        <h1 className='mb-4 text-6xl font-extrabold text-white shadow-lg'>
          Acerca de{' '}
          <Typewriter
            words={['NOSOTROS', 'Nuestra Misión', 'Nuestro Equipo']}
            typingSpeed={100}
            deletingSpeed={50}
            delayBetween={1500}
            loop={true}
            className='text-[#238AD0]'
          />
        </h1>
      </div>

      {/* Content Container */}
      <div className='w-full max-w-4xl overflow-hidden rounded-lg bg-[#444444] shadow-2xl'>
        {/* Tab Navigation */}
        <div className='relative flex bg-[#444444]'>
          <motion.div
            className='absolute inset-y-0 left-0 bg-[#1E1E1E] shadow-lg'
            layoutId='activeTab'
            initial={false}
            animate={{
              left: activeTab === 'nosotros' ? 0 : '50%',
              width: '50%'
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          />

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className='relative z-10 flex-1 px-6 py-4 text-lg font-medium transition-colors'
            >
              <span className='flex items-center justify-center gap-2'>
                <span className='text-lg font-extralight text-white'>
                  {tab.label.split(' ')[0]}
                </span>
                <span className='text-2xl font-bold text-[#238AD0]'>
                  {tab.label.split(' ')[1]}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className='p-12'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='space-y-6'
          >
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <div className='flex-1'>
                <p className='text-xl leading-relaxed font-extralight text-white'>
                  {tabs.find((tab) => tab.id === activeTab)?.content.text}
                </p>
              </div>

              {/* Armonía Logo - only show on "Sobre Nosotros" tab */}
              {activeTab === 'nosotros' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className='flex-shrink-0'
                >
                  <div className='flex items-center justify-center'>
                    <Image
                      src='/assets/logos/armonia.svg'
                      alt='Birds silhouette'
                      width={120}
                      height={60}
                      className='opacity-80'
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
