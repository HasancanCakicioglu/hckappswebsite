import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyEverFeast: React.FC = () => {
  const { t } = useTranslation('privacy-policy-everfeast');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('everfeast.title')}
      </h1>

      {/* Last Updated & Effective Date */}
      <div className="mb-6 text-sm text-gray-300 dark:text-white space-y-1">
        <p>
          <strong className="text-gray-200 dark:text-white">{t('everfeast.lastUpdatedLabel')}</strong>
          {t('everfeast.lastUpdated')}
        </p>
        <p>
          <strong className="text-gray-200 dark:text-white">{t('everfeast.effectiveDateLabel')}</strong>
          {t('everfeast.effectiveDate')}
        </p>
      </div>

      {/* Intro */}
      <div className="mb-6 space-y-4 leading-relaxed text-gray-300 dark:text-white">
        <p>
          <Trans
            t={t}
            i18nKey="everfeast.intro1"
            components={[
              <React.Fragment key="0" />,
              <strong key="1" className="font-semibold text-[#00df9a]" />,
              <code key="2" className="bg-gray-800 text-gray-200 px-1.5 py-0.5 rounded text-xs font-mono" />
            ]}
          />
        </p>
        <p>
          <Trans
            t={t}
            i18nKey="everfeast.intro2"
            components={[
              <React.Fragment key="0" />,
              <strong key="1" className="font-semibold text-gray-100 dark:text-white" />
            ]}
          />
        </p>
        <p>
          {t('everfeast.intro3')}
        </p>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Section 1: Data Controller and Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section1Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>
            <strong className="text-gray-200 dark:text-white">{t('everfeast.section1Developer')} </strong>
            {t('everfeast.section1DeveloperVal')}
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('everfeast.section1Email')} </strong>
            <a
              href={`mailto:${t('everfeast.section1EmailVal')}`}
              className="text-[#00df9a] hover:underline"
            >
              {t('everfeast.section1EmailVal')}
            </a>
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('everfeast.section1Website')} </strong>
            <a
              href={t('everfeast.section1WebsiteVal')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00df9a] hover:underline"
            >
              {t('everfeast.section1WebsiteVal')}
            </a>
          </li>
        </ul>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section1Footer')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 2: Toplanan Bilgiler ve Toplanma Amaçları */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          <Trans
            t={t}
            i18nKey="everfeast.section2Text1"
            components={[
              <React.Fragment key="0" />,
              <strong key="1" className="font-bold text-gray-100 dark:text-white" />
            ]}
          />
        </p>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section2Text2')}
        </p>

        {/* 2.A */}
        <div className="mb-6 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('everfeast.section2ATitle')}
          </h3>
          <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
            {t('everfeast.section2AText')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('everfeast.section2AItem1')}</li>
            <li>{t('everfeast.section2AItem2')}</li>
            <li>{t('everfeast.section2AItem3')}</li>
            <li>{t('everfeast.section2AItem4')}</li>
          </ul>
        </div>

        {/* 2.B */}
        <div className="mb-6 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('everfeast.section2BTitle')}
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('everfeast.section2BItem1')}</li>
            <li>{t('everfeast.section2BItem2')}</li>
            <li>{t('everfeast.section2BItem3')}</li>
          </ul>
        </div>

        {/* 2.C */}
        <div className="mb-6 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('everfeast.section2CTitle')}
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('everfeast.section2CItem1')}</li>
            <li>{t('everfeast.section2CItem2')}</li>
          </ul>
        </div>

        {/* 2.D */}
        <div className="mb-4 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('everfeast.section2DTitle')}
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('everfeast.section2DItem1')}</li>
            <li>{t('everfeast.section2DItem2')}</li>
          </ul>
        </div>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 3: Third-Party SDKs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section3Title')}
        </h2>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section3Text')}
        </p>

        <div className="space-y-6 ml-2">
          {/* 1. AdMob */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('everfeast.section3_1Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_1Purpose')}</p>
            <p className="mb-3 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_1Data')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('everfeast.section3_1Policy')} </span>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mr-3"
              >
                {t('everfeast.section3_1PolicyLink1')}
              </a>
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('everfeast.section3_1PolicyLink2')}
              </a>
            </div>
          </div>

          {/* 2. Firebase */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('everfeast.section3_2Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_2Purpose')}</p>
            <p className="mb-3 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_2Data')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('everfeast.section3_2Policy')} </span>
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('everfeast.section3_2PolicyLink')}
              </a>
            </div>
          </div>

          {/* 3. RevenueCat */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('everfeast.section3_3Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_3Purpose')}</p>
            <p className="mb-3 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_3Data')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('everfeast.section3_3Policy')} </span>
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('everfeast.section3_3PolicyLink')}
              </a>
            </div>
          </div>

          {/* 4. GlitchTip / Sentry */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('everfeast.section3_4Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_4Purpose')}</p>
            <p className="mb-2 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_4Data')}</p>
            <p className="mb-3 text-sm italic text-gray-400">{t('everfeast.section3_4Note')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('everfeast.section3_4Policy')} </span>
              <a
                href="https://glitchtip.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('everfeast.section3_4PolicyLink')}
              </a>
            </div>
          </div>

          {/* 5. Google Play Games & Game Center */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('everfeast.section3_5Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('everfeast.section3_5Purpose')}</p>
            <p className="text-sm text-gray-300 dark:text-white">{t('everfeast.section3_5Data')}</p>
          </div>
        </div>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 4: Critical Data Association Disclosure */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200 dark:text-white">
          {t('everfeast.section4Title')}
        </h2>

        <div className="p-4 mb-6 rounded-lg border border-emerald-500/50 bg-emerald-950/20 text-gray-200">
          <p className="font-semibold text-emerald-400 mb-2">
            {t('everfeast.section4Notice')}
          </p>
          <p className="mb-3 leading-relaxed text-sm text-gray-300">
            {t('everfeast.section4Intro')}
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-300 mb-4">
            <li>{t('everfeast.section4Item1')}</li>
            <li>{t('everfeast.section4Item2')}</li>
          </ol>
          <p className="font-medium text-sm text-gray-200 mb-2">
            {t('everfeast.section4OutroTitle')}
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-300">
            <li>{t('everfeast.section4OutroItem1')}</li>
            <li>{t('everfeast.section4OutroItem2')}</li>
            <li>{t('everfeast.section4OutroItem3')}</li>
          </ul>
        </div>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 5: Device Permissions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section5Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section5Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
          <li>{t('everfeast.section5Item1')}</li>
          <li>{t('everfeast.section5Item2')}</li>
          <li>{t('everfeast.section5Item3')}</li>
          <li>{t('everfeast.section5Item4')}</li>
          <li>{t('everfeast.section5Item5')}</li>
        </ul>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 6: Children's Privacy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section6Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section6Text1')}
        </p>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section6Text2')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 7: Data Retention and Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section7Title')}
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-300 dark:text-white">
          <li>{t('everfeast.section7Item1')}</li>
          <li>{t('everfeast.section7Item2')}</li>
          <li>{t('everfeast.section7Item3')}</li>
        </ul>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 8: User Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section8Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section8Intro')}
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>{t('everfeast.section8Item1')}</li>
          <li>{t('everfeast.section8Item2')}</li>
          <li>
            {t('everfeast.section8Item3')}
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm text-gray-400">
              <li>{t('everfeast.section8Item3_Android')}</li>
              <li>{t('everfeast.section8Item3_iOS')}</li>
            </ul>
          </li>
          <li>{t('everfeast.section8Item4')}</li>
        </ol>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section8Footer')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 9: Changes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section9Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section9Text1')}
        </p>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section9Text2')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 10: Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('everfeast.section10Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('everfeast.section10Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
          <li>
            <strong className="text-gray-200 dark:text-white">{t('everfeast.contactDeveloper')} </strong>
            {t('everfeast.contactDeveloperVal')}
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('everfeast.contactEmail')} </strong>
            <a
              href={`mailto:${t('everfeast.contactEmailVal')}`}
              className="text-[#00df9a] hover:underline"
            >
              {t('everfeast.contactEmailVal')}
            </a>
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('everfeast.contactWebsite')} </strong>
            <a
              href={t('everfeast.contactWebsiteVal')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00df9a] hover:underline"
            >
              {t('everfeast.contactWebsiteVal')}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicyEverFeast;
