import React from 'react';
import { useTranslation } from 'react-i18next';

const YoutubeBookmarkerPrivacyPolicy = () => {
  const { t } = useTranslation('privacy-policy-youtubevideobookmarker');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold">{t('youtubeVideoBookMaker.title')}</h1>
      <p className="mt-4 leading-relaxed">{t('youtubeVideoBookMaker.intro')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeVideoBookMaker.dataCollectedTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('youtubeVideoBookMaker.dataCollected')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeVideoBookMaker.permissionsTitle')}</h2>
      <ul className="list-disc list-inside mt-2 leading-relaxed">
        <li>{t('youtubeVideoBookMaker.permissions.storage')}</li>
        <li>{t('youtubeVideoBookMaker.permissions.activeTab')}</li>
        <li>{t('youtubeVideoBookMaker.permissions.tabs')}</li>
        <li>{t('youtubeVideoBookMaker.permissions.scripting')}</li>
      </ul>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeVideoBookMaker.thirdPartyTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('youtubeVideoBookMaker.thirdParty')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeVideoBookMaker.changesTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('youtubeVideoBookMaker.changes')}</p>
    </div>
  );
};

export default YoutubeBookmarkerPrivacyPolicy;
