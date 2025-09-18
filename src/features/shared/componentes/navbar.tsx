'use client';

import React, { useState } from 'react';
import { Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const navItems = [
  { href: '/', key: 'home' },
  { href: '/recursos', key: 'resources' },
  { href: '/sobre', key: 'about' },
  { href: '/registro', key: 'register' },
  { href: '/donar', key: 'donate' }
];

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Navbar');

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  const LanguageSelector = () => (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className='w-auto border-transparent bg-transparent text-white hover:bg-white/10 hover:text-yellow-400'>
        <Globe className='mr-2 h-4 w-4' />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='border-slate-700 bg-slate-900'>
        <SelectItem
          value='es'
          className='cursor-pointer text-white hover:bg-slate-800'
        >
          ES
        </SelectItem>
        <SelectItem
          value='en'
          className='cursor-pointer text-white hover:bg-slate-800'
        >
          EN
        </SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <nav
      className={`w-full bg-transparent p-4 backdrop-blur-sm md:p-10 ${className}`}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='relative'>
              <Image
                src='/img/logo.png'
                alt='Reserva Barba Azul Logo'
                width={180}
                height={80}
                className='rounded-full object-contain'
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center space-x-8 md:flex'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='font-medium text-white transition-colors duration-200 hover:text-yellow-400'
              >
                {t(item.key)}
              </Link>
            ))}
            {/* Language Selector */}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center space-x-2 md:hidden'>
            {/* Mobile Language Selector - Next to hamburger */}
            <div className='flex items-center'>
              <Select value={locale} onValueChange={handleLanguageChange}>
                <SelectTrigger className='w-auto border-transparent bg-transparent text-white hover:bg-white/10 hover:text-yellow-400'>
                  <Globe className='mr-1 h-4 w-4' />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className='border-slate-700 bg-slate-900'>
                  <SelectItem
                    value='es'
                    className='cursor-pointer text-white hover:bg-slate-800'
                  >
                    ES
                  </SelectItem>
                  <SelectItem
                    value='en'
                    className='cursor-pointer text-white hover:bg-slate-800'
                  >
                    EN
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-white hover:bg-white/10 hover:text-yellow-400'
                >
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>

              <SheetContent
                side='right'
                className='w-[300px] border-slate-700 bg-slate-900/95 px-6 backdrop-blur-md'
              >
                <div className='mt-8 flex flex-col space-y-4'>
                  {/* Mobile Logo */}
                  <Link href='/' className='mb-8 flex items-center space-x-2'>
                    <div className='relative h-8 w-8'>
                      <Image
                        src='/img/logo.png'
                        alt='Reserva Barba Azul Logo'
                        width={32}
                        height={32}
                        className='rounded-full object-contain'
                      />
                    </div>
                    <div className='text-sm font-semibold text-yellow-400'>
                      <div>Reserva Barba Azul</div>
                    </div>
                  </Link>

                  {/* Mobile Navigation Links */}
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='py-2 text-lg font-medium text-white transition-colors duration-200 hover:text-yellow-400'
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
