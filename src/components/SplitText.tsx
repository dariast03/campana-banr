'use client';
import React from 'react';

interface SplitTextProps {
  text: string;
  by?: 'letter' | 'word'; // dividir por letra o palabra
  className?: string;
}

export default function SplitText({
  text,
  by = 'letter',
  className = ''
}: SplitTextProps) {
  const parts = by === 'word' ? text.split(' ') : text.split('');

  return (
    <span className={`split ${className}`}>
      {parts.map((part, i) => (
        <span key={i} style={{ ['--i' as any]: i }}>
          {part === ' ' ? '\u00A0' : part}
          {by === 'word' && i !== parts.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}
