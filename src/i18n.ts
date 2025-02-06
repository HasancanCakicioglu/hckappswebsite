import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Çevirileri HTTP üzerinden dinamik olarak yüklemek için
  .use(LanguageDetector) // Kullanıcının dilini otomatik algılamak için
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Kullanıcının dili bulunamazsa varsayılan dil
    fallbackNS: 'home', 
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Çevirilerin yükleme yolu
    },
    interpolation: {
      escapeValue: false, // React zaten XSS koruması sağlıyor
    },
  });

export default i18n;
