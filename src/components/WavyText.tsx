import React from 'react';

interface WavyTextProps {
  text: string;
  className?: string;
}

export default function WavyText({ text, className = '' }: WavyTextProps) {
  return (
    <span className={`wavy ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} style={{ '--i': i } as React.CSSProperties}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
