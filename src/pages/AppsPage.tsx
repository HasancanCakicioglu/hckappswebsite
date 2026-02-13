import React, { useState, useEffect } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";

// --- App Data ---
// (Uygulama verileri öncekiyle aynı, burada gösterilmiyor)
const appsData = [
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

];


// --- Yeniden Kullanılabilir Uygulama Vitrini Bileşeni ---
function AppShowcase({ apps, initialAppId }) {
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
  const placeholderImageUrl = (width = 100, height = 100, text = "Image") =>
    `https://placehold.co/${width}x${height}/e2e8f0/94a3b8?text=${encodeURIComponent(text)}`;

  // Resim yükleme hatasını ele alır.
  const handleImageError = (event) => {
    console.warn("Resim yüklenemedi:", event.target.src);
    const width = event.target.clientWidth || 100;
    const height = event.target.clientHeight || 100;
    event.target.src = placeholderImageUrl(width, height, 'Bulunamadı');
    event.target.onerror = null;
  };

  // Uygulama ikonuna tıklandığında URL'yi günceller.
  const handleIconClick = (appId) => {
    navigate(`/apps/${appId}`);
  };


  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Uygulama İkon Seçici */}
      <div className="flex justify-center items-start py-8 mb-8 flex-wrap">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => handleIconClick(app.id)}
            // *** DEĞİŞİKLİK: Buton boyutu orijinal haline getirildi ***
            className={`cursor-pointer flex flex-col items-center p-2 mx-2 md:mx-4 w-24 md:w-28 text-center transition-transform duration-200 ease-in-out transform hover:scale-110 ${ // w-20 -> w-24, md:w-24 -> md:w-28
              selectedAppId === app.id ? 'scale-110' : ''
            }`}
            aria-label={`${app.name} seç`}
          >
            <img
              src={app.logo}
              alt={`${app.name} Logosu`}
              // *** DEĞİŞİKLİK: İkon boyutları orijinal haline getirildi ***
              className={`w-16 h-16 md:w-20 md:h-20 mb-2 border-2 rounded-lg p-1 object-contain transition-all duration-300 ${ // w-14 h-14 md:w-[4.25rem] md:h-[4.25rem] -> w-16 h-16 md:w-20 md:h-20
                selectedAppId === app.id
                  ? 'border-white shadow-lg shadow-white/30'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
              onError={handleImageError}
            />
            <p className={`text-white mt-2 font-bold text-xs md:text-sm break-words ${
              selectedAppId === app.id ? 'opacity-100' : 'opacity-75 hover:opacity-100'
            }`}>
              {app.name}
            </p>
          </button>
        ))}
      </div>

      {/* Uygulama Detayları Bölümü */}
      {selectedApp ? (
        <div id={`details_${selectedApp.id}`} className="bg-white text-black w-full flex-grow">
          <div className="container mx-auto px-4 py-8">
            {/* Başlık ve Açıklama */}
            <div className="text-center mb-8">
              <h1 className={`text-3xl md:text-4xl font-bold ${selectedApp.titleColor} mb-4`}>
                {selectedApp.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                {t(selectedApp.descriptionKey, `${selectedApp.name} için açıklama`)}
              </p>
            </div>

            {/* Özellikler Bölümü */}
            {selectedApp.features && selectedApp.features.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 mb-10">
                {selectedApp.features.map((feature, index) => (
                  // *** DEĞİŞİKLİK: Kartın maksimum genişliği küçültüldü ***
                  <div key={index} className="max-w-[16rem] text-center bg-gray-50 rounded-lg shadow-md overflow-hidden p-3 flex flex-col"> {/* max-w-xs -> max-w-[14rem] */}
                    <img
                      src={feature.image}
                      alt={t(feature.titleKey, `Özellik ${index + 1}`)}
                      // *** DEĞİŞİKLİK: Resim ölçeklemesi kaldırıldı ***
                      className={`w-full h-auto object-contain mb-3 rounded ${ // transform scale-[0.85] kaldırıldı
                        selectedApp.id === 'phototranslator' && index === 1
                          ? 'min-h-48 md:min-h-56'
                          : 'min-h-40'
                      }`}
                      onError={handleImageError}
                    />
                    {/* Metin içeriği */}
                    <div className="p-2 flex-grow flex flex-col justify-between">
                      <h3 className="text-sm md:text-md font-bold text-black mb-1">
                        {t(feature.titleKey, `Özellik ${index + 1} Başlığı`)}
                      </h3>
                      <p className="text-black font-semibold text-xs md:text-sm">
                        {t(feature.descKey, `Özellik ${index + 1} Açıklaması`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* İndirme Butonları */}
            {selectedApp.stores && selectedApp.stores.length > 0 && (
              <div className="flex justify-center items-center mt-8 space-x-4 flex-wrap gap-y-4">
                {selectedApp.stores.map((store) => (
                  <a
                    key={store.type}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-base md:text-lg text-white flex items-center justify-center ${store.bgColor} ${store.hoverBgColor} py-2 px-5 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg`}
                    aria-label={`${selectedApp.name} uygulamasını ${store.type === 'google' ? 'Google Play' : 'Apple App Store'} mağazasından indir`}
                  >
                    {store.type === "google" && <FaGooglePlay className="mr-2" />}
                    {store.type === "apple" && <FaApple className="mr-2" />}
                    {t(store.buttonTextKey, `İndir`)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
            // Seçili uygulama yoksa gösterilecek mesaj
            <div className="text-center py-10 text-gray-500 flex-grow flex items-center justify-center">
              <p>Detayları görmek için lütfen yukarıdan bir uygulama ikonu seçin.</p>
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
