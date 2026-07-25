import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicy101Calculator = () => {
  const { t } = useTranslation('privacy-policy-101calculator');
  const contactEmail = t('calculator101.contactEmail');
  const developerName = t('calculator101.developerName');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('calculator101.title')}
      </h1>
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('calculator101.effectiveDateLabel')}</strong>
        {t('calculator101.effectiveDate')}
      </p>

      <section className="mb-8 leading-relaxed space-y-3 text-gray-300 dark:text-white">
        <p>
          <Trans
            t={t}
            i18nKey="calculator101.intro"
            components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
          />
        </p>
        <p>{t('calculator101.intro2')}</p>
        <p>{t('calculator101.intro3')}</p>
      </section>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section1Text')}</p>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section1Text2')}</p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section2Text1')}</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
          <li>
            <Trans
              t={t}
              i18nKey="calculator101.section2ListItem1"
              components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="calculator101.section2ListItem2"
              components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="calculator101.section2ListItem3"
              components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section3Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section3Text')}</p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section4Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section4Text')}</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-300 dark:text-white">
          <li>{t('calculator101.section4ListItem1')}</li>
          <li>{t('calculator101.section4ListItem2')}</li>
          <li>{t('calculator101.section4ListItem3')}</li>
          <li>{t('calculator101.section4ListItem4')}</li>
          <li>{t('calculator101.section4ListItem5')}</li>
        </ul>
        <p className="mt-3 text-sm text-gray-400">{t('calculator101.section4Footer')}</p>
        <ul className="list-disc pl-6 text-sm text-blue-400 space-y-1 mt-1">
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t('calculator101.section4Link1')}
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t('calculator101.section4Link2')}
            </a>
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section5Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">{t('calculator101.section5ATitle')}</h3>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          <Trans
            t={t}
            i18nKey="calculator101.section5AText"
            components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
          />
        </p>
        <h3 className="text-xl font-medium mb-2 text-gray-200 dark:text-white">{t('calculator101.section5BTitle')}</h3>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section5BText')}</p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section6Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section6Text')}</p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section7Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('calculator101.section7Text')}</p>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('calculator101.section8Title')}
        </h2>
        <p className="mb-2 text-gray-300 dark:text-white">{t('calculator101.section8Text')}</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-300 dark:text-white">
          <li>
            <Trans
              t={t}
              i18nKey="calculator101.emailLabel"
              values={{ contactEmail }}
              components={[
                <strong className="font-semibold text-gray-200 dark:text-white" />,
                <a href={`mailto:${contactEmail}`} className="text-blue-400 hover:underline" />
              ]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="calculator101.developerLabel"
              values={{ developerName }}
              components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy101Calculator;
