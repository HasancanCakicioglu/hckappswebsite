import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyGraviton = () => {
  const { t } = useTranslation('privacy-policy-graviton');
  const contactEmail = t('graviton.contactEmail');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('graviton.title')}
      </h1>

      {/* Last Updated Date */}
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('graviton.effectiveDateLabel')}</strong>
        {t('graviton.effectiveDate')}
      </p>

      {/* 1. Toplanan Veriler ve Yöntemler */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('graviton.section1Title')}
        </h2>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section1Text')}
        </p>

        {/* A. Yerel Veriler */}
        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('graviton.section1_A_Title')}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section1_A_Text')}
        </p>

        {/* B. Üçüncü Taraf Entegrasyonlar ve Veriler */}
        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('graviton.section1_B_Title')}
        </h3>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section1_B_Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>{t('graviton.section1_B_AdMob')}</li>
          <li>{t('graviton.section1_B_RevenueCat')}</li>
          <li>{t('graviton.section1_B_Firebase')}</li>
          <li>{t('graviton.section1_B_Sentry')}</li>
        </ul>
      </section>

      {/* 2. Verilerin Kullanım Amaçları */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('graviton.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section2Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>{t('graviton.section2Item1')}</li>
          <li>{t('graviton.section2Item2')}</li>
          <li>{t('graviton.section2Item3')}</li>
          <li>{t('graviton.section2Item4')}</li>
        </ul>
      </section>

      {/* 3. Üçüncü Taraflarla Paylaşım */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('graviton.section3Title')}
        </h2>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section3Text')}
        </p>
      </section>

      {/* 4. Kullanıcı Hakları ve Onay Yönetimi */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('graviton.section4Title')}
        </h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('graviton.section4_UMP_Title')}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section4_UMP_Text')}
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-200 dark:text-white">
          {t('graviton.section4_AdID_Title')}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section4_AdID_Text')}
        </p>
      </section>

      {/* 5. Çocukların Gizliliği */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('graviton.section5Title')}
        </h2>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section5Text')}
        </p>
      </section>

      {/* 6. Gizlilik Politikası Değişiklikleri */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('graviton.section6Title')}
        </h2>
        <p className="mb-4 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section6Text')}
        </p>
      </section>

      {/* 7. İletişim */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('graviton.section7Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('graviton.section7Text')}
        </p>
        <ul className="list-none pl-0 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="graviton.section7ListItem1"
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
        {t('graviton.finalText')}
      </p>
    </div>
  );
};

export default PrivacyPolicyGraviton;
