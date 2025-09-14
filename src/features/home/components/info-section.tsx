import React from 'react';

interface InfoCard {
  title: string;
  description: string;
}

interface InfoSectionProps {
  cards: InfoCard[];
}

export const InfoSection: React.FC<InfoSectionProps> = ({ cards }) => {
  return (
    <section className='info-section bg-gray-100 py-12'>
      <div className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3'>
        {cards.map((card, index) => (
          <div key={index} className='card rounded bg-white p-6 shadow'>
            <h3 className='text-xl font-bold'>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
