'use client';

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  PerspectiveCamera
} from '@react-three/drei';
import { ParrotModel3D } from './ParrotModel3D';
import { CAMERA_CONFIG, LIGHTING_CONFIG } from '../config/parrot-model.config';

export const ParrotScene: React.FC = () => {
  return (
    <div className='relative h-full w-full'>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className='touch-none'
      >
        <PerspectiveCamera
          makeDefault
          position={CAMERA_CONFIG.position}
          fov={CAMERA_CONFIG.fov}
        />

        {/* Iluminación */}
        <ambientLight intensity={LIGHTING_CONFIG.ambient.intensity} />
        <directionalLight
          position={LIGHTING_CONFIG.directional.position}
          intensity={LIGHTING_CONFIG.directional.intensity}
          castShadow={LIGHTING_CONFIG.directional.castShadow}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight
          position={LIGHTING_CONFIG.point.position}
          intensity={LIGHTING_CONFIG.point.intensity}
        />

        {/* Entorno para reflejos */}
        <Environment preset='sunset' />

        {/* Modelo 3D */}
        <Suspense fallback={null}>
          <ParrotModel3D />
        </Suspense>

        {/* Controles para rotar el modelo */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
