/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface ServicePackage {
  title: string;
  price: string;
  originalPrice?: string; // اضافه شد برای قیمت قبل از تخفیف
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

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  CONTACT = 'contact',
}
