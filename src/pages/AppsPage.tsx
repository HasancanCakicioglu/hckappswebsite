// Import necessary React components
import React from 'react'; 
import { FaGooglePlay } from 'react-icons/fa'; // Google Play Store ikonu için react-icons import et
import { useTranslation } from "react-i18next";

function Apps() {
  const { t } = useTranslation("apps");
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Logo and Scroll Button */}
        <div className="flex justify-center items-center py-8 mb-8">
            <a href="#details" className="cursor-pointer flex flex-col items-center">
                <img src="/apps/voidnote/voidnote.png" alt="VoidNote Logo" className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2 object-contain" />
                <p className="text-white mt-2 font-bold">VoidNote</p>{" "}
            </a>
        </div>
        
        {/* App Details Section */}
        <div id="details" className="bg-white text-black w-full">
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
                <div className="flex justify-center mt-8">
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.hck.voidnote&hl=en" 
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
