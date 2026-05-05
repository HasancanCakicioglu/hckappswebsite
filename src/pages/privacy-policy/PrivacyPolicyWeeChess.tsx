import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyWeeChess = () => {
  const { t } = useTranslation('privacy-policy-weechess');
  const contactEmail = t('weeChess.contactEmail');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('weeChess.title')}
      </h1>
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('weeChess.effectiveDateLabel')}</strong>
        {t('weeChess.effectiveDate')}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section1Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section2Text')}
        </p>
        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('weeChess.section2_1Title')}
        </h3>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section2_1Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section3Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section3Text')}
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('weeChess.section3_1Title')}
        </h3>
        <p className="mb-2 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section3_1Text')}
        </p>

        <h4 className="text-lg font-semibold mb-1 mt-3 text-gray-200 dark:text-white">
          {t('weeChess.section3_1_1Title')}
        </h4>
        <p className="mb-2 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section3_1_1Text')}
        </p>

        <h4 className="text-lg font-semibold mb-1 mt-3 text-gray-200 dark:text-white">
          {t('weeChess.section3_1_2Title')}
        </h4>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section3_1_2Text')}
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('weeChess.section3_2Title')}
        </h3>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section3_2Text')}
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('weeChess.section3_3Title')}
        </h3>
        <p className="mb-2 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section3_3Text')}
        </p>
        <p className="mb-3 leading-relaxed text-red-300 dark:text-red-400 font-semibold">
          {t('weeChess.section3_3Important')}
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('weeChess.section3_4Title')}
        </h3>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section3_4Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section4Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section4Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section5Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section5Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section6Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section6Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section7Title')}
        </h2>
        {t('weeChess.section7Text') && (
          <p className="mb-2 leading-relaxed text-gray-300 dark:text-white">
            {t('weeChess.section7Text')}
          </p>
        )}
        <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-300 dark:text-white">
          <li>{t('weeChess.section7Item1')}</li>
          <li>{t('weeChess.section7Item2')}</li>
          <li>{t('weeChess.section7Item3')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section8Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section8Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section9Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section9Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section10Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section10Text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('weeChess.section11Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('weeChess.section11Text')}
        </p>
        <ul className="list-none pl-0 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="weeChess.section11ListItem1"
              values={{ contactEmail }}
              components={[
                <strong key="0" className="font-semibold text-gray-200 dark:text-white" />,
                <a key="1" className="text-blue-600 dark:text-blue-400 hover:underline" href={`mailto:${contactEmail}`} aria-label={contactEmail} />
              ]}
            />
          </li>
        </ul>
      </section>

      <p className="mt-6 text-sm text-gray-300 dark:text-white italic">
        {t('weeChess.finalText')}
      </p>
    </div>
  );
};

export default PrivacyPolicyWeeChess;
