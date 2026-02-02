export interface Message {
  role: 'user' | 'model';
  parts: { text?: string; inlineData?: { mimeType: string; data: string } }[];
  timestamp: number;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  image: string;
}

export type PageType = 'home' | 'about' | 'services' | 'service-detail' | 'privacy' | 'terms';
