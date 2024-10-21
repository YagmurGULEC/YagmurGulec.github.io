import en from '../locales/en/common.json';
import fr from '../locales/fr/common.json';


export const getTranslations = (locale) => {
  switch (locale) {
    case 'fr':
      return fr;
  
    default:
      return en; // default to English
  }
};