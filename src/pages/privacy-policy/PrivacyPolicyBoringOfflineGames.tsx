import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyBoringOfflineGames = () => {
  const { t } = useTranslation('privacy-policy-boringofflinegames');
  const contactEmail = t('boringofflinegames.contactEmail');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('boringofflinegames.title')}
      </h1>

      {/* Last Updated Date */}
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('boringofflinegames.effectiveDateLabel')}</strong>
        {t('boringofflinegames.effectiveDate')}
      </p>

      {/* Intro */}
      <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
        <Trans
          t={t}
          i18nKey="boringofflinegames.intro"
          components={[
            <React.Fragment key="0" />,
            <strong key="1" className="font-bold text-[#00df9a]" />
          ]}
        />
      </p>

      <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
        {t('boringofflinegames.intro2')}
      </p>

      <p className="mb-6 leading-relaxed text-gray-300 dark:text-white">
        {t('boringofflinegames.intro3')}
      </p>

      <hr className="border-gray-700 my-6" />

      {/* Section 1: Information Collection and Use */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200 dark:text-white">
          {t('boringofflinegames.section1Title')}
        </h2>

        {/* A. Personal Data Collected Directly by Us */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('boringofflinegames.section1ATitle')}
          </h3>
          <p className="mb-2 leading-relaxed text-gray-300 dark:text-white font-semibold">
            {t('boringofflinegames.section1AText')}
          </p>
          <p className="leading-relaxed text-gray-300 dark:text-white">
            {t('boringofflinegames.section1AText2')}
          </p>
        </div>

        {/* B. Information Collected by Third-Party Services */}
        <div>
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('boringofflinegames.section1BTitle')}
          </h3>
          <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
            {t('boringofflinegames.section1BText')}
          </p>
          <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
            {t('boringofflinegames.section1BText2')}
          </p>

          {/* 1. Advertising (Google AdMob) */}
          <div className="ml-4 mb-6">
            <h4 className="text-lg font-medium mb-2 text-gray-200 dark:text-white">
              {t('boringofflinegames.section1B1Title')}
            </h4>
            <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
              {t('boringofflinegames.section1B1Text')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
              <li>{t('boringofflinegames.section1B1Item1')}</li>
              <li>{t('boringofflinegames.section1B1Item2')}</li>
              <li>{t('boringofflinegames.section1B1Item3')}</li>
              <li>{t('boringofflinegames.section1B1Item4')}</li>
              <li>{t('boringofflinegames.section1B1Item5')}</li>
            </ul>
            <p className="mb-2 leading-relaxed text-gray-300 dark:text-white">
              {t('boringofflinegames.section1B1Footer')}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('boringofflinegames.section1B1Link1')}
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('boringofflinegames.section1B1Link2')}
                </a>
              </li>
            </ul>
          </div>

          {/* 2. Crash Reporting and Diagnostics (Sentry) */}
          <div className="ml-4 mb-4">
            <h4 className="text-lg font-medium mb-2 text-gray-200 dark:text-white">
              {t('boringofflinegames.section1B2Title')}
            </h4>
            <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
              {t('boringofflinegames.section1B2Text')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
              <li>{t('boringofflinegames.section1B2Item1')}</li>
              <li>{t('boringofflinegames.section1B2Item2')}</li>
              <li>{t('boringofflinegames.section1B2Item3')}</li>
              <li>{t('boringofflinegames.section1B2Item4')}</li>
              <li>{t('boringofflinegames.section1B2Item5')}</li>
            </ul>
            <p className="mb-2 leading-relaxed text-gray-300 dark:text-white">
              {t('boringofflinegames.section1B2Footer')}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <a
                  href="https://sentry.io/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('boringofflinegames.section1B2Link1')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 2: Cookies and Tracking Technologies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('boringofflinegames.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section2Text1')}
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section2Text2')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 3: Children's Privacy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('boringofflinegames.section3Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section3Text1')}
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section3Text2')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 4: Legal Disclaimers and Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200 dark:text-white">
          {t('boringofflinegames.section4Title')}
        </h2>

        {/* A. "As Is" and "As Available" */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('boringofflinegames.section4ATitle')}
          </h3>
          <p className="leading-relaxed text-gray-300 dark:text-white">
            <Trans
              t={t}
              i18nKey="boringofflinegames.section4AText"
              components={[
                <React.Fragment key="0" />,
                <strong key="1" className="font-semibold text-gray-200 dark:text-white" />
              ]}
            />
          </p>
        </div>

        {/* B. Limitation of Liability */}
        <div>
          <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">
            {t('boringofflinegames.section4BTitle')}
          </h3>
          <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
            {t('boringofflinegames.section4BText')}
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-300 dark:text-white">
            <li>{t('boringofflinegames.section4BItem1')}</li>
            <li>{t('boringofflinegames.section4BItem2')}</li>
            <li>{t('boringofflinegames.section4BItem3')}</li>
            <li>{t('boringofflinegames.section4BItem4')}</li>
          </ol>
        </div>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 5: Indemnification */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('boringofflinegames.section5Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section5Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
          <li>{t('boringofflinegames.section5Item1')}</li>
          <li>{t('boringofflinegames.section5Item2')}</li>
          <li>{t('boringofflinegames.section5Item3')}</li>
        </ul>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 6: International Data Transfers */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('boringofflinegames.section6Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section6Text')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 7: Changes to This Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('boringofflinegames.section7Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section7Text')}
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      {/* Section 8: Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('boringofflinegames.section8Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('boringofflinegames.section8Text')}
        </p>
        <ul className="list-none pl-0 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="boringofflinegames.emailLabel"
              values={{ contactEmail }}
              components={[
                <strong key="0" className="font-semibold text-gray-200 dark:text-white" />,
                <a key="1" className="text-blue-600 dark:text-blue-400 hover:underline" href={`mailto:${contactEmail}`} aria-label={contactEmail} />
              ]}
            />
          </li>
          <li className="text-gray-300 dark:text-white">
            <Trans
              t={t}
              i18nKey="boringofflinegames.developerLabel"
              values={{ developerName: t('boringofflinegames.developerName') }}
              components={[
                <strong key="0" className="font-semibold text-gray-200 dark:text-white" />
              ]}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicyBoringOfflineGames;
