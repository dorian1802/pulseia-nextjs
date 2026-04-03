export type Lang = 'fr' | 'en' | 'es' | 'nl';

export const langs = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
] as const;

export const isValidLang = (lang: string): lang is Lang =>
  langs.some(l => l.code === lang);

import fr from './translations/fr.json';
import en from './translations/en.json';
import es from './translations/es.json';
import nl from './translations/nl.json';

const dict = { fr, en, es, nl };

export const getTranslations = (lang: Lang) => dict[lang];
