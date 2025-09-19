export interface FormData {
  name: string;
  email: string;
  nationality: string;
  age: string;
  date: string;
}

export interface OCRResult {
  text: string;
  confidence: number;
  extractedData?: Partial<FormData>;
}

export interface ProcessingState {
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
