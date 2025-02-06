import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          {t('home.tagline')}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          {t('home.heading')}
        </h1>
        <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
          {t('home.subheading')}
        </p>
        {/* Typed animation now below */}
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          strings={t('home.typedStrings', { returnObjects: true })}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-8">
          {t('home.description')}
        </p>

        {/* Horizontal icon buttons with additional margin and line */}
        <div className="flex justify-center mt-12 space-x-12">
          <div className="text-center">
            <p className="font-bold mb-4">{t('home.discoverApps')}</p>
            {/* Update path to assets to match your project directory */}
            <hr className="border-t-2 border-white mb-8 w-full mx-auto" />
            <div className="flex justify-center space-x-4">
              <Link to="/apps" className="flex flex-col items-center">
                <img
                  src="/apps/voidnote/voidnote.png"
                  alt="App 1"
                  className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2"
                />
                <p className="text-white mt-2 font-bold">{t('home.voidNote')}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
