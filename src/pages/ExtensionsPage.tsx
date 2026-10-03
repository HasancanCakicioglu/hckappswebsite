import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChrome, FaCode } from "react-icons/fa";
import { FiExternalLink, FiLayers } from "react-icons/fi";

const ExtensionsPage = () => {
  const { t } = useTranslation("extensions");
  const [activeFilter, setActiveFilter] = useState<"all" | "chrome" | "vscode">("all");

  const extensions = [
    {
      id: "youtube-speed-control/ahdgibfoljhcbmklbfgmcdjkenedponk",
      name: "YouTube Speed Control",
      logo: "/apps/extensions/youtubespeedcontrol.png",
      description: "extensions.youtubespeedcontrol.description",
      platform: "chrome" as const,
      platformLabel: "Google Chrome",
      storeUrl: "https://chrome.google.com/webstore/detail/youtube-speed-control/ahdgibfoljhcbmklbfgmcdjkenedponk",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    },
    {
      id: "twitter-restriction/hhdlhabdmcnnngfkhkdpkhphfpcdpooo",
      name: "Twitter Restriction",
      logo: "/apps/extensions/twitterrestriction.png",
      description: "extensions.twitterrestriction.description",
      platform: "chrome" as const,
      platformLabel: "Google Chrome",
      storeUrl: "https://chrome.google.com/webstore/detail/twitter-restriction/hhdlhabdmcnnngfkhkdpkhphfpcdpooo",
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    },
    {
      id: "site-blocker/ggkdfmmjcgppamcmlepgjmhemhjaclpc",
      name: "Site Blocker",
      logo: "/apps/extensions/siteblocker.png",
      description: "extensions.siteblocker.description",
      platform: "chrome" as const,
      platformLabel: "Google Chrome",
      storeUrl: "https://chrome.google.com/webstore/detail/site-blocker/ggkdfmmjcgppamcmlepgjmhemhjaclpc",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      id: "youtube-video-bookmarker/ddkbeekkfgcfamfgokkadnjfffimbdmf",
      name: "YouTube Video Bookmarker",
      logo: "/apps/extensions/youtubebookmark.png",
      description: "extensions.youtubebookmark.description",
      platform: "chrome" as const,
      platformLabel: "Google Chrome",
      storeUrl: "https://chrome.google.com/webstore/detail/youtube-video-bookmarker/ddkbeekkfgcfamfgokkadnjfffimbdmf",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      id: "recent-files-navigator",
      name: "Recent Files Navigator",
      logo: "/apps/extensions/lastrecent.png",
      description: "extensions.recentfilesnavigator.description",
      platform: "vscode" as const,
      platformLabel: "VS Code Marketplace",
      storeUrl: "https://marketplace.visualstudio.com/items?itemName=hck-apps.recent-files-navigator&ssr=false#overview",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
  ];

  const filteredExtensions = extensions.filter((item) => {
    if (activeFilter === "all") return true;
    return item.platform === activeFilter;
  });

  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t("extensions.title")}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t("extensions.subtitle")}
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#00df9a] text-black font-semibold shadow-lg shadow-[#00df9a]/20"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              All ({extensions.length})
            </button>
            <button
              onClick={() => setActiveFilter("chrome")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                activeFilter === "chrome"
                  ? "bg-[#00df9a] text-black font-semibold shadow-lg shadow-[#00df9a]/20"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <FaChrome size={14} />
              <span>Chrome ({extensions.filter(e => e.platform === "chrome").length})</span>
            </button>
            <button
              onClick={() => setActiveFilter("vscode")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                activeFilter === "vscode"
                  ? "bg-[#00df9a] text-black font-semibold shadow-lg shadow-[#00df9a]/20"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <FaCode size={14} />
              <span>VS Code ({extensions.filter(e => e.platform === "vscode").length})</span>
            </button>
          </div>
        </div>

        {/* Extensions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredExtensions.map((extension) => (
            <div
              key={extension.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-gray-800/90 bg-[#0c1018]/80 hover:bg-[#111723] backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:border-[#00df9a]/60 hover:shadow-2xl hover:shadow-[#00df9a]/10 hover:-translate-y-1"
            >
              <div>
                {/* Header row: Logo, Platform & External link icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-black/80 border border-gray-800 flex items-center justify-center p-2 group-hover:border-[#00df9a]/40 group-hover:scale-105 transition-all duration-300 shadow-inner flex-shrink-0">
                      <img
                        src={extension.logo}
                        alt={extension.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-[#00df9a] transition-colors">
                        {extension.name}
                      </h2>
                      <div className="flex items-center space-x-1.5 mt-1">
                        {extension.platform === "chrome" ? (
                          <FaChrome size={12} className="text-red-400" />
                        ) : (
                          <FaCode size={12} className="text-blue-400" />
                        )}
                        <span className="text-xs font-mono text-gray-400">
                          {extension.platformLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[58px]">
                  {t(extension.description)}
                </p>
              </div>

              {/* Install / Store Link Button */}
              <div className="pt-4 border-t border-gray-800/80">
                <a
                  href={extension.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 hover:text-black hover:bg-[#00df9a] hover:border-[#00df9a] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md group-hover:shadow-[#00df9a]/20"
                >
                  {extension.platform === "chrome" ? (
                    <>
                      <FaChrome size={15} />
                      <span>{t("extensions.get_extension")}</span>
                    </>
                  ) : (
                    <>
                      <FaCode size={15} />
                      <span>{t("extensions.view_on_marketplace")}</span>
                    </>
                  )}
                  <FiExternalLink size={13} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtensionsPage;