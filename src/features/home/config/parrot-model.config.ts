import * as THREE from 'three';

/**
 * Configuración del modelo 3D de la Paraba Barba Azul
 * Ajusta estos valores según la geometría real de tu modelo
 */

export interface ModelAnnotation {
  /** Posición en el modelo 3D donde se ancla la línea */
  point: THREE.Vector3;
  /** Posición final de la línea (donde termina en el espacio) */
  end: THREE.Vector3;
  /** Texto descriptivo */
  label: string;
  /** Lado donde se muestra la anotación */
  position: 'left' | 'right';
}

/**
 * Anotaciones del modelo
 * Los valores están en coordenadas locales del modelo
 * Ajusta los valores X, Y, Z según tu modelo específico
 */
export const PARROT_ANNOTATIONS: ModelAnnotation[] = [
  {
    point: new THREE.Vector3(0, 0.8, 0.1), // Cabeza/Iris
    end: new THREE.Vector3(1.2, 0.9, 0),
    label: 'Iris amarillento o gris claro en adultos',
    position: 'right'
  },
  {
    point: new THREE.Vector3(0.2, 0.5, 0.3), // Pico
    end: new THREE.Vector3(1.2, 0.5, 0.3),
    label:
      'Pico grande y robusto, diseñado para romper semillas y nueces duras',
    position: 'right'
  },
  {
    point: new THREE.Vector3(0, -0.2, 0), // Pecho
    end: new THREE.Vector3(1.2, -0.2, 0),
    label: 'Amarillo dorado en el pecho y vientre',
    position: 'right'
  },
  {
    point: new THREE.Vector3(0, 0, 0.2), // Dorso
    end: new THREE.Vector3(1.2, 0.1, 0.2),
    label: 'Plumaje azul turquesa brillante en el dorso, alas y cola',
    position: 'right'
  }
];

/**
 * Configuración de la cámara
 */
export const CAMERA_CONFIG = {
  position: [3, 1, 3] as [number, number, number],
  fov: 50
};

/**
 * Configuración del modelo
 */
export const MODEL_CONFIG = {
  path: '/assets/parrot-model/source/parrot rebuilt.glb',
  scale: 3.5,
  position: [0, -0.5, 0] as [number, number, number],
  autoRotate: true,
  autoRotateSpeed: 0.3
};

/**
 * Configuración de iluminación
 */
export const LIGHTING_CONFIG = {
  ambient: {
    intensity: 0.5
  },
  directional: {
    position: [5, 5, 5] as [number, number, number],
    intensity: 1,
    castShadow: true
  },
  point: {
    position: [-5, 5, -5] as [number, number, number],
    intensity: 0.5
  }
};

/**
 * Configuración de líneas de anotación
 */
export const LINE_CONFIG = {
  color: '#60A5FA', // Azul
  width: 2,
  opacity: 0.8,
  pointSize: 0.03,
  endPointSize: 0.02,
  endPointColor: '#FBBF24', // Amarillo
  pulseSpeed: 2, // Velocidad de pulsación
  pulseAmount: 0.1 // Cantidad de pulsación (0.1 = 10%)
};
