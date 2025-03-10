// Import necessary React components
import React from 'react'; 
import { FaGooglePlay,FaApple } from 'react-icons/fa'; // Google Play Store ikonu için react-icons import et
import { useTranslation } from "react-i18next";

function Apps() {
  const { t } = useTranslation("apps");
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Logo and Scroll Button */}
        <div className="flex justify-center items-center py-8 mb-8">
            <a href="#details_voidnote" className="cursor-pointer flex flex-col items-center mr-2 ml-2">
                <img src="/apps/voidnote/voidnote.png" alt="VoidNote Logo" className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2 object-contain" />
                <p className="text-white mt-2 font-bold">VoidNote</p>{" "}
            </a>

            <a href="#details_cryptobex" className="cursor-pointer flex flex-col items-center mr-2 ml-2">
                <img src="/apps/cryptobex/cryptobex_logo.png" alt="Cryptobex Logo" className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2 object-contain" />
                <p className="text-white mt-2 font-bold">Cryptobex</p>{" "}
            </a>
        </div>
        
        {/* App Details Section Voidnote */}
        <div id="details_voidnote" className="bg-white text-black w-full">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#00df9a] mb-6">VoidNote</h1>
                    <p className="text-lg mb-6">{t('apps.section1')}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                    {/* App Feature Example Cards */}
                    <div className="text-center">
                        <img src="/apps/voidnote/note_framed.png" alt="Note Example" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.title1')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.desc1')}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/voidnote/tree_framed.png" alt="Tree Notes" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.title2')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.desc2')}</p>
                        </div>
                    </div>
                    <div className=" text-center">
                        <img src="/apps/voidnote/analysis_framed.png" alt="Analysis Tools" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.title3')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.desc3')}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/voidnote/calendar_framed.png" alt="Calendar Integration" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.title4')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.desc4')}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/voidnote/todo_framed.png" alt="To-Do List Integration" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.title5')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.desc5')}</p>
                        </div>
                    </div>
                </div>
                {/* Google Play Store Button */}
                <div className="flex justify-center mt-8 space-x-4">
  {/* Google Play Store Butonu */}
  <a 
    href="https://play.google.com/store/apps/details?id=com.hck.voidnote&pcampaignid=web_share" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-xl text-white flex items-center justify-center bg-[#00df9a] hover:bg-[#00c87b] py-2 px-4 rounded-full"
  >
    <FaGooglePlay className="mr-2" /> {t('apps.downloadgoogle')}
  </a>

  {/* Apple App Store Butonu */}
  <a 
    href="https://apps.apple.com/tr/app/voidnote-notepad/id6742448208?l=tr&platform=iphone" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-xl text-white flex items-center justify-center bg-[#000000] hover:bg-[#333333] py-2 px-4 rounded-full"
  >
    <FaApple className="mr-2" /> {t('apps.downloadapple')}
  </a>
</div>

            </div>
        </div>
        <div className="w-full h-[100px] bg-black"></div>
        <div id="details_cryptobex" className="bg-white text-black w-full">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#e6c741] mb-6">Cryptobex</h1>
                    <p className="text-lg mb-6">{t('apps.csection1')}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                    {/* App Feature Example Cards */}
                    <div className="text-center">
                        <img src="/apps/cryptobex/market_framed.png" alt="Note Example" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.ctitle1')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.cdesc1')}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/cryptobex/leaderboard_framed.png" alt="Tree Notes" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.ctitle2')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.cdesc2')}</p>
                        </div>
                    </div>
                    <div className=" text-center">
                        <img src="/apps/cryptobex/wallet_framed.png" alt="Analysis Tools" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.ctitle3')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.cdesc3')}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/cryptobex/open_positions_framed.png" alt="Calendar Integration" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.ctitle4')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.cdesc4')}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/cryptobex/open_orders_framed.png" alt="To-Do List Integration" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">{t('apps.ctitle5')}</h3>
                            <p className="text-black font-semibold text-sm">{t('apps.cdesc5')}</p>
                        </div>
                    </div>
                </div>
                {/* Google Play Store Button */}
            <div className="flex justify-center mt-8 ">
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.hck.cryptobex&pcampaignid=web_share" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl text-white flex items-center justify-center bg-[#00df9a] hover:bg-[#00c87b] py-2 px-4 rounded-full"
                    >
                        <FaGooglePlay className="mr-2" /> {t('apps.downloadgoogle')}
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Apps;
