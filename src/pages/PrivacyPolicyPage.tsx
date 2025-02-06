import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacy-policy-voidnote');

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Başlık */}
      <h1 className="text-3xl font-bold text-center text-[#00df9a] mb-6">
        {t('privacyPolicy.title')}
      </h1>

      {/* Geçerlilik Tarihi */}
      <p className="text-sm text-gray-600 mb-4">
        {t('privacyPolicy.effectiveDate')}
      </p>

      {/* Giriş Paragrafı */}
      <p className="text-white mb-4">
        <Trans
        t={t}
          i18nKey="privacyPolicy.intro"
          components={[
            <></>, // index 0: kullanılmadığı için boş
            <strong className="font-bold text-[#00df9a]" /> // index 1: <strong> etiketini temsil eder
          ]}
        />
      </p>

      {/* 1. Bölüm: Introduction */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section1Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section1Text')}
      </p>

      {/* 2. Bölüm: Information We Collect */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section2Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section2Text')}
      </p>

      {/* 2.1 Kişisel Bilgiler */}
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">
        {t('privacyPolicy.section2_1Title')}
      </h3>
      <ul className="list-disc pl-6 mb-4 text-white">
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section2_1Item1"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section2_1Item2"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
      </ul>

      {/* 2.2 Kişisel Olmayan Bilgiler */}
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">
        {t('privacyPolicy.section2_2Title')}
      </h3>
      <ul className="list-disc pl-6 mb-4 text-white">
        <li>{t('privacyPolicy.section2_2Item1')}</li>
      </ul>
      <p className="text-white mb-4">
        {t('privacyPolicy.section2_2Text')}
      </p>

      {/* 3. Bölüm: How We Use Your Information */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section3Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section3Text')}
      </p>
      <ul className="list-disc pl-6 mb-4 text-white">
        <li>{t('privacyPolicy.section3Item1')}</li>
        <li>{t('privacyPolicy.section3Item2')}</li>
        <li>{t('privacyPolicy.section3Item3')}</li>
      </ul>
      <p className="text-white mb-4">
        {t('privacyPolicy.section3Text2')}
      </p>

      {/* 4. Bölüm: Google Drive Integration */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section4Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section4Text')}
      </p>
      <ul className="list-disc pl-6 mb-4 text-white">
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section4Item1"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section4Item2"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section4Item3"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
      </ul>
      <p className="text-white mb-4">
        {t('privacyPolicy.section4Text2')}
      </p>

      {/* 5. Bölüm: Data Security */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section5Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section5Text')}
      </p>
      <ul className="list-disc pl-6 mb-4 text-white">
        <li>{t('privacyPolicy.section5Item1')}</li>
        <li>{t('privacyPolicy.section5Item2')}</li>
        <li>{t('privacyPolicy.section5Item3')}</li>
      </ul>
      <p className="text-white mb-4">
        {t('privacyPolicy.section5Text2')}
      </p>

      {/* 6. Bölüm: Data Sharing */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section6Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section6Text')}
      </p>
      <ul className="list-disc pl-6 mb-4 text-white">
        <li>{t('privacyPolicy.section6Item1')}</li>
        <li>{t('privacyPolicy.section6Item2')}</li>
      </ul>

      {/* 7. Bölüm: Children’s Privacy */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section7Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section7Text')}
      </p>

      {/* 8. Bölüm: Your Rights */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section8Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section8Text')}
      </p>
      <ul className="list-disc pl-6 mb-4 text-white">
        <li>{t('privacyPolicy.section8Item1')}</li>
        <li>{t('privacyPolicy.section8Item2')}</li>
        <li>{t('privacyPolicy.section8Item3')}</li>
      </ul>
      <p className="text-white mb-4">
        {t('privacyPolicy.section8Text2')}
      </p>

      {/* 9. Bölüm: Third-Party Services */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section9Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section9Text')}
      </p>

      {/* 10. Bölüm: Changes to This Privacy Policy */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section10Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section10Text')}
      </p>

      {/* 11. Bölüm: Contact Us */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        {t('privacyPolicy.section11Title')}
      </h2>
      <p className="text-white mb-4">
        {t('privacyPolicy.section11Text')}
      </p>
      <ul className="list-none mb-4 text-white">
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section11Item1"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section11Item2"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
        <li>
          <Trans
          t={t}
            i18nKey="privacyPolicy.section11Item3"
            components={[
              <></>,
              <strong className="font-bold text-[#00df9a]" />
            ]}
          />
        </li>
      </ul>
      <p className="text-white mb-4">
        {t('privacyPolicy.section11Text2')}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
