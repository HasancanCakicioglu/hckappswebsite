import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyMinesweeper = () => {
  const { t } = useTranslation('privacy-policy-minesweeper');
  const contactEmail = t('minesweeper.contactEmail');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('minesweeper.title')}
      </h1>

      {/* Effective Date */}
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('minesweeper.effectiveDateLabel')}</strong>
        {t('minesweeper.effectiveDate')}
      </p>

      {/* 1. Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section1Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-3">
          <li>{t('minesweeper.section1List1')}</li>
          <li>{t('minesweeper.section1List2')}</li>
          <li>{t('minesweeper.section1List3')}</li>
        </ul>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section1Text2')}
        </p>
      </section>

      {/* 2. How We Use Your Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section2Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-3">
          <li>{t('minesweeper.section2List1')}</li>
          <li>{t('minesweeper.section2List2')}</li>
          <li>{t('minesweeper.section2List3')}</li>
          <li>{t('minesweeper.section2List4')}</li>
          <li>{t('minesweeper.section2List5')}</li>
        </ul>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section2Text2')}
        </p>
      </section>

      {/* 3. Third-Party Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section3Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section3Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white">
          <li>{t('minesweeper.section3List1')}</li>
          <li>{t('minesweeper.section3List2')}</li>
          <li>{t('minesweeper.section3List3')}</li>
          <li>{t('minesweeper.section3List4')}</li>
          <li>{t('minesweeper.section3List5')}</li>
        </ul>
      </section>

      {/* 4. Advertising and Tracking (ATT & GDPR) */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section4Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section4Text1')}
        </p>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section4Text2')}
        </p>
      </section>

      {/* 5. Children’s Privacy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section5Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section5Text')}
        </p>
      </section>

      {/* 6. Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section6Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section6Text')}
        </p>
      </section>

      {/* 7. Data Retention */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section7Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section7Text')}
        </p>
      </section>

      {/* 8. Changes to This Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section8Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section8Text')}
        </p>
      </section>

      {/* 9. Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('minesweeper.section9Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('minesweeper.section9Text')}
        </p>
        <ul className="list-none pl-0 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="minesweeper.section9ListItem1"
              values={{ contactEmail }}
              components={[
                <strong className="font-semibold text-gray-200 dark:text-white" />,
                <a className="text-blue-600 dark:text-blue-400 hover:underline" href={`mailto:${contactEmail}`}> </a>
              ]}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicyMinesweeper;
