# Guía de Ajuste del Modelo 3D

## 🎯 Cómo ajustar las posiciones de las líneas

Las líneas de anotación están configuradas en `/src/features/home/config/parrot-model.config.ts`.

### Sistema de Coordenadas

El modelo 3D usa un sistema de coordenadas tridimensional:

- **X**: Izquierda (-) / Derecha (+)
- **Y**: Abajo (-) / Arriba (+)
- **Z**: Atrás (-) / Adelante (+)

### Estructura de una anotación

```typescript
{
  point: new THREE.Vector3(X, Y, Z),  // Punto en el modelo (donde inicia la línea)
  end: new THREE.Vector3(X, Y, Z),    // Punto final de la línea (en el aire)
  label: 'Descripción',
  position: 'right', // o 'left'
}
```

## 🔧 Proceso de Ajuste

### 1. Ejecuta la aplicación

```bash
bun run dev
```

### 2. Abre el navegador en modo desarrollo

- Chrome: F12 → Console
- Habilita la consola de Three.js

### 3. Encuentra las coordenadas correctas

**Método 1: Usar el navegador de Three.js**

- Instala la extensión "Three.js Inspector" para Chrome
- Inspecciona el modelo y encuentra las posiciones de los vértices

**Método 2: Trial and error**

1. Ajusta los valores en `parrot-model.config.ts`
2. Guarda el archivo (hot reload automático)
3. Observa los cambios en tiempo real
4. Repite hasta encontrar la posición correcta

### 4. Ejemplos de ajustes comunes

**Mover una línea hacia la derecha:**

```typescript
// Antes
point: new THREE.Vector3(0, 0.8, 0.1);
// Después
point: new THREE.Vector3(0.2, 0.8, 0.1); // +0.2 en X
```

**Mover una línea hacia arriba:**

```typescript
// Antes
point: new THREE.Vector3(0, 0.8, 0.1);
// Después
point: new THREE.Vector3(0, 1.0, 0.1); // +0.2 en Y
```

**Mover una línea hacia adelante:**

```typescript
// Antes
point: new THREE.Vector3(0, 0.8, 0.1);
// Después
point: new THREE.Vector3(0, 0.8, 0.3); // +0.2 en Z
```

## 📊 Valores Recomendados

### Para un loro típico (ajusta según tu modelo):

```typescript
// Cabeza/Ojo
point: new THREE.Vector3(0.15, 0.7, 0.2);

// Pico
point: new THREE.Vector3(0.25, 0.6, 0.35);

// Cuello/Garganta
point: new THREE.Vector3(0, 0.4, 0.15);

// Pecho
point: new THREE.Vector3(0, 0.1, 0.2);

// Espalda/Dorso
point: new THREE.Vector3(-0.1, 0.3, -0.1);

// Cola
point: new THREE.Vector3(0, -0.3, -0.2);

// Ala
point: new THREE.Vector3(0.3, 0.2, 0);
```

## 🎨 Personalización de Colores

En `parrot-model.config.ts`, puedes cambiar:

```typescript
export const LINE_CONFIG = {
  color: '#60A5FA', // Color de la línea
  endPointColor: '#FBBF24', // Color del punto final
  width: 2, // Grosor de línea
  opacity: 0.8, // Opacidad
  pointSize: 0.03, // Tamaño del punto inicial
  endPointSize: 0.02, // Tamaño del punto final
  pulseSpeed: 2, // Velocidad de pulsación
  pulseAmount: 0.1 // Intensidad de pulsación
};
```

## 🔍 Debugging

Si las líneas no aparecen:

1. Verifica que el modelo se cargó correctamente
2. Revisa la consola del navegador para errores
3. Asegúrate de que los valores no estén muy alejados del modelo
4. Intenta con valores pequeños primero (entre -1 y 1)

## 📝 Tips

- **Comienza con valores pequeños**: Es más fácil ajustar desde valores cercanos
- **Usa incrementos de 0.1**: Para ajustes finos
- **Rota el modelo**: Para ver las líneas desde diferentes ángulos
- **Guarda configuraciones**: Comenta las configuraciones que funcionan para no perderlas

## 🚀 Configuración Avanzada

### Cambiar el comportamiento de rotación

En `parrot-model.config.ts`:

```typescript
export const MODEL_CONFIG = {
  autoRotate: true, // Rotación automática
  autoRotateSpeed: 0.3 // Velocidad (más bajo = más lento)
};
```

### Cambiar la posición de la cámara

```typescript
export const CAMERA_CONFIG = {
  position: [3, 1, 3], // [X, Y, Z] - distancia del modelo
  fov: 50 // Campo de visión (más alto = más zoom out)
};
```

### Ajustar iluminación

```typescript
export const LIGHTING_CONFIG = {
  ambient: {
    intensity: 0.5 // Luz general (0-1)
  },
  directional: {
    position: [5, 5, 5], // Posición de luz direccional
    intensity: 1 // Intensidad
  },
  point: {
    position: [-5, 5, -5], // Luz puntual
    intensity: 0.5
  }
};
```

## 🎬 Resultado Final

Cuando termines de ajustar:

1. Las líneas deben apuntar correctamente a las partes del loro
2. Las líneas deben seguir al modelo cuando lo rotas
3. Los textos deben estar alineados correctamente
4. Todo debe verse bien tanto en desktop como en móvil
