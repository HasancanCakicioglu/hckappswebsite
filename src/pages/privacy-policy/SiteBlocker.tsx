import React from 'react';
import { useTranslation } from 'react-i18next';

const SiteBlockerPrivacyPolicy = () => {
  const { t } = useTranslation('privacy-policy-siteblocker');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold">{t('siteBlocker.title')}</h1>
      <p className="mt-4 leading-relaxed">{t('siteBlocker.intro')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('siteBlocker.dataCollectedTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('siteBlocker.dataCollected')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('siteBlocker.permissionsTitle')}</h2>
      <ul className="list-disc list-inside mt-2 leading-relaxed">
        <li>{t('siteBlocker.permissions.storage')}</li>
        <li>{t('siteBlocker.permissions.activeTab')}</li>
        <li>{t('siteBlocker.permissions.scripting')}</li>
      </ul>

      <h2 className="text-2xl mt-8 font-semibold">{t('siteBlocker.localStorageTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('siteBlocker.localStorage')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('siteBlocker.thirdPartyTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('siteBlocker.thirdParty')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('siteBlocker.changesTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('siteBlocker.changes')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('siteBlocker.contactTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('siteBlocker.contact')}</p>
    </div>
  );
};

export default SiteBlockerPrivacyPolicy;
