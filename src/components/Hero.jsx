import React from "react";
import { Link } from "react-router-dom"; // Link import edildiğinden emin olun
import { ReactTyped as Typed } from "react-typed";
import { useTranslation } from "react-i18next";

const Hero = () => { // TypeScript için FC tipi eklendi (opsiyonel)
  const { t } = useTranslation("home"); // Çeviri hook'u

  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full min-h-[calc(100vh-96px)] mx-auto text-center flex flex-col justify-center px-4"> {/* Padding eklendi */}
        <p className="text-[#00df9a] font-bold py-2">
          {t('home.tagline', 'GROWING WITH DATA ANALYTICS')} {/* Fallback eklendi */}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
          {t('home.heading', 'Grow with data.')} {/* Fallback eklendi */}
        </h1>
        <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
          {t('home.subheading', 'Fast, flexible financing for')} {/* Fallback eklendi */}
        </p>
        {/* Typed.js animasyonu */}
        <div className="h-16 md:h-20"> {/* Typed için sabit yükseklik alanı */}
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={t('home.typedStrings', { returnObjects: true, defaultValue: ['BTB', 'BTC', 'SASS'] })} // Fallback dizi eklendi
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-4 md:mt-8"> {/* Üst margin ayarlandı */}
          {t('home.description', 'Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.')} {/* Fallback eklendi */}
        </p>

        {/* Uygulama ikonları bölümü */}
        <div className="flex justify-center mt-10 md:mt-12 mb-4"> {/* Üst margin ayarlandı */}
          <div className="text-center">
            <p className="font-bold mb-4">{t('home.discoverApps', 'Discover Our Apps')}</p> {/* Fallback eklendi */}
            <hr className="border-t-2 border-white mb-6 md:mb-8 w-3/4 md:w-full mx-auto" /> {/* Alt margin ve genişlik ayarlandı */}

            {/* İkonların bulunduğu div */}
            <div className="flex justify-center flex-wrap gap-y-4"> {/* flex-wrap ve gap-y eklendi */}

              {/* Link 1 - Hedef URL güncellendi */}
              <Link
                to="/apps/voidnote" // Hedef URL: /apps/:appId formatında
                className="flex flex-col items-center w-24 text-center mx-3 transition-transform duration-200 ease-in-out transform hover:scale-110"
              >
                <img
                  src="/apps/voidnote/voidnote.png"
                  alt={t('home.voidNoteAlt', 'VoidNote App Logo')} // Çevrilebilir alt metin
                  className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2 object-contain"
                />
                <p className="text-white mt-1 font-bold text-xs break-words">
                  {t('home.voidNote', 'VoidNote')} {/* Fallback eklendi */}
                </p>
              </Link>

              {/* Link 2 - Hedef URL güncellendi */}
              <Link
                to="/apps/cryptobex" // Hedef URL: /apps/:appId formatında
                className="flex flex-col items-center w-24 text-center mx-3 transition-transform duration-200 ease-in-out transform hover:scale-110"
              >
                <img
                  src="/apps/cryptobex/cryptobex_logo.png"
                  alt={t('home.cryptobexAlt', 'Cryptobex App Logo')} // Çevrilebilir alt metin
                  className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2 object-contain"
                />
                <p className="text-white mt-1 font-bold text-xs break-words">
                  {t('home.cryptobex', 'Cryptobex')} {/* Fallback eklendi */}
                </p>
              </Link>

              {/* Link 3 - Hedef URL güncellendi */}
              <Link
                to="/apps/phototranslator" // Hedef URL: /apps/:appId formatında
                className="flex flex-col items-center w-24 text-center mx-3 transition-transform duration-200 ease-in-out transform hover:scale-110"
              >
                <img
                  src="/apps/phototranslator/translationicon_512x512.png"
                  alt={t('home.photoTranslatorAlt', 'Photo Translator App Logo')} // Çevrilebilir alt metin
                  className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2 object-contain"
                />
                <p className="text-white mt-1 font-bold text-xs break-words">
                  {t('home.photoTranslator', 'Photo Translator')} {/* Fallback eklendi */}
                </p>
              </Link>

              {/* Buraya başka uygulama linkleri eklenebilir */}

            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Hero;
