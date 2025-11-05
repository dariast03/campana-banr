# Hero Home - Paraba Barba Azul 🦜

## Componentes Creados

### 1. `hero-home.tsx` (Principal)

El componente principal que integra todo el hero. Incluye:

- Layout responsive con grid (1 columna en móvil, 2 en desktop)
- Columna izquierda: Título, descripción, video preview, stats y CTA
- Columna derecha: Modelo 3D interactivo
- Modal para reproducir video
- Anotaciones fijas en desktop

### 2. `ParrotModel3D.tsx`

Componente que renderiza el modelo 3D de la paraba con:

- Carga del modelo GLB desde `/public/assets/parrot-model/source/`
- **Líneas animadas** que apuntan a diferentes partes del modelo
- Las líneas **siguen al modelo** cuando lo rotas (usando `localToWorld`)
- Puntos pulsantes en los extremos de las líneas
- Rotación automática sutil del modelo

### 3. `ParrotScene.tsx`

Escena 3D completa con:

- Canvas de Three.js configurado
- Iluminación (ambiente, direccional, punto)
- Entorno con preset "sunset" para reflejos realistas
- OrbitControls para permitir rotación manual
- Cámara perspectiva posicionada estratégicamente

### 4. `ParrotComponents.tsx`

Componentes UI reutilizables:

- `VideoPreview`: Card con botón de play para el video
- `StatsInfo`: Información de estadísticas con estilo
- `ParrotInfoCard`: Cards de información (para uso futuro)

## Características Principales

### ✨ Modelo 3D Interactivo

- Modelo GLB de alta calidad
- Rotación manual con el mouse/touch
- Rotación automática sutil
- Iluminación realista con sombras

### 🎯 Líneas Animadas Inteligentes

Las líneas que apuntan a las partes de la paraba:

1. **Siguen al modelo**: Cuando rotas el modelo, las líneas se mueven con él
2. **Animación de pulsación**: Los puntos en las líneas tienen una animación sutil
3. **Posicionamiento en 3D**: Las líneas están en el espacio 3D, no son overlays estáticos

#### ¿Cómo funciona?

```typescript
// En ParrotModel3D.tsx
useFrame(() => {
  if (groupRef.current && onAnnotationsUpdate) {
    const worldAnnotations = annotations.map((ann) => {
      const worldPos = ann.end.clone();
      groupRef.current?.localToWorld(worldPos); // ← Convierte coordenadas locales a globales
      return { position: worldPos, label: ann.label, side: ann.position };
    });
    onAnnotationsUpdate(worldAnnotations);
  }
});
```

### 📱 Responsive Design

- **Móvil**: Layout de 1 columna, modelo arriba, contenido abajo
- **Tablet/Desktop**: Layout de 2 columnas, anotaciones visibles
- Altura del modelo ajustable según viewport
- Touch-friendly para dispositivos móviles

## Librerías Instaladas

```bash
bun add three @react-three/fiber @react-three/drei
```

- **three**: Librería 3D principal
- **@react-three/fiber**: Renderer de React para Three.js
- **@react-three/drei**: Helpers y componentes útiles (OrbitControls, Environment, etc.)

## Estructura de Archivos

```
src/features/home/components/
├── hero-home.tsx           # Componente principal
├── ParrotModel3D.tsx       # Modelo 3D con líneas animadas
├── ParrotScene.tsx         # Escena 3D completa
└── ParrotComponents.tsx    # Componentes UI reutilizables
```

## Próximos Pasos / Mejoras Posibles

1. **Ajustar posiciones de las líneas**: Necesitas ajustar los valores en `annotations` según la geometría real del modelo
2. **Video real**: Reemplazar el placeholder del video con el video real
3. **Optimización**: Lazy loading del modelo 3D
4. **Animaciones**: Agregar animaciones de entrada (framer-motion)
5. **Versión móvil de anotaciones**: Mostrar anotaciones de forma diferente en móvil
6. **Loading state**: Mejorar el loading mientras carga el modelo

## Notas Técnicas

- El modelo debe estar en formato GLB (ya lo está ✅)
- Las texturas se cargan automáticamente con el modelo
- Los valores de las posiciones de las líneas (`point` y `end`) necesitan ajustarse según tu modelo específico
- El componente usa `'use client'` porque Three.js requiere el navegador

## Personalización

Para ajustar las posiciones de las líneas, edita en `ParrotModel3D.tsx`:

```typescript
const annotations = useMemo(
  () => [
    {
      point: new THREE.Vector3(0, 0.8, 0.1), // ← Punto en el modelo
      end: new THREE.Vector3(1.2, 0.9, 0), // ← Final de la línea
      label: 'Tu texto aquí',
      position: 'right' as const
    }
    // ... más anotaciones
  ],
  []
);
```
