import React, { useState, useEffect } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";

interface AppFeature {
  image: string;
  titleKey: string;
  descKey: string;
}

interface AppStore {
  type: string;
  url: string;
  buttonTextKey: string;
  bgColor: string;
  hoverBgColor: string;
}

interface App {
  id: string;
  name: string;
  logo: string;
  titleColor: string;
  descriptionKey: string;
  features: AppFeature[];
  stores: AppStore[];
}

// --- App Data ---
const appsData: App[] = [
  {
    id: "voidnote",
    name: "VoidNote",
    logo: "/apps/voidnote/voidnote.png",
    titleColor: "text-[#00df9a]",
    descriptionKey: "apps.section1",
    features: [
      { image: "/apps/voidnote/note_framed.png", titleKey: "apps.title1", descKey: "apps.desc1" },
      { image: "/apps/voidnote/tree_framed.png", titleKey: "apps.title2", descKey: "apps.desc2" },
      { image: "/apps/voidnote/analysis_framed.png", titleKey: "apps.title3", descKey: "apps.desc3" },
      { image: "/apps/voidnote/calendar_framed.png", titleKey: "apps.title4", descKey: "apps.desc4" },
      { image: "/apps/voidnote/todo_framed.png", titleKey: "apps.title5", descKey: "apps.desc5" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.voidnote&pcampaignid=web_share", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#00df9a]", hoverBgColor: "hover:bg-[#00c87b]" },
      { type: "apple", url: "https://apps.apple.com/tr/app/voidnote-notepad/id6742448208?l=tr&platform=iphone", buttonTextKey: "apps.downloadapple", bgColor: "bg-[#000000]", hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "cryptobex",
    name: "Cryptobex",
    logo: "/apps/cryptobex/cryptobex_logo.png",
    titleColor: "text-[#e6c741]",
    descriptionKey: "apps.csection1",
    features: [
      { image: "/apps/cryptobex/market_framed.png", titleKey: "apps.ctitle1", descKey: "apps.cdesc1" },
      { image: "/apps/cryptobex/leaderboard_framed.png", titleKey: "apps.ctitle2", descKey: "apps.cdesc2" },
      { image: "/apps/cryptobex/wallet_framed.png", titleKey: "apps.ctitle3", descKey: "apps.cdesc3" },
      { image: "/apps/cryptobex/open_positions_framed.png", titleKey: "apps.ctitle4", descKey: "apps.cdesc4" },
      { image: "/apps/cryptobex/open_orders_framed.png", titleKey: "apps.ctitle5", descKey: "apps.cdesc5" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.cryptobex&pcampaignid=web_share", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#00df9a]", hoverBgColor: "hover:bg-[#00c87b]" },
    ],
  },
  {
    id: "phototranslator",
    name: "Photo Translator",
    logo: "/apps/phototranslator/translationicon_512x512.png",
    titleColor: "text-[#4478D8]",
    descriptionKey: "apps.psection1",
    features: [
      { image: "/apps/phototranslator/home_framed.png", titleKey: "apps.ptitle1", descKey: "apps.pdesc1" },
      { image: "/apps/phototranslator/last-min.jpg", titleKey: "apps.ptitle2", descKey: "apps.pdesc2" },
      { image: "/apps/phototranslator/models_framed.png", titleKey: "apps.ptitle3", descKey: "apps.pdesc3" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.phototranslator", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#00df9a]", hoverBgColor: "hover:bg-[#00c87b]" },
    ],
  },
  {
    id: "stopwatch",
    name: "Stopwatch",
    logo: "/apps/stopwatch/stopwatch_logo.png",
    titleColor: "text-[#FF6F00]",
    descriptionKey: "apps.ssection1",
    features: [
      { image: "/apps/stopwatch/home_framed.png", titleKey: "apps.stitle1", descKey: "apps.sdesc1" },
      { image: "/apps/stopwatch/lap_framed.png", titleKey: "apps.stitle2", descKey: "apps.sdesc2" },
      { image: "/apps/stopwatch/settings_framed.png", titleKey: "apps.stitle3", descKey: "apps.sdesc3" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.stopwatch&pcampaignid=web_share", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#00df9a]", hoverBgColor: "hover:bg-[#00c87b]" },
      { type: "apple", url: "https://apps.apple.com/tr/app/stopwatch-skull-timer/id6744737324?platform=iphone", buttonTextKey: "apps.downloadapple", bgColor: "bg-[#000000]", hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "taptapup",
    name: "TapTapUp",
    logo: "/apps/taptapup/taptapup_logo.png",
    titleColor: "text-[#4A90E2]",
    descriptionKey: "apps.tsection1",
    features: [
      { image: "/apps/taptapup/blue_framed.png",  titleKey: "apps.ttitle1", descKey: "apps.tdesc1" },
      { image: "/apps/taptapup/green_framed.png", titleKey: "apps.ttitle2", descKey: "apps.tdesc2" },
      { image: "/apps/taptapup/red_framed.png",   titleKey: "apps.ttitle3", descKey: "apps.tdesc3" },
      { image: "/apps/taptapup/yellow_framed.png",titleKey: "apps.ttitle4", descKey: "apps.tdesc4" },
      { image: "/apps/taptapup/pink_framed.png",  titleKey: "apps.ttitle5", descKey: "apps.tdesc5" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.taptapup&pcampaignid=web_share", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#4A90E2]", hoverBgColor: "hover:bg-[#3B7DC1]" },
      { type: "apple",  url: "https://apps.apple.com/tr/app/taptapup-reflex-run/id6744987786?platform=iphone",   buttonTextKey: "apps.downloadapple",  bgColor: "bg-[#000000]",       hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "weechess",
    name: "WeeChess",
    logo: "/apps/weechess/logo.png",
    titleColor: "text-[#8B4513]",
    descriptionKey: "apps.wsection1",
    features: [
      { image: "/apps/weechess/1-c.png", titleKey: "apps.wtitle1", descKey: "apps.wdesc1" },
      { image: "/apps/weechess/2-c.png", titleKey: "apps.wtitle2", descKey: "apps.wdesc2" },
      { image: "/apps/weechess/3-c.png", titleKey: "apps.wtitle3", descKey: "apps.wdesc3" },
      { image: "/apps/weechess/4-c.png", titleKey: "apps.wtitle4", descKey: "apps.wdesc4" },
      { image: "/apps/weechess/5-c.png", titleKey: "apps.wtitle5", descKey: "apps.wdesc5" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.weechess&pcampaignid=web_share", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#8B4513]", hoverBgColor: "hover:bg-[#70380D]" },
      { type: "apple",  url: "https://apps.apple.com/tr/app/weechess-mini-chess-puzzles/id6757874776?platform=iphone",   buttonTextKey: "apps.downloadapple",  bgColor: "bg-[#000000]",       hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "minesweeper",
    name: "Minesweeper",
    logo: "/apps/minesweeper/logo.webp",
    titleColor: "text-[#4CAF50]",
    descriptionKey: "apps.msection1",
    features: [
      { image: "/apps/minesweeper/1.png", titleKey: "apps.mtitle1", descKey: "apps.mdesc1" },
      { image: "/apps/minesweeper/2.png", titleKey: "apps.mtitle2", descKey: "apps.mdesc2" },
      { image: "/apps/minesweeper/3.png", titleKey: "apps.mtitle3", descKey: "apps.mdesc3" },
      { image: "/apps/minesweeper/4.png", titleKey: "apps.mtitle4", descKey: "apps.mdesc4" },
      { image: "/apps/minesweeper/5.png", titleKey: "apps.mtitle5", descKey: "apps.mdesc5" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.minesweeper&pcampaignid=web_share", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#4CAF50]", hoverBgColor: "hover:bg-[#388E3C]" },
      { type: "apple",  url: "https://apps.apple.com/tr/app/minesweeper-minimal-3d/id6762569702",   buttonTextKey: "apps.downloadapple",  bgColor: "bg-[#000000]",       hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "graviton",
    name: "Graviton",
    logo: "/apps/graviton/logo.png",
    titleColor: "text-[#3B82F6]",
    descriptionKey: "apps.gsection1",
    features: [
      { image: "/apps/graviton/1.png", titleKey: "apps.gtitle1", descKey: "apps.gdesc1" },
      { image: "/apps/graviton/2.png", titleKey: "apps.gtitle2", descKey: "apps.gdesc2" },
      { image: "/apps/graviton/3.png", titleKey: "apps.gtitle3", descKey: "apps.gdesc3" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.gravity&hl=en", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#3B82F6]", hoverBgColor: "hover:bg-[#2563EB]" },
      { type: "apple",  url: "https://apps.apple.com/tr/app/graviton-space-orbit/id6771879290",   buttonTextKey: "apps.downloadapple",  bgColor: "bg-[#000000]",       hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "copdodger",
    name: "Cop Dodger",
    logo: "/apps/copdodger/logo.png",
    titleColor: "text-[#10B981]",
    descriptionKey: "apps.copsection1",
    features: [
      { image: "/apps/copdodger/1.webp", titleKey: "apps.coptitle1", descKey: "apps.copdesc1" },
      { image: "/apps/copdodger/2.webp", titleKey: "apps.coptitle2", descKey: "apps.copdesc2" },
      { image: "/apps/copdodger/3.webp", titleKey: "apps.coptitle3", descKey: "apps.copdesc3" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.car", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#10B981]", hoverBgColor: "hover:bg-[#059669]" },
      { type: "apple",  url: "https://apps.apple.com/tr/app/cop-dodger-run-away/id6776203816", buttonTextKey: "apps.downloadapple",  bgColor: "bg-[#000000]",       hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "boringgames",
    name: "Boring Offline Games",
    logo: "/apps/boringgames/logo.webp",
    titleColor: "text-[#8B5CF6]",
    descriptionKey: "apps.boringsection1",
    features: [
      { image: "/apps/boringgames/1.webp", titleKey: "apps.boringtitle1", descKey: "apps.boringdesc1" },
      { image: "/apps/boringgames/2.webp", titleKey: "apps.boringtitle2", descKey: "apps.boringdesc2" },
      { image: "/apps/boringgames/3.webp", titleKey: "apps.boringtitle3", descKey: "apps.boringdesc3" },
      { image: "/apps/boringgames/4.webp", titleKey: "apps.boringtitle4", descKey: "apps.boringdesc4" },
      { image: "/apps/boringgames/5.webp", titleKey: "apps.boringtitle5", descKey: "apps.boringdesc5" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.thousands", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#8B5CF6]", hoverBgColor: "hover:bg-[#7C3AED]" },
      { type: "apple",  url: "https://apps.apple.com/tr/app/boring-offline-games/id6780210908", buttonTextKey: "apps.downloadapple",  bgColor: "bg-[#000000]",       hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
  {
    id: "101",
    name: "101 Calculator",
    logo: "/apps/101/logo.webp",
    titleColor: "text-[#FF5722]",
    descriptionKey: "apps.calc101section1",
    features: [
      { image: "/apps/101/1.jpg", titleKey: "apps.calc101title1", descKey: "apps.calc101desc1" },
    ],
    stores: [
      { type: "google", url: "https://play.google.com/store/apps/details?id=com.hck.okey", buttonTextKey: "apps.downloadgoogle", bgColor: "bg-[#FF5722]", hoverBgColor: "hover:bg-[#E64A19]" },
      { type: "apple",  url: "https://apps.apple.com/app/id6794612091", buttonTextKey: "apps.downloadapple",  bgColor: "bg-[#000000]",       hoverBgColor: "hover:bg-[#333333]" },
    ],
  },
];




interface AppShowcaseProps {
  apps: App[];
  initialAppId: string | undefined;
}

// --- Yeniden Kullanılabilir Uygulama Vitrini Bileşeni ---
function AppShowcase({ apps, initialAppId }: AppShowcaseProps) {
  const { t } = useTranslation("apps");
  const navigate = useNavigate();

  // Seçili uygulama ID'sini state'te tutar.
  const [selectedAppId, setSelectedAppId] = useState(() => {
    const isValidAppId = initialAppId && apps.some(app => app.id === initialAppId);
    return isValidAppId ? initialAppId : (apps[0]?.id || null);
  });

  // Seçili uygulama verisini bulur.
  const selectedApp = apps.find((app) => app.id === selectedAppId);

  // URL'deki ID değiştiğinde veya başlangıçta state'i günceller.
  useEffect(() => {
    const isValidAppId = initialAppId && apps.some(app => app.id === initialAppId);
    if (isValidAppId && initialAppId !== selectedAppId) {
      setSelectedAppId(initialAppId);
    }
    else if (!isValidAppId && !selectedAppId && apps.length > 0) {
        setSelectedAppId(apps[0].id);
    }
  }, [initialAppId, apps, selectedAppId, navigate]);


  // Placeholder resim URL'si oluşturur.
  const placeholderImageUrl = (width: number = 100, height: number = 100, text: string = "Image") =>
    `https://placehold.co/${width}x${height}/e2e8f0/94a3b8?text=${encodeURIComponent(text)}`;

  // Resim yükleme hatasını ele alır.
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    console.warn("Resim yüklenemedi:", target.src);
    const width = target.clientWidth || 100;
    const height = target.clientHeight || 100;
    target.src = placeholderImageUrl(width, height, 'Bulunamadı');
    target.onerror = null;
  };

  // Uygulama ikonuna tıklandığında URL'yi günceller.
  const handleIconClick = (appId: string) => {
    navigate(`/apps/${appId}`);
  };


  return (
    <div className="bg-black text-white min-h-[calc(100vh-96px)] flex flex-col">
      {/* Compact Top Header & App Selector */}
      <div className="max-w-6xl mx-auto w-full pt-6 pb-2 px-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#00df9a]" />
            <h1 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
              {t("apps.ourApps", "Mobile Apps & Games")}
            </h1>
          </div>
          <span className="text-[11px] font-mono text-gray-400">
            {apps.length} Apps • Swipe to explore
          </span>
        </div>

        {/* Compact Uygulama İkon Seçici */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto py-2 gap-2.5 no-scrollbar">
          {apps.map((app) => {
            const isSelected = selectedAppId === app.id;
            return (
              <button
                key={app.id}
                onClick={() => handleIconClick(app.id)}
                className={`cursor-pointer flex flex-col items-center p-2 rounded-xl border transition-all duration-200 flex-shrink-0 w-20 md:w-24 text-center ${
                  isSelected
                    ? "bg-[#0c1322] border-[#00df9a] shadow-md shadow-[#00df9a]/25 scale-102"
                    : "bg-[#0c1018]/60 border-gray-800/80 hover:border-gray-700 hover:bg-gray-900/60 opacity-70 hover:opacity-100"
                }`}
                aria-label={`${app.name} seç`}
              >
                <div className={`w-11 h-11 md:w-12 md:h-12 rounded-lg bg-black/80 p-1 mb-1.5 border flex items-center justify-center transition-all ${
                  isSelected ? "border-[#00df9a]/60 shadow-sm shadow-[#00df9a]/30" : "border-gray-800"
                }`}>
                  <img
                    src={app.logo}
                    alt={`${app.name} Logosu`}
                    className="w-full h-full object-contain"
                    onError={handleImageError}
                  />
                </div>
                <p className={`text-[11px] md:text-xs font-semibold truncate w-full ${
                  isSelected ? "text-[#00df9a]" : "text-gray-300"
                }`}>
                  {app.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Uygulama Detayları Bölümü (Kompakt ve Dengeli) */}
      {selectedApp ? (
        <div
          id={`details_${selectedApp.id}`}
          className="w-full flex-grow bg-gradient-to-b from-[#090d16] via-[#0b101c] to-black border-t border-gray-800/80 py-6 px-4"
        >
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Integrated Header: Logo + Info + Store Buttons */}
            <div className="bg-[#0c1018]/80 border border-gray-800/80 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 max-w-2xl">
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-black/90 p-2 border border-gray-700/80 shadow-lg flex-shrink-0 flex items-center justify-center">
                  <img
                    src={selectedApp.logo}
                    alt={selectedApp.name}
                    className="w-full h-full object-contain"
                    onError={handleImageError}
                  />
                </div>
                <div>
                  <h2 className={`text-2xl md:text-3xl font-extrabold ${selectedApp.titleColor} tracking-tight`}>
                    {selectedApp.name}
                  </h2>
                  <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">
                    {t(selectedApp.descriptionKey, `${selectedApp.name} için açıklama`)}
                  </p>
                </div>
              </div>

              {/* Store Download Buttons */}
              {selectedApp.stores && selectedApp.stores.length > 0 && (
                <div className="flex md:flex-col gap-2.5 flex-shrink-0 w-full md:w-auto justify-center">
                  {selectedApp.stores.map((store) => (
                    <a
                      key={store.type}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs md:text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-102 flex items-center justify-center space-x-2 ${
                        store.type === "google"
                          ? "bg-[#00df9a] hover:bg-[#00c87b] text-black shadow-[#00df9a]/20"
                          : "bg-gray-950 border border-gray-700 hover:border-gray-500 text-white shadow-black/40"
                      }`}
                    >
                      {store.type === "google" && <FaGooglePlay size={14} />}
                      {store.type === "apple" && <FaApple size={15} />}
                      <span>{t(store.buttonTextKey, `İndir`)}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Yatay Kayan Ekran Görüntüleri Galerisi (Dikey Yığılmayı Önler!) */}
            {selectedApp.features && selectedApp.features.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3 px-1">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00df9a]" />
                    <span>Screenshots & Features</span>
                  </h3>
                  <span className="text-[11px] text-gray-500 font-mono">
                    ← Yatay Kaydırın / Swipe →
                  </span>
                </div>

                <div className="flex overflow-x-auto gap-4 py-2 px-1 no-scrollbar snap-x">
                  {selectedApp.features.map((feature, index) => (
                    <div
                      key={index}
                      className="w-48 sm:w-56 shrink-0 snap-start bg-[#0c1018]/90 border border-gray-800/90 hover:border-gray-700 rounded-2xl shadow-xl p-3 flex flex-col justify-between transition-all duration-200"
                    >
                      <div className="bg-black/60 rounded-xl overflow-hidden mb-2.5 border border-gray-800/60 p-1 flex items-center justify-center h-52 sm:h-60">
                        <img
                          src={feature.image}
                          alt={t(feature.titleKey, `Özellik ${index + 1}`)}
                          className="w-full h-full object-contain rounded-lg"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="text-left px-1">
                        <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                          {t(feature.titleKey, `Özellik ${index + 1} Başlığı`)}
                        </h4>
                        <p className="text-gray-400 text-[11px] sm:text-xs mt-1 line-clamp-2 leading-relaxed">
                          {t(feature.descKey, `Özellik ${index + 1} Açıklaması`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 flex-grow flex items-center justify-center">
          <p>Detayları görmek için lütfen yukarıdan bir uygulama seçin.</p>
        </div>
      )}
    </div>
  );
}

// --- Ana Apps Bileşeni ---
function Apps() {
  const { appId } = useParams();
  return <AppShowcase apps={appsData} initialAppId={appId} />;
}

export default Apps;
