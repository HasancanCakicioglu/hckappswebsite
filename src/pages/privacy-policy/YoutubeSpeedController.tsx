import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const YoutubeSpeedControllerPrivacyPolicy = () => {
  const { t } = useTranslation('privacy-policy-youtubespeedcontroller');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold">{t('youtubeSpeedControl.title')}</h1>
      <p className="mt-4 leading-relaxed">{t('youtubeSpeedControl.intro')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeSpeedControl.dataCollectedTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('youtubeSpeedControl.dataCollected')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeSpeedControl.permissionsTitle')}</h2>
      <ul className="list-disc list-inside mt-2 leading-relaxed">
        <li>{t('youtubeSpeedControl.permission.storage')}</li>
        <li>{t('youtubeSpeedControl.permission.scripting')}</li>
        <li>{t('youtubeSpeedControl.permission.activeTab')}</li>
        <li>{t('youtubeSpeedControl.permission.tabs')}</li>
        <li>{t('youtubeSpeedControl.permission.host')}</li>
      </ul>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeSpeedControl.thirdPartyTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('youtubeSpeedControl.thirdParty')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('youtubeSpeedControl.changesTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('youtubeSpeedControl.changes')}</p>
    </div>
  );
};

export default YoutubeSpeedControllerPrivacyPolicy;