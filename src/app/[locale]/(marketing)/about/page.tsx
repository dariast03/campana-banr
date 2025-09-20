import { SupportSection, type BenefitItem } from '@/features/support';

const campaignBenefits: BenefitItem[] = [
  {
    id: 1,
    text: 'Invertir en programas educativos, visitas escolares y talleres comunitarios para crear conciencia ambiental.'
  },
  {
    id: 2,
    text: 'Entrenar y equipar a guardaparques y voluntarios locales que protegen la reserva y realizan patrullajes contra amenazas.'
  },
  {
    id: 3,
    text: 'Actividades de monitoreo, educación ambiental, talleres comunitarios y patrullajes de protección en reservas naturales.'
  },
  {
    id: 4,
    text: 'Equipos de campo (GPS, radios, drones, cámaras), vehículos y suministros básicos que permiten a los equipos trabajar en zonas remotas.'
  }
];

export default function AboutPage() {
  return (
    <main className='min-h-screen'>
      <div className='container mx-auto px-10 py-10'>
        <SupportSection
          benefits={campaignBenefits}
          benefitsTitle='a la Paraba Barba Azul contribuyes a:'
          campaignTitle='Hazte Amigo de tu Paraba Favorita'
          campaignDescription='Hazte Amigo y ayuda a salvar a la Paraba Barba Azul, especie única de Bolivia en peligro crítico de extinción. Con tu apoyo protegemos reservas naturales y mantenemos el programa de miedo adoptivo, donde cada temporada decenas de polluelos logran sobrevivir gracias a tu animal.'
          campaignCta='Conviértete en Friend hoy! Tu aporte se transforma en hábitat seguro, nidos activos y esperanza de vida para esta especie extraordinaria.'
          layout='stacked'
        />
      </div>
    </main>
  );
}
