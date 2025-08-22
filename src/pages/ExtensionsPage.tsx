import React from "react";
import { useTranslation } from "react-i18next";

const ExtensionsPage = () => {
  const { t } = useTranslation("extensions");
  
  // Extensions'lara ait bilgiler
  const extensions = [
    {
        id: "youtube-speed-control/ahdgibfoljhcbmklbfgmcdjkenedponk",
        name: "YouTube Speed Control",
        logo: "/apps/extensions/youtubespeedcontrol.png",
        description: "extensions.youtubespeedcontrol.description",
    },
    {
        id: "twitter-restriction/hhdlhabdmcnnngfkhkdpkhphfpcdpooo",
        name: "Twitter Restriction",
        logo: "/apps/extensions/twitterrestriction.png",
        description: "extensions.twitterrestriction.description",
      },
    {
      id: "site-blocker/ggkdfmmjcgppamcmlepgjmhemhjaclpc",
      name: "Site Blocker",
      logo: "/apps/extensions/siteblocker.png",
      description: "extensions.siteblocker.description",
    },
    {
      id: "youtube-video-bookmarker/ddkbeekkfgcfamfgokkadnjfffimbdmf",
      name: "YouTube Video Bookmarker",
      logo: "/apps/extensions/youtubebookmark.png",
      description: "extensions.youtubebookmark.description",
    },
    
  ];

  // VS Code eklentileri
  const vscodeExtensions = [
    {
      id: "recent-files-navigator",
      name: "Recent Files Navigator",
      logo: "/apps/extensions/lastrecent.png",
      description: "extensions.recentfilesnavigator.description",
      link: "https://marketplace.visualstudio.com/items?itemName=hck-apps.recent-files-navigator&ssr=false#overview",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00df9a] text-center mb-12">
          {t("extensions.title")}
        </h1>
        <p className="text-white text-center text-lg mb-12 max-w-3xl mx-auto">
          {t("extensions.subtitle")}
        </p>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {extensions.map((extension) => (
            <div
              key={extension.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#00df9a] transition-all duration-300"
            >
              {/* Küçük ekranlar için dikey düzen */}
              <div className="md:hidden">
                <div className="flex items-center mb-4">
                  <img
                    src={extension.logo}
                    alt={extension.name}
                    className="w-16 h-16 mr-4 rounded object-contain bg-white p-1"
                  />
                  <h2 className="text-2xl font-bold text-white">{extension.name}</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  {t(extension.description)}
                </p>
                <div>
                  <a
                    href={`https://chrome.google.com/webstore/detail/${extension.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00df9a] hover:bg-[#00c87b] text-black font-bold py-2 px-4 rounded-md transition-colors duration-200 text-center w-full"
                  >
                    {t("extensions.get_extension")}
                  </a>
                </div>
              </div>

              {/* Büyük ekranlar için yatay düzen */}
              <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:items-center">
                <div className="md:col-span-1">
                  <img
                    src={extension.logo}
                    alt={extension.name}
                    className="w-16 h-16 rounded object-contain bg-white p-1"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white md:col-span-3">
                  {extension.name}
                </h2>
                <p className="text-gray-300 md:col-span-6">
                  {t(extension.description)}
                </p>
                <div className="md:col-span-2">
                  <a
                    href={`https://chrome.google.com/webstore/detail/${extension.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00df9a] hover:bg-[#00c87b] text-black font-bold py-2 px-4 rounded-md transition-colors duration-200 text-center w-full"
                  >
                    {t("extensions.get_extension")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VS Code Extensions Section */}
        <h2 id="vscode" className="text-3xl font-bold text-[#00df9a] text-center mt-20 mb-6">
          {t("extensions.vscode_title")}
        </h2>
        <p className="text-white text-center text-lg mb-10 max-w-3xl mx-auto">
          {t("extensions.vscode_subtitle")}
        </p>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {vscodeExtensions.map((extension) => (
            <div
              key={extension.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#00df9a] transition-all duration-300"
            >
              <div className="md:hidden">
                <div className="flex items-center mb-4">
                  <img
                    src={extension.logo}
                    alt={extension.name}
                    className="w-16 h-16 mr-4 rounded object-contain bg-white p-1"
                  />
                  <h3 className="text-2xl font-bold text-white">{extension.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t(extension.description)}
                </p>
                {extension.link && (
                  <div>
                    <a
                      href={extension.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#00df9a] hover:bg-[#00c87b] text-black font-bold py-2 px-4 rounded-md transition-colors duration-200 text-center w-full"
                    >
                      {t("extensions.view_on_marketplace")}
                    </a>
                  </div>
                )}
              </div>

              <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:items-center">
                <div className="md:col-span-1">
                  <img
                    src={extension.logo}
                    alt={extension.name}
                    className="w-16 h-16 rounded object-contain bg-white p-1"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white md:col-span-3">
                  {extension.name}
                </h3>
                <p className="text-gray-300 md:col-span-6">
                  {t(extension.description)}
                </p>
                <div className="md:col-span-2">
                  {extension.link && (
                    <a
                      href={extension.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#00df9a] hover:bg-[#00c87b] text-black font-bold py-2 px-4 rounded-md transition-colors duration-200 text-center w-full"
                    >
                      {t("extensions.view_on_marketplace")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtensionsPage; 