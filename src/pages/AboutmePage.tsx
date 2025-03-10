import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaStackOverflow,
  FaGooglePlay,
} from "react-icons/fa";
import { Trans,useTranslation } from 'react-i18next';


function AboutMe() {
  const { t } = useTranslation('aboutme');
  const name = "Hasancan Çakıcıoğlu";

  return (
    <div className="w-full bg-black text-white px-8 py-16 flex justify-center items-center" style={{ minHeight: "calc(100vh - 96px)" }}>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Sol Bölüm */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-[#00df9a] mb-4">{t('aboutMe.aboutme')}</h1>
          <p className="text-lg mb-4">
            <Trans t={t}
                i18nKey="aboutMe.paragraph1"
              ns="aboutme"
              values={{ name }}
              components={[
                <></>, // Boş bir fragment, çünkü <0> etiketi yok
                <span className="font-bold text-[#00df9a]" />, // <1> etiketi için
                <></>, // <2> etiketi yok
                <span className="font-bold text-[#00df9a]" />, // <3> etiketi için
                <></>, // <4> etiketi yok
                <span className="font-bold text-[#00df9a]" />, // <5> etiketi için
                <></>, // <6> etiketi yok
                <span className="font-bold text-[#00df9a]" />  // <7> etiketi için
              ]}
            />
          </p>
          <p className="text-lg mb-6">
            <Trans
            t={t}
              i18nKey="aboutMe.paragraph2"
              components={[
                <></>, // Boş bir fragment, çünkü <0> etiketi yok
                <span className="font-bold text-[#00df9a]" /> // <1> etiketi için
              ]}
            />
          </p>
          {/* CV İndirme Butonu */}
          <div className="flex items-center">
            {/* Sosyal İkonlar */}
            <div className="flex ml-4 space-x-4">
              <a href="https://linkedin.com/in/hasancan-çakıcıoğlu-a8560a255" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="hover:text-[#00df9a]" />
              </a>
              <a href="https://github.com/HasancanCakicioglu" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={28} className="hover:text-[#00df9a]" />
              </a>
              <a href="https://medium.com/@hckecommerce" target="_blank" rel="noopener noreferrer">
                <FaMedium size={28} className="hover:text-[#00df9a]" />
              </a>
              <a href="https://stackoverflow.com/users/17810039/hasancan-%c3%87ak%c4%b1c%c4%b1o%c4%9flu?tab=profile" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow size={28} className="hover:text-[#00df9a]" />
              </a>
              <a href="https://play.google.com/store/apps/developer?id=HCK+Apps" target="_blank" rel="noopener noreferrer">
                <FaGooglePlay size={28} className="hover:text-[#00df9a]" />
              </a>
            </div>
          </div>
        </div>

        {/* Sağ Bölüm */}
        <div className="flex justify-center">
          <img src="/p2.jpeg" alt="About Me" className="rounded-full shadow-lg w-72 h-72 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
