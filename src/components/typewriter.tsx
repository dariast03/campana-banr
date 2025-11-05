'use client';
import { use, useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // Velocidad de escritura (ms por letra)
  deletingSpeed?: number; // Velocidad de borrado
  delayBetween?: number; // Pausa entre palabras
  loop?: boolean; // Si repetir o no
  className?: string; // Estilos extra
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  loop = true,
  className = ''
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // palabra actual
  const [subIndex, setSubIndex] = useState(0); // letra actual
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length && !loop) return;

    const currentWord = words[index % words.length];

    // escribir
    if (!deleting && subIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex));
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // borrar
    if (deleting && subIndex >= 0) {
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex));
        setSubIndex((prev) => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    // pausa entre escribir/borrar
    if (!deleting && subIndex > currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), delayBetween);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex < 0) {
      setDeleting(false);
      setIndex((prev) => prev + 1);
      setSubIndex(0);
    }
  }, [
    subIndex,
    index,
    deleting,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetween,
    loop
  ]);

  return (
    <span className={`${className} border-r-4 border-[#056DB4] pr-1`}>
      {text}
    </span>
  );
}
