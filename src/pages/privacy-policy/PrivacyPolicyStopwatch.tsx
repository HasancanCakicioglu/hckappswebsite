import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

// Gizlilik Politikası Bileşeni: Stopwatch Skull
const PrivacyPolicyStopwatchSkull = () => {
  const { t } = useTranslation('privacy-policy-stopwatchskull');
  const contactEmail = t('stopwatchSkull.contactEmail');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      
      {/* Politika Başlığı */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('stopwatchSkull.title')}
      </h1>

      {/* Yürürlük Tarihi */}
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('stopwatchSkull.effectiveDateLabel')}</strong>
        {t('stopwatchSkull.effectiveDate')}
      </p>

      {/* 1. Giriş */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('stopwatchSkull.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('stopwatchSkull.section1Text')}
        </p>
      </section>

      {/* 2. Toplanmayan Veriler */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('stopwatchSkull.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('stopwatchSkull.section2Text')}
        </p>
      </section>

      {/* 3. Veri İşleme ve Kullanım */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('stopwatchSkull.section3Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('stopwatchSkull.section3Text')}
        </p>
      </section>

      {/* 4. Veri Güvenliği */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('stopwatchSkull.section4Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">
          {t('stopwatchSkull.section4Text')}
        </p>
      </section>

      {/* 5. Bize Ulaşın */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('stopwatchSkull.section5Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('stopwatchSkull.section5Text')}
        </p>
        <ul className="list-none pl-0 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="stopwatchSkull.section5ListItem1"
              values={{ contactEmail }}
              components={[
                <strong className="font-semibold text-gray-200 dark:text-white" />,
                <a className="text-blue-600 dark:text-blue-400 hover:underline" href={`mailto:${contactEmail}`} />
              ]}
            />
          </li>
        </ul>
      </section>

      {/* Kapanış Metni */}
      <p className="mt-6 text-sm text-gray-300 dark:text-white italic">
        {t('stopwatchSkull.finalText')}
      </p>
    </div>
  );
};

export default PrivacyPolicyStopwatchSkull;
