import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaStackOverflow,
  FaGooglePlay,
} from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation("aboutme");
  const name = "Hasancan Çakıcıoğlu";

  const socialLinks = [
    {
      href: "https://linkedin.com/in/hasancan-çakıcıoğlu-a8560a255",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/HasancanCakicioglu",
      icon: FaGithubSquare,
      label: "GitHub",
    },
    {
      href: "https://medium.com/@hckecommerce",
      icon: FaMedium,
      label: "Medium",
    },
    {
      href: "https://stackoverflow.com/users/17810039/hasancan-%c3%87ak%c4%b1c%c4%b1o%c4%9flu?tab=profile",
      icon: FaStackOverflow,
      label: "Stack Overflow",
    },
    {
      href: "https://play.google.com/store/apps/developer?id=HCK+Apps",
      icon: FaGooglePlay,
      label: "Google Play",
    },
  ];

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-black text-white px-4 sm:px-6 lg:px-8 py-12 flex items-center">
      <div className="max-w-[1100px] mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Sol Bölüm - İsim, Biyografi & Yetenekler */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {name}
          </h1>

          {/* Paragraflar */}
          <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              <Trans
                t={t}
                i18nKey="aboutMe.paragraph1"
                ns="aboutme"
                components={[
                  <React.Fragment key="0" />,
                  <span key="1" className="font-semibold text-white" />,
                  <React.Fragment key="2" />,
                  <span key="3" className="font-semibold text-[#00df9a]" />,
                  <React.Fragment key="4" />,
                  <span key="5" className="font-semibold text-[#00df9a]" />,
                  <React.Fragment key="6" />,
                  <span key="7" className="font-semibold text-[#00df9a]" />,
                ]}
              />
            </p>
            <p className="text-gray-400">
              {t("aboutMe.paragraph2")}
            </p>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="pt-2 flex items-center space-x-2.5">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-[#0c1018] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#00df9a] hover:border-gray-700 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Sağ Bölüm - Profil Fotoğrafı */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="max-w-xs sm:max-w-sm w-full rounded-2xl border border-gray-800 bg-[#0c1018] p-2.5 shadow-xl">
            <img
              src="/p2.jpeg"
              alt="Hasancan Çakıcıoğlu"
              className="w-full h-80 sm:h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
