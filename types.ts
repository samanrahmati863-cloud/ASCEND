/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Project {
  id: string;
  title: string;
  category: string;
  video: string; // تغییر از image به video
  description: string;
  galleryImages: string[];
}

export interface ServicePackage {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  bonus?: string;
  whatsappMessage?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  day: string;
  image: string;
}

export enum Section {
  HERO = 'hero',
  WORK = 'work',\
  SERVICES = 'services',
  CONTACT = 'contact',
}
