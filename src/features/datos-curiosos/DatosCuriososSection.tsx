'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';

const DatosCuriososSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [cardPositions, setCardPositions] = useState<number[]>([]);
  const factsColumnRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Calcular las posiciones de los círculos basadas en las tarjetas
  useEffect(() => {
    const updatePositions = () => {
      const positions = cardRefs.current.map((cardRef) => {
        if (cardRef && factsColumnRef.current) {
          const rect = cardRef.getBoundingClientRect();
          const containerRect = factsColumnRef.current.getBoundingClientRect();
          return rect.top - containerRect.top + 32;
        }
        return 0;
      });
      setCardPositions(positions);
    };

    updatePositions();
    const timer = setTimeout(updatePositions, 350);
    return () => clearTimeout(timer);
  }, [expandedCards]);

  const factsData = [
    {
      titlePrefix: 'Conoce cuáles son',
      titleMain: 'Las Amenazas',
      preview:
        'La pérdida de hábitat por deforestación y expansión agrícola y ganadera.\nEl comercio ilegal de aves silvestres.\nLa baja tasa reproductiva de la especie.\n...',
      fullContent:
        'Está catalogada como En Peligro Crítico en la Lista Roja de la UICN. Se estima una población actual de apenas 500-700 individuos en estado silvestre.'
    },
    {
      titlePrefix: 'Conoce cuáles son',
      titleMain: 'Los Esfuerzos',
      preview:
        'La Reserva Natural Barba Azul y la Reserva Laney Rickman fueron creadas por Armonía, y son las únicas en el mundo dedicadas específicamente a proteger a la Paraba Barba Azul y su hábitat.',
      fullContent: 'Contenido completo de esfuerzos basado en imagen'
    },
    {
      titlePrefix: 'Conoce cuáles son',
      titleMain: 'Las Necesidades',
      preview:
        'Entrenar y equipar a guardaparques y voluntarios locales que protegen la reserva y realizan patrullajes contra amenazas.\nInvertir en programas educativos, visitas escolares y talleres comunitarios para crear conciencia ambiental.\nImplementar estrategias de manejo de conservación, monitoreo de poblaciones, restauración de hábitats y desarrollo del Plan de Acción 2026-2036.',
      fullContent: 'Contenido completo de necesidades basado en imagen'
    }
  ];

  // Calcular altura de las líneas conectoras
  const getLineHeight = (index: number) => {
    if (index >= cardPositions.length - 1) return 0;
    const currentPos = cardPositions[index];
    const nextPos = cardPositions[index + 1];
    return nextPos - currentPos;
  };

  // Datos para las tarjetas animadas de la galería
  const galleryData = [
    { emoji: '🦜', hueA: 200, hueB: 240, title: 'Paraba Barba Azul' },
    { emoji: '🌿', hueA: 120, hueB: 160, title: 'Su Hábitat' },
    { emoji: '🏞️', hueA: 60, hueB: 100, title: 'Reservas Naturales' }
  ];

  return (
    <div className='mx-auto w-full max-w-7xl px-4 py-16'>
      {/* Main Content Grid */}
      <div className='grid grid-cols-12 items-start gap-8'>
        {/* Timeline Column - Clean and Modern */}
        <div className='col-span-1'>
          <div className='relative flex h-full justify-center'>
            <div className='absolute flex h-full w-full flex-col items-center'>
              {factsData.map((_, index) => (
                <div
                  key={index}
                  className='absolute flex flex-col items-center'
                  style={{
                    top: cardPositions[index] || 0,
                    transition: 'top 0.3s ease-in-out'
                  }}
                >
                  <div className='relative z-20'>
                    <div
                      className={`h-5 w-5 rounded-full border-3 shadow-md transition-all duration-300 ${
                        expandedCards.includes(index)
                          ? 'scale-125 border-blue-600 bg-blue-600'
                          : 'border-blue-500 bg-white hover:scale-110'
                      }`}
                    >
                      {expandedCards.includes(index) && (
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <div className='h-2 w-2 animate-pulse rounded-full bg-white'></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {index < factsData.length - 1 && (
                    <div
                      className='absolute top-5 w-0.5 bg-gradient-to-b from-blue-500 to-blue-400'
                      style={{
                        height: `${getLineHeight(index)}px`,
                        transition: 'height 0.3s ease-in-out'
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facts Column - Main Content */}
        <div className='col-span-7 space-y-12' ref={factsColumnRef}>
          {factsData.map((fact, index) => (
            <div
              key={index}
              className='group relative'
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <h3 className='mb-4 text-3xl font-bold'>
                <span className='text-white'>{fact.titlePrefix}</span>
                <span className='text-blue-500'> {fact.titleMain}</span>
              </h3>

              <div
                className='relative z-0 rounded-[18px] border border-solid p-0 pr-2'
                style={{
                  borderWidth: '1px',
                  borderColor: '#2a1805',
                  boxShadow:
                    '2px 2px 0px 1px #2a1805, 2px 2px 0px 1px #3d2103, inset 1px 0px 0px 1px rgba(0, 0, 0, 0.8), inset 0px 0px 0px 3px rgb(61 33 2)'
                }}
              >
                <div
                  onClick={() => toggleCard(index)}
                  className='cursor-pointer rounded-[18px] border-1 border-[#6c3a04] bg-[#60380d] p-4 text-white hover:opacity-90'
                  style={{
                    borderWidth: '1px',
                    borderColor: '#2a1805',
                    boxShadow:
                      'rgb(61, 33, 3) 1px 1px 0px 1px, rgba(0, 0, 0, 0.8) 0px 0px 0px 1px inset, inset rgb(255 255 255) -1px 1px 0px 0.5px'
                  }}
                >
                  <p className='leading-relaxed whitespace-pre-line'>
                    {fact.preview}
                  </p>
                </div>

                <div
                  className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedCards.includes(index)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='rounded-lg bg-transparent p-4 text-white'>
                    <p className='leading-relaxed'>{fact.fullContent}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Column - Animated Cards */}
        <div className='col-span-4'>
          <div
            style={{
              margin: '20px auto',
              maxWidth: 350,
              paddingBottom: 50,
              width: '100%'
            }}
          >
            {galleryData.map((item, i) => (
              <AnimatedCard
                key={item.title}
                i={i}
                emoji={item.emoji}
                hueA={item.hueA}
                hueB={item.hueB}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para las tarjetas animadas
interface AnimatedCardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
  title: string;
}

function AnimatedCard({ emoji, hueA, hueB, i, title }: AnimatedCardProps) {
  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  const cardVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: i % 2 === 0 ? -5 : 5,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.1
      }
    }
  };

  return (
    <motion.div
      className={`card-container-${i}`}
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 40,
        marginBottom: i === 2 ? 0 : -40
      }}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.6 }}
    >
      {/* Background splash */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '220px',
          height: '327px',
          background,
          clipPath: `path("M 0 253.5 C 0 242.454 8.995 235.101 20 233.5 L 200 189.5 C 210.085 188.033 220 198.454 220 209.5 L 220 250 C 220 261.046 211.046 280 200 280 L 20 280 C 8.954 280 0 271.046 0 260 Z")`
        }}
      />

      {/* Animated card */}
      <motion.div
        style={{
          fontSize: 80,
          width: 158,
          height: 220,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 14,
          background: '#f5f5f5',
          boxShadow:
            '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
          transformOrigin: '50% 50%',
          gap: '10px'
        }}
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
          rotate: 0,
          transition: { duration: 0.2 }
        }}
        className='card cursor-pointer'
      >
        <div style={{ fontSize: '70px' }}>{emoji}</div>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            lineHeight: '1.2'
          }}
        >
          {title}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DatosCuriososSection;
