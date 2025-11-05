/**
 * ARCHIVO COMENTADO - Modelo 3D para uso futuro
 * Este componente contiene el modelo 3D interactivo de la Paraba Barba Azul
 * con líneas animadas que siguen al modelo cuando se rota.
 *
 * Actualmente se usa ParrotImageStatic.tsx en su lugar.
 * Para volver a activar: descomentar import en hero-home.tsx
 */

'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Line } from '@react-three/drei';
import * as THREE from 'three';
import {
  PARROT_ANNOTATIONS,
  MODEL_CONFIG,
  LINE_CONFIG
} from '../config/parrot-model.config';

interface AnnotationLineProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  label: string;
  position: 'left' | 'right';
}

const AnnotationLine: React.FC<AnnotationLineProps> = ({ start, end }) => {
  const pointRef = useRef<THREE.Mesh>(null);

  // Animación sutil de pulsación
  useFrame(({ clock }) => {
    if (pointRef.current) {
      const scale =
        1 +
        Math.sin(clock.getElapsedTime() * LINE_CONFIG.pulseSpeed) *
          LINE_CONFIG.pulseAmount;
      pointRef.current.scale.setScalar(scale);
    }
  });

  const points = useMemo(() => {
    return [start, end];
  }, [start, end]);

  return (
    <group>
      {/* Línea usando el componente Line de drei */}
      <Line
        points={points}
        color={LINE_CONFIG.color}
        lineWidth={LINE_CONFIG.width}
        transparent
        opacity={LINE_CONFIG.opacity}
      />

      {/* Punto en el inicio (sobre el loro) */}
      <mesh ref={pointRef} position={start}>
        <sphereGeometry args={[LINE_CONFIG.pointSize, 16, 16]} />
        <meshBasicMaterial
          color={LINE_CONFIG.color}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Punto en el final */}
      <mesh position={end}>
        <sphereGeometry args={[LINE_CONFIG.endPointSize, 16, 16]} />
        <meshBasicMaterial color={LINE_CONFIG.endPointColor} />
      </mesh>
    </group>
  );
};

interface ParrotModel3DProps {
  onAnnotationsUpdate?: (
    annotations: Array<{
      position: THREE.Vector3;
      label: string;
      side: 'left' | 'right';
    }>
  ) => void;
}

export const ParrotModel3D: React.FC<ParrotModel3DProps> = ({
  onAnnotationsUpdate
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_CONFIG.path);

  useFrame((state) => {
    if (groupRef.current && MODEL_CONFIG.autoRotate) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * MODEL_CONFIG.autoRotateSpeed) *
        0.2;
    }
  });

  useFrame(() => {
    if (groupRef.current && onAnnotationsUpdate) {
      const worldAnnotations = PARROT_ANNOTATIONS.map((ann) => {
        const worldPos = ann.end.clone();
        groupRef.current?.localToWorld(worldPos);
        return {
          position: worldPos,
          label: ann.label,
          side: ann.position
        };
      });
      onAnnotationsUpdate(worldAnnotations);
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={MODEL_CONFIG.scale}
        position={MODEL_CONFIG.position}
      />
    </group>
  );
};

// Precargar el modelo
useGLTF.preload(MODEL_CONFIG.path);
