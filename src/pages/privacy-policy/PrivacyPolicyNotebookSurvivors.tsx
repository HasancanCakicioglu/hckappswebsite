import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyNotebookSurvivors: React.FC = () => {
  const { t, i18n } = useTranslation('privacy-policy-notebooksurvivors');

  const currentLang = i18n.language ? i18n.language.substring(0, 2) : 'en';

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      {/* Language Switcher */}
      <div className="flex justify-end items-center mb-4 space-x-2 text-sm">
        <span className="text-gray-400">Language:</span>
        <button
          onClick={() => i18n.changeLanguage('tr')}
          className={`px-2.5 py-1 rounded font-medium transition-colors ${
            currentLang === 'tr'
              ? 'bg-[#00df9a] text-black font-semibold'
              : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          TR
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className={`px-2.5 py-1 rounded font-medium transition-colors ${
            currentLang === 'en'
              ? 'bg-[#00df9a] text-black font-semibold'
              : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          EN
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('notebooksurvivors.title')}
      </h1>

      {/* Last Updated & Effective Date */}
      <div className="mb-6 text-sm text-gray-300 dark:text-white space-y-1">
        <p>
          <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.lastUpdatedLabel')}</strong>
          {t('notebooksurvivors.lastUpdated')}
        </p>
        <p>
          <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.effectiveDateLabel')}</strong>
          {t('notebooksurvivors.effectiveDate')}
        </p>
      </div>

      {/* Intro */}
      <div className="mb-6 space-y-4 leading-relaxed text-gray-300 dark:text-white">
        <p>
          <Trans
            t={t}
            i18nKey="notebooksurvivors.intro1"
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
            i18nKey="notebooksurvivors.intro2"
            components={[
              <React.Fragment key="0" />,
              <strong key="1" className="font-semibold text-gray-100 dark:text-white" />
            ]}
          />
        </p>
        <p>
          {t('notebooksurvivors.intro3')}
        </p>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Section 1: Data Controller and Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section1Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section1Developer')} </strong>
            {t('notebooksurvivors.section1DeveloperVal')}
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section1Email')} </strong>
            <a
              href={`mailto:${t('notebooksurvivors.section1EmailVal')}`}
              className="text-[#00df9a] hover:underline"
            >
              {t('notebooksurvivors.section1EmailVal')}
            </a>
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section1Website')} </strong>
            <a
              href={t('notebooksurvivors.section1WebsiteVal')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00df9a] hover:underline"
            >
              {t('notebooksurvivors.section1WebsiteVal')}
            </a>
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section1PolicyUrl')} </strong>
            <a
              href={t('notebooksurvivors.section1PolicyUrlVal')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00df9a] hover:underline"
            >
              {t('notebooksurvivors.section1PolicyUrlVal')}
            </a>
          </li>
        </ul>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section1Footer')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 2: Information We Collect and Purposes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          <Trans
            t={t}
            i18nKey="notebooksurvivors.section2Text1"
            components={[
              <React.Fragment key="0" />,
              <strong key="1" className="font-bold text-gray-100 dark:text-white" />
            ]}
          />
        </p>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section2Text2')}
        </p>

        {/* 2.A */}
        <div className="mb-6 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('notebooksurvivors.section2ATitle')}
          </h3>
          <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
            {t('notebooksurvivors.section2AText')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('notebooksurvivors.section2AItem1')}</li>
            <li>{t('notebooksurvivors.section2AItem2')}</li>
            <li>{t('notebooksurvivors.section2AItem3')}</li>
            <li>{t('notebooksurvivors.section2AItem4')}</li>
          </ul>
        </div>

        {/* 2.B */}
        <div className="mb-6 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('notebooksurvivors.section2BTitle')}
          </h3>
          <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
            {t('notebooksurvivors.section2BText')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('notebooksurvivors.section2BItem1')}</li>
            <li>{t('notebooksurvivors.section2BItem2')}</li>
          </ul>
        </div>

        {/* 2.C */}
        <div className="mb-6 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('notebooksurvivors.section2CTitle')}
          </h3>
          <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
            {t('notebooksurvivors.section2CText')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('notebooksurvivors.section2CItem1')}</li>
            <li>{t('notebooksurvivors.section2CItem2')}</li>
          </ul>
        </div>

        {/* 2.D */}
        <div className="mb-4 pl-2 border-l-2 border-gray-700">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('notebooksurvivors.section2DTitle')}
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('notebooksurvivors.section2DItem1')}</li>
            <li>{t('notebooksurvivors.section2DItem2')}</li>
          </ul>
        </div>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 3: Third-Party SDKs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section3Title')}
        </h2>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section3Text')}
        </p>

        <div className="space-y-6 ml-2">
          {/* 1. AdMob */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('notebooksurvivors.section3_1Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_1Purpose')}</p>
            <p className="mb-3 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_1Data')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('notebooksurvivors.section3_1Policy')} </span>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mr-3"
              >
                {t('notebooksurvivors.section3_1PolicyLink1')}
              </a>
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('notebooksurvivors.section3_1PolicyLink2')}
              </a>
            </div>
          </div>

          {/* 2. RevenueCat */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('notebooksurvivors.section3_2Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_2Purpose')}</p>
            <p className="mb-3 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_2Data')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('notebooksurvivors.section3_2Policy')} </span>
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('notebooksurvivors.section3_2PolicyLink')}
              </a>
            </div>
          </div>

          {/* 3. GlitchTip / Sentry */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('notebooksurvivors.section3_3Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_3Purpose')}</p>
            <p className="mb-2 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_3Data')}</p>
            <p className="mb-3 text-sm italic text-gray-400">{t('notebooksurvivors.section3_3Note')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('notebooksurvivors.section3_3Policy')} </span>
              <a
                href="https://glitchtip.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mr-3"
              >
                {t('notebooksurvivors.section3_3PolicyLink1')}
              </a>
              <a
                href="https://sentry.io/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('notebooksurvivors.section3_3PolicyLink2')}
              </a>
            </div>
          </div>

          {/* 4. Google Play Games & Game Center */}
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-[#00df9a]">
              {t('notebooksurvivors.section3_4Title')}
            </h3>
            <p className="mb-1 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_4Purpose')}</p>
            <p className="mb-3 text-sm text-gray-300 dark:text-white">{t('notebooksurvivors.section3_4Data')}</p>
            <div className="text-sm">
              <span className="font-medium text-gray-300">{t('notebooksurvivors.section3_4Policy')} </span>
              <a
                href="https://developers.google.com/games/services/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mr-3"
              >
                {t('notebooksurvivors.section3_4PolicyLink1')}
              </a>
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {t('notebooksurvivors.section3_4PolicyLink2')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 4: Device Permissions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section4Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section4Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
          <li>{t('notebooksurvivors.section4Item1')}</li>
          <li>{t('notebooksurvivors.section4Item2')}</li>
          <li>{t('notebooksurvivors.section4Item3')}</li>
          <li>{t('notebooksurvivors.section4Item4')}</li>
          <li>{t('notebooksurvivors.section4Item5')}</li>
        </ul>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 5: Children's Privacy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section5Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section5Text1')}
        </p>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section5Text2')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 6: Data Retention and Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section6Title')}
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-300 dark:text-white">
          <li>{t('notebooksurvivors.section6Item1')}</li>
          <li>{t('notebooksurvivors.section6Item2')}</li>
          <li>{t('notebooksurvivors.section6Item3')}</li>
        </ul>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 7: User Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section7Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section7Intro')}
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>{t('notebooksurvivors.section7Item1')}</li>
          <li>{t('notebooksurvivors.section7Item2')}</li>
          <li>
            {t('notebooksurvivors.section7Item3')}
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm text-gray-400">
              <li>{t('notebooksurvivors.section7Item3_Android')}</li>
              <li>{t('notebooksurvivors.section7Item3_iOS')}</li>
            </ul>
          </li>
          <li>{t('notebooksurvivors.section7Item4')}</li>
        </ol>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section7Footer')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 8: Changes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section8Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section8Text1')}
        </p>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section8Text2')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 9: Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('notebooksurvivors.section9Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('notebooksurvivors.section9Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section9Developer')} </strong>
            {t('notebooksurvivors.section9DeveloperVal')}
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section9Email')} </strong>
            <a
              href={`mailto:${t('notebooksurvivors.section9EmailVal')}`}
              className="text-[#00df9a] hover:underline"
            >
              {t('notebooksurvivors.section9EmailVal')}
            </a>
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section9Website')} </strong>
            <a
              href={t('notebooksurvivors.section9WebsiteVal')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00df9a] hover:underline"
            >
              {t('notebooksurvivors.section9WebsiteVal')}
            </a>
          </li>
          <li>
            <strong className="text-gray-200 dark:text-white">{t('notebooksurvivors.section9Country')} </strong>
            {t('notebooksurvivors.section9CountryVal')}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicyNotebookSurvivors;
