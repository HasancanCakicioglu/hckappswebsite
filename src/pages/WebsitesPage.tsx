import React from "react";
import { useTranslation } from "react-i18next";

const WebsitesPage = () => {
  const { t } = useTranslation("websites");

  const websites = [
    {
      id: "hckapps",
      name: "HCK Apps",
      url: "https://hckapps.com",
      description: "examples.hckapps",
      logo: "/favicon.ico",
    },
    {
      id: "tooldone",
      name: "ToolDone",
      url: "https://tooldone.com",
      description: "examples.tooldone",
      logo: "/apps/tooldone/icon0.svg",
    },
    {
      id: "clickflag",
      name: "ClickFlag",
      url: "https://clickflag.com",
      description: "examples.clickflag",
      logo: "/apps/clickflag/clickflaglogo.ico",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00df9a] text-center mb-4">
          {t("title")}
        </h1>
        <p className="text-gray-200 text-center text-lg mb-12 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {websites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-lg p-6 hover:border-[#00df9a] transition-all duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.0)] hover:shadow-[0_10px_40px_-10px_rgba(0,223,154,0.35)] block"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 rounded-lg bg-white flex items-center justify-center ring-1 ring-gray-200">
                  <img src={site.logo} alt={site.name} className="w-10 h-10 object-contain" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-white text-2xl font-semibold tracking-tight group-hover:text-[#00df9a] transition-colors">
                    {site.name}
                  </h2>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    {t(site.description)}
                  </p>
                  <span className="text-[#00df9a] break-all inline-block mt-2">
                    {site.url}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-black bg-[#00df9a] group-hover:bg-[#00c87b] font-semibold py-2 px-4 rounded-md transition-colors">
                  {t("visit")}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="pointer-events-none absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-16 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#00df9a33] via-transparent to-transparent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsitesPage;


