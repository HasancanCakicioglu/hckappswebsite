import React from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink, FiGlobe } from "react-icons/fi";

const WebsitesPage = () => {
  const { t } = useTranslation("websites");

  const websites = [
    {
      id: "cvshell",
      name: "CV Shell",
      url: "https://cvshell.com",
      displayUrl: "cvshell.com",
      description: "examples.cvshell",
      tag: "AI & Career",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      logo: "/apps/cvshell/logo.svg",
    },
    {
      id: "tooldone",
      name: "ToolDone",
      url: "https://tooldone.com",
      displayUrl: "tooldone.com",
      description: "examples.tooldone",
      tag: "Utilities & Tools",
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      logo: "/apps/tooldone/icon0.svg",
    },
    {
      id: "clickflag",
      name: "ClickFlag",
      url: "https://clickflag.hckapps.com",
      displayUrl: "clickflag.hckapps.com",
      description: "examples.clickflag",
      tag: "Interactive Quiz",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      logo: "/apps/clickflag/clickflaglogo.ico",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {websites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-3xl border border-gray-800/90 bg-[#0c1018]/80 hover:bg-[#111723] backdrop-blur-xl p-7 transition-all duration-300 hover:border-[#00df9a]/60 hover:shadow-2xl hover:shadow-[#00df9a]/10 hover:-translate-y-1.5"
            >
              <div>
                {/* Top: Logo & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-black/80 border border-gray-800 flex items-center justify-center p-2.5 group-hover:border-[#00df9a]/40 group-hover:scale-105 transition-all duration-300 shadow-inner">
                    <img
                      src={site.logo}
                      alt={site.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${site.tagColor}`}>
                    {site.tag}
                  </span>
                </div>

                {/* Name & Description */}
                <h2 className="text-2xl font-bold text-white group-hover:text-[#00df9a] transition-colors flex items-center space-x-2">
                  <span>{site.name}</span>
                  <FiExternalLink className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 -translate-y-0.5 transition-all text-xs text-[#00df9a]" />
                </h2>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed min-h-[72px]">
                  {t(site.description)}
                </p>
              </div>

              {/* Bottom: URL & Action Button */}
              <div className="pt-6 mt-6 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                  {site.displayUrl}
                </span>
                <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-black bg-[#00df9a] group-hover:bg-[#00c87b] py-2 px-3.5 rounded-xl transition-all duration-200 shadow-md group-hover:shadow-lg group-hover:shadow-[#00df9a]/20">
                  <span>{t("visit")}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsitesPage;
