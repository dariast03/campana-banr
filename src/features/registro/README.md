# Registro Module

Este módulo contiene toda la funcionalidad relacionada con el registro de formularios con OCR (Reconocimiento Óptico de Caracteres) usando Tesseract.js.

## Estructura

```
src/features/registro/
├── components/              # Componentes específicos de registro
│   ├── form-scanner.tsx           # Escáner de formularios con OCR
│   ├── confirmation-form.tsx      # Formulario de confirmación de datos
│   └── index.ts                  # Exportaciones de componentes
├── hooks/                   # Hooks personalizados
│   └── use-ocr.ts                # Hook para manejo de OCR con Tesseract.js
├── types/                   # Definiciones de tipos TypeScript
│   └── index.ts                  # Interfaces para FormData, OCRResult, etc.
└── index.ts                 # Exportaciones principales del módulo
```

## Funcionalidades

### 🔍 OCR (Optical Character Recognition)

- **Tesseract.js**: Reconocimiento de texto en imágenes
- **Extracción automática**: Email, nombres, fechas, edad, nacionalidad
- **Soporte multiidioma**: Español e inglés
- **Feedback visual**: Barra de progreso y estados

### 📁 Carga de Archivos

- **Drag & Drop**: Arrastra y suelta imágenes
- **Selector de archivos**: Click para abrir explorador
- **Cámara**: Botón para tomar fotos (futuro)
- **Validación**: Solo acepta archivos de imagen

### ✅ Confirmación de Datos

- **Pre-llenado**: Formulario con datos extraídos automáticamente
- **Validación**: Campos requeridos y formatos
- **Edición manual**: Usuario puede corregir datos
- **Indicadores visuales**: Marca qué campos fueron detectados

## Componentes

### FormScanner

Componente principal para la carga y procesamiento de imágenes con OCR.

**Props:**

- `onDataExtracted`: Callback cuando se extraen datos
- `className`: Clases CSS adicionales

**Características:**

- Drag & drop area con feedback visual
- Barra de progreso durante procesamiento
- Manejo de errores con reintentos
- Soporte para múltiples formatos de imagen

### ConfirmationForm

Formulario para confirmar y editar los datos extraídos.

**Props:**

- `initialData`: Datos extraídos del OCR
- `onSubmit`: Callback al enviar el formulario
- `onReset`: Callback para reiniciar el proceso
- `className`: Clases CSS adicionales

**Características:**

- Pre-llenado con datos del OCR
- Indicadores visuales de campos detectados
- Validación de formularios
- Pantalla de éxito tras envío

## Hook: useOCR

Hook personalizado que encapsula toda la lógica de OCR con Tesseract.js.

### Estados

```typescript
interface ProcessingState {
  isProcessing: boolean;
  progress: number;
  stage:
    | 'uploading'
    | 'scanning'
    | 'extracting'
    | 'complete'
    | 'error'
    | 'idle';
  error?: string;
}
```

### Métodos

- `processImage(file: File)`: Procesa una imagen y extrae texto
- `resetState()`: Reinicia el estado del procesamiento

### Extracción de Datos

El hook incluye lógica para extraer automáticamente:

- **Email**: Patrón regex para direcciones de correo
- **Fechas**: Formatos DD/MM/YYYY y YYYY-MM-DD
- **Edad**: Números asociados con "age" o "edad"
- **Nombres**: Texto después de "name" o "nombre"
- **Nacionalidad**: Texto después de "nationality" o "nacionalidad"

## Tipos

### FormData

```typescript
interface FormData {
  name: string;
  email: string;
  nationality: string;
  age: string;
  date: string;
}
```

### OCRResult

```typescript
interface OCRResult {
  text: string;
  confidence: number;
  extractedData?: Partial<FormData>;
}
```

## Uso

```tsx
import { FormScanner, ConfirmationForm } from '@/features/registro';

export default function Page() {
  const [data, setData] = useState(null);

  return (
    <div>
      <FormScanner onDataExtracted={setData} />
      {data && (
        <ConfirmationForm
          initialData={data}
          onSubmit={handleSubmit}
          onReset={() => setData(null)}
        />
      )}
    </div>
  );
}
```

## Dependencias

- **tesseract.js**: OCR y reconocimiento de texto
- **@radix-ui/react-progress**: Barra de progreso
- **lucide-react**: Iconos
- **next-intl**: Internacionalización

## Configuración

### Idiomas OCR

El OCR está configurado para reconocer texto en español e inglés:

```typescript
const worker = await createWorker('eng+spa');
```

### Formatos Soportados

- JPG/JPEG
- PNG
- WebP
- BMP
- TIFF

## Estados de Procesamiento

1. **idle**: Estado inicial
2. **uploading**: Cargando imagen
3. **scanning**: Escaneando texto con OCR
4. **extracting**: Extrayendo y parseando datos
5. **complete**: Procesamiento exitoso
6. **error**: Error en el procesamiento

## Logging

En desarrollo, los resultados del OCR se muestran en la consola:

- Texto completo extraído
- Datos parseados por campo
- Errores de procesamiento

El logging se desactiva automáticamente en producción.
