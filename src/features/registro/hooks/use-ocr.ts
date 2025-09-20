'use client';

import { useState, useCallback } from 'react';
import { createWorker } from 'tesseract.js';
import { OCRResult, ProcessingState, FormData } from '../types';

export const useOCR = () => {
  const [processingState, setProcessingState] = useState<ProcessingState>({
    isProcessing: false,
    progress: 0,
    stage: 'idle'
  });

  const [result, setResult] = useState<OCRResult | null>(null);

  const processImage = useCallback(
    async (imageFile: File): Promise<OCRResult> => {
      setProcessingState({
        isProcessing: true,
        progress: 0,
        stage: 'uploading'
      });

      try {
        const worker = await createWorker('eng+spa');

        setProcessingState((prev) => ({
          ...prev,
          progress: 20,
          stage: 'scanning'
        }));

        const { data } = await worker.recognize(imageFile);

        await worker.terminate();

        // Extraer datos del formulario usando regex simple
        const extractedData = extractFormData(data.text);

        const ocrResult: OCRResult = {
          text: data.text,
          confidence: data.confidence,
          extractedData
        };

        setProcessingState({
          isProcessing: false,
          progress: 100,
          stage: 'complete'
        });
        setResult(ocrResult);

        // Log para desarrollo - remover en producción
        if (
          typeof window !== 'undefined' &&
          process.env.NODE_ENV === 'development'
        ) {
          // eslint-disable-next-line no-console
          console.log('OCR Result:', ocrResult);
          // eslint-disable-next-line no-console
          console.log('Extracted Data:', extractedData);
        }

        return ocrResult;
      } catch (error) {
        if (
          typeof window !== 'undefined' &&
          process.env.NODE_ENV === 'development'
        ) {
          // eslint-disable-next-line no-console
          console.error('OCR Error:', error);
        }
        setProcessingState({
          isProcessing: false,
          progress: 0,
          stage: 'error',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        throw error;
      }
    },
    []
  );

  const resetState = useCallback(() => {
    setProcessingState({ isProcessing: false, progress: 0, stage: 'idle' });
    setResult(null);
  }, []);

  return {
    processingState,
    result,
    processImage,
    resetState
  };
};

// Función helper para extraer datos del formulario
function extractFormData(text: string): Partial<FormData> {
  const extractedData: Partial<FormData> = {};

  // Regex patterns para extraer datos comunes
  const patterns = {
    email: /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i,
    date: /(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{1,2}-\d{1,2})/,
    age: /(?:age|edad|años?):\s*(\d{1,3})|(\d{1,3})\s*(?:years|años?)/i,
    name: /(?:name|nombre):\s*([a-zA-Z\s]+)/i,
    nationality: /(?:nationality|nacionalidad):\s*([a-zA-Z\s]+)/i
  };

  // Extraer email
  const emailMatch = text.match(patterns.email);
  if (emailMatch) {
    extractedData.email = emailMatch[1];
  }

  // Extraer fecha
  const dateMatch = text.match(patterns.date);
  if (dateMatch) {
    extractedData.date = dateMatch[1];
  }

  // Extraer edad
  const ageMatch = text.match(patterns.age);
  if (ageMatch) {
    extractedData.age = ageMatch[1] || ageMatch[2];
  }

  // Extraer nombre
  const nameMatch = text.match(patterns.name);
  if (nameMatch) {
    extractedData.name = nameMatch[1].trim();
  }

  // Extraer nacionalidad
  const nationalityMatch = text.match(patterns.nationality);
  if (nationalityMatch) {
    extractedData.nationality = nationalityMatch[1].trim();
  }

  return extractedData;
}
