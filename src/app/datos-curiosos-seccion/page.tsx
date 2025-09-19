// src/app/mi-seccion-test/page.tsx
import MiSeccion from '@/features/datos-curiosos/DatosCuriososSection';
import Informe from '@/features/informes/InformesSection';

export default function MiSeccionTestPage() {
  return (
    <main>
      <MiSeccion />
      <div className='h-32'></div>
      <Informe />
    </main>
  );
}
