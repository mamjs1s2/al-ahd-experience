export interface Project {
  slug: string;
  title: string;
  titleAr?: string;
  location: string;
  locationAr?: string;
  category: string;
  categoryAr?: string;
  scope: string[];
  scopeAr?: string[];
  year?: string;
  metrics?: Array<{
    label: string;
    labelAr?: string;
    value: string;
  }>;
  images: string[];
  description?: string;
  descriptionAr?: string;
  status?: 'completed' | 'ongoing';
}

export interface Service {
  id: number;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  category: string;
  icon?: string;
}

export interface Client {
  name: string;
  logo?: string;
  url?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface CursorState {
  x: number;
  y: number;
  isVisible: boolean;
  label?: string;
}