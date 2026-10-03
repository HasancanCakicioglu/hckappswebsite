import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("home");

  // Track 1: Mobile Games & Apps
  const mobileApps = [
    {
      to: "/apps/voidnote",
      name: "VoidNote",
      logo: "/apps/voidnote/voidnote.png",
      category: "Notepad & Productivity",
    },
    {
      to: "/apps/weechess",
      name: "WeeChess",
      logo: "/apps/weechess/logo.png",
      category: "Strategy Chess",
    },
    {
      to: "/apps/minesweeper",
      name: "Minesweeper",
      logo: "/apps/minesweeper/logo.webp",
      category: "Classic Puzzle",
    },
    {
      to: "/apps/graviton",
      name: "Graviton",
      logo: "/apps/graviton/logo.png",
      category: "Arcade Physics",
    },
    {
      to: "/apps/copdodger",
      name: "Cop Dodger",
      logo: "/apps/copdodger/logo.png",
      category: "Action Survival",
    },
    {
      to: "/apps/boringgames",
      name: "Boring Games",
      logo: "/apps/boringgames/logo.webp",
      category: "Offline Mini Games",
    },
    {
      to: "/apps/101",
      name: "101 Calculator",
      logo: "/apps/101/logo.webp",
      category: "Utility Tool",
    },
    {
      to: "/apps/cryptobex",
      name: "Cryptobex",
      logo: "/apps/cryptobex/cryptobex_logo.png",
      category: "Finance & Market",
    },
    {
      to: "/apps/phototranslator",
      name: "Photo Translator",
      logo: "/apps/phototranslator/translationicon_512x512.png",
      category: "OCR & Translation",
    },
    {
      to: "/apps/stopwatch",
      name: "Stopwatch",
      logo: "/apps/stopwatch/stopwatch_logo.png",
      category: "Chronometer",
    },
    {
      to: "/apps/taptapup",
      name: "TapTapUp",
      logo: "/apps/taptapup/taptapup_logo.png",
      category: "Casual Jumper",
    },
  ];

  // Track 2: Web Platforms & Browser / IDE Extensions
  const webAndExtensions = [
    {
      href: "https://cvshell.com",
      name: "CV Shell",
      logo: "/apps/cvshell/logo.svg",
      category: "AI Resume Builder",
      isExternal: true,
    },
    {
      href: "https://clickflag.hckapps.com",
      name: "ClickFlag",
      logo: "/apps/clickflag/clickflaglogo.ico",
      category: "Geography Quiz Web",
      isExternal: true,
    },
    {
      href: "https://tooldone.com",
      name: "ToolDone",
      logo: "/apps/tooldone/icon0.svg",
      category: "Online Utilities",
      isExternal: true,
    },
    {
      href: "https://marketplace.visualstudio.com/items?itemName=hck-apps.recent-files-navigator&ssr=false#overview",
      name: "Recent Files Navigator",
      logo: "/apps/extensions/lastrecent.png",
      category: "VS Code Extension",
      isExternal: true,
    },
    {
      href: "https://chrome.google.com/webstore/detail/youtube-speed-control/ahdgibfoljhcbmklbfgmcdjkenedponk",
      name: "YouTube Speed Control",
      logo: "/apps/extensions/youtubespeedcontrol.png",
      category: "Chrome Extension",
      isExternal: true,
    },
    {
      href: "https://chrome.google.com/webstore/detail/twitter-restriction/hhdlhabdmcnnngfkhkdpkhphfpcdpooo",
      name: "Twitter Restriction",
      logo: "/apps/extensions/twitterrestriction.png",
      category: "Chrome Extension",
      isExternal: true,
    },
    {
      href: "https://chrome.google.com/webstore/detail/site-blocker/ggkdfmmjcgppamcmlepgjmhemhjaclpc",
      name: "Site Blocker",
      logo: "/apps/extensions/siteblocker.png",
      category: "Chrome Extension",
      isExternal: true,
    },
    {
      href: "https://chrome.google.com/webstore/detail/youtube-video-bookmarker/ddkbeekkfgcfamfgokkadnjfffimbdmf",
      name: "YouTube Video Bookmarker",
      logo: "/apps/extensions/youtubebookmark.png",
      category: "Chrome Extension",
      isExternal: true,
    },
  ];

  const renderCard = (item, idx) => {
    const cardContent = (
      <div className="flex items-center space-x-3 px-3.5 py-2 bg-[#0c1018]/90 hover:bg-[#141b27] border border-gray-800/90 hover:border-[#00df9a]/60 rounded-2xl transition-all duration-200 group/card shadow-md hover:shadow-[#00df9a]/10 hover:shadow-lg flex-shrink-0 cursor-pointer">
        <div className="w-10 h-10 rounded-xl bg-black/80 p-1 border border-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover/card:scale-105 transition-transform duration-200">
          <img
            src={item.logo}
            alt={item.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-left pr-2">
          <p className="text-xs sm:text-sm font-semibold text-white group-hover/card:text-[#00df9a] transition-colors whitespace-nowrap">
            {item.name}
          </p>
          <span className="text-[10px] font-mono text-gray-400 block whitespace-nowrap">
            {item.category}
          </span>
        </div>
      </div>
    );

    if (item.isExternal) {
      return (
        <a
          key={`${item.name}-${idx}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 block"
        >
          {cardContent}
        </a>
      );
    }

    return (
      <Link key={`${item.name}-${idx}`} to={item.to} className="mx-2 block">
        {cardContent}
      </Link>
    );
  };

  return (
    <div className="text-white">
      <div className="max-w-[1100px] w-full min-h-[calc(100vh-96px)] mx-auto text-center flex flex-col justify-center px-4 sm:px-8 py-8">
        <p className="text-[#00df9a] font-bold py-2 tracking-wide uppercase text-xs sm:text-sm">
          {t('home.tagline', 'GROWING WITH DATA ANALYTICS')}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 tracking-tight">
          {t('home.heading', 'Grow with data.')}
        </h1>
        <p className="md:text-4xl sm:text-3xl text-xl font-bold py-3 text-gray-300">
          {t('home.subheading', 'Fast, flexible financing for')}
        </p>
        {/* Typed.js animasyonu */}
        <div className="h-14 md:h-16 flex items-center justify-center">
          <Typed
            className="md:text-5xl sm:text-4xl text-2xl font-extrabold text-[#00df9a]"
            strings={t('home.typedStrings', {
              returnObjects: true,
              defaultValue: ['Personal Projects', 'Business Solutions', 'Entertainment']
            })}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-xl text-base font-normal text-gray-400 mt-3 md:mt-5 max-w-2xl mx-auto leading-relaxed">
          {t('home.description', 'Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.')}
        </p>

        {/* Marquee Vitrini */}
        <div className="w-full mt-10 md:mt-12">
          {/* Header row */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00df9a] animate-pulse" />
              <p className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                {t('home.discoverApps', 'Our App Ecosystem')}
              </p>
            </div>
            <span className="text-[11px] text-gray-400 font-mono">
              20+ Products • {t('home.hoverToPause', 'Hover to pause')}
            </span>
          </div>

          {/* Kayan Şerit Konteyneri (İki Yönlü) */}
          <div className="relative w-full overflow-hidden py-2 space-y-3.5">
            {/* Kenar Yumuşatma Gradyanları */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

            {/* Şerit 1: Mobil Uygulamalar & Oyunlar (Sola Kayan) */}
            <div className="animate-marquee">
              {[...mobileApps, ...mobileApps].map((item, idx) => renderCard(item, idx))}
            </div>

            {/* Şerit 2: Web & Eklentiler (Sağa Kayan) */}
            <div className="animate-marquee-reverse">
              {[...webAndExtensions, ...webAndExtensions].map((item, idx) => renderCard(item, idx))}
            </div>
          </div>

          {/* Alt Kategori Hızlı Erişim Butonları */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mt-6 text-xs">
            <Link
              to="/apps"
              className="px-4 py-2 rounded-xl bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-[#00df9a] hover:border-[#00df9a]/40 hover:bg-[#00df9a]/10 transition-all duration-200 flex items-center space-x-1.5"
            >
              <span>📱</span>
              <span>{t('home.viewMobileApps', 'Mobile Apps & Games')}</span>
              <span className="text-gray-500 font-mono">→</span>
            </Link>
            <Link
              to="/extensions"
              className="px-4 py-2 rounded-xl bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-[#00df9a] hover:border-[#00df9a]/40 hover:bg-[#00df9a]/10 transition-all duration-200 flex items-center space-x-1.5"
            >
              <span>🧩</span>
              <span>{t('home.viewExtensions', 'Extensions')}</span>
              <span className="text-gray-500 font-mono">→</span>
            </Link>
            <Link
              to="/websites"
              className="px-4 py-2 rounded-xl bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-[#00df9a] hover:border-[#00df9a]/40 hover:bg-[#00df9a]/10 transition-all duration-200 flex items-center space-x-1.5"
            >
              <span>🌐</span>
              <span>{t('home.viewWebsites', 'Web Platforms')}</span>
              <span className="text-gray-500 font-mono">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
