import React from 'react';
import { useTranslation } from 'react-i18next';

const TwitterRestrictionPrivacyPolicy = () => {
  const { t } = useTranslation('privacy-policy-twitterrestriction');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold">{t('twitterRestriction.title')}</h1>
      <p className="mt-4 leading-relaxed">{t('twitterRestriction.intro')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('twitterRestriction.dataCollectedTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('twitterRestriction.dataCollected')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('twitterRestriction.permissionsTitle')}</h2>
      <ul className="list-disc list-inside mt-2 leading-relaxed">
        <li>{t('twitterRestriction.permissions.storage')}</li>
        <li>{t('twitterRestriction.permissions.activeTab')}</li>
        <li>{t('twitterRestriction.permissions.scripting')}</li>
      </ul>

      <h2 className="text-2xl mt-8 font-semibold">{t('twitterRestriction.localStorageTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('twitterRestriction.localStorage')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('twitterRestriction.thirdPartyTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('twitterRestriction.thirdParty')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('twitterRestriction.changesTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('twitterRestriction.changes')}</p>

      <h2 className="text-2xl mt-8 font-semibold">{t('twitterRestriction.contactTitle')}</h2>
      <p className="mt-2 leading-relaxed">{t('twitterRestriction.contact')}</p>
    </div>
  );
};

export default TwitterRestrictionPrivacyPolicy; 