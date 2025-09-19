'use client';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { use } from 'react';

export function FooterHome() {
  return (
    <footer className='border-t border-white/10 bg-black/20 px-6 py-12 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-7xl flex-col items-center'>
        {/* Main Row */}
        <div className='flex w-full flex-col items-center justify-center gap-8 md:flex-row md:justify-between'>
          {/* Logo Section */}
          <div className='flex items-center justify-center md:justify-start'>
            <img
              src='/assets/logos/logo.svg'
              alt='Logo'
              className='h-56 w-56 object-contain md:h-72 md:w-72'
            />
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col items-center space-y-4'>
            <a
              href='#'
              className='text-lg font-semibold text-white transition-colors hover:text-blue-400 md:text-xl'
            >
              Registro
            </a>
            <a
              href='#'
              className='text-lg font-semibold text-white transition-colors hover:text-blue-400 md:text-xl'
            >
              Sobre
            </a>
            <a
              href='#'
              className='text-lg font-semibold text-white transition-colors hover:text-blue-400 md:text-xl'
            >
              Donar
            </a>
            <a
              href='#'
              className='text-lg font-semibold text-white transition-colors hover:text-blue-400 md:text-xl'
            >
              Recursos
            </a>
          </div>

          {/* Social Media and Contact */}
          <div className='flex flex-col items-start space-y-4'>
            <h4 className='text-lg font-light text-white md:text-xl'>
              Síguenos en:
            </h4>

            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/armoniabolivia'
                className='flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200'
                aria-label='Facebook'
              >
                <Facebook className='h-6 w-6 text-black' />
              </a>
              <a
                href='https://www.instagram.com/armonia.bolivia/'
                className='flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200'
                aria-label='Instagram'
              >
                <Instagram className='h-6 w-6 text-black' />
              </a>
              <button
                className='group relative flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200'
                aria-label='X (Twitter)'
                onClick={(e) => e.preventDefault()}
              >
                <svg
                  className='h-6 w-6 text-black'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                </svg>

                {/* Bubble for language selection */}
                <div className='absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 space-x-2 rounded-full bg-white px-3 py-1 text-xs opacity-0 shadow-lg transition-opacity group-hover:opacity-100'>
                  <a
                    href='https://x.com/armonia_bolivia'
                    className='text-black/70 underline hover:text-blue-500'
                    onClick={(e) => e.stopPropagation()} // evita que el click se propague al padre
                  >
                    ES
                  </a>
                  <span>/</span>
                  <a
                    href='https://x.com/armonia_bolivia'
                    className='text-black/70 underline hover:text-blue-500'
                    onClick={(e) => e.stopPropagation()}
                  >
                    EN
                  </a>
                </div>
              </button>

              <a
                href='https://www.youtube.com/@barbaazulnaturereserve6095'
                className='flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200'
                aria-label='YouTube'
              >
                <Youtube className='h-6 w-6 text-black' />
              </a>
            </div>

            <div className='space-y-1 text-sm text-white md:text-base'>
              <p>Av. Lomas de Arena, 400</p>
              <p>Santa Cruz de la Sierra, Bolivia</p>
              <p>591-3-3558908</p>
              <p>591-7-1391856</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 w-full border-t border-white/10 pt-8 text-center'>
          <p className='text-sm text-white/70 md:text-base'>
            Armonia Bolivia © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
