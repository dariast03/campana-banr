export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export interface ReportItem {
  id: number;
  title: string;
  author: string;
  date: string;
  pages: string;
  format: string;
  description: string;
  thumbnail: string;
}
