import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyCryptobex = () => {
  const { t } = useTranslation('privacy-policy-cryptobex');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black min-h-screen text-gray-200">
      {/* Başlık */}
      <h1 className="text-3xl font-bold mb-4 text-white">
        {t('cryptobex.title')}
      </h1>
      <p className="mb-6">
        <strong className="text-white">{t('cryptobex.effectiveDate')}</strong>
      </p>

      {/* 1. Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section1Title')}
        </h2>
        <p>{t('cryptobex.section1Text')}</p>
      </section>

      {/* 2. Information We Collect */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section2Title')}
        </h2>
        <p>{t('cryptobex.section2Text')}</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <Trans 
                t={t}
              i18nKey="cryptobex.section2ListItem1"
              components={[<strong className="text-white" />]}
            />
          </li>
          <li>
            <Trans 
            t={t}
              i18nKey="cryptobex.section2ListItem2"
              components={[<strong className="text-white" />]}
            />
          </li>
        </ul>
      </section>

      {/* 3. How We Use Your Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section3Title')}
        </h2>
        <p>{t('cryptobex.section3Text')}</p>
        <ul className="list-disc pl-6 mt-2">
          <li>{t('cryptobex.section3ListItem1')}</li>
          <li>{t('cryptobex.section3ListItem2')}</li>
          <li>{t('cryptobex.section3ListItem3')}</li>
        </ul>
      </section>

      {/* 4. Google OAuth and JWT */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section4Title')}
        </h2>
        <p>{t('cryptobex.section4Text')}</p>
      </section>

      {/* 5. Data Security */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section5Title')}
        </h2>
        <p>{t('cryptobex.section5Text')}</p>
      </section>

      {/* 6. Children's Privacy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section6Title')}
        </h2>
        <p>{t('cryptobex.section6Text')}</p>
      </section>

      {/* 7. Your Rights */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section7Title')}
        </h2>
        <p>{t('cryptobex.section7Text')}</p>
        <ul className="list-disc pl-6 mt-2">
          <li>{t('cryptobex.section7ListItem1')}</li>
          <li>{t('cryptobex.section7ListItem2')}</li>
          <li>{t('cryptobex.section7ListItem3')}</li>
          <li>{t('cryptobex.section7ListItem4')}</li>
        </ul>
      </section>

      {/* 8. Third-Party Services */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section8Title')}
        </h2>
        <p>{t('cryptobex.section8Text')}</p>
      </section>

      {/* 9. Changes to This Privacy Policy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section9Title')}
        </h2>
        <p>{t('cryptobex.section9Text')}</p>
      </section>

      {/* 10. Contact Us */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {t('cryptobex.section10Title')}
        </h2>
        <p>{t('cryptobex.section10Text')}</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <Trans 
            t={t}
              i18nKey="cryptobex.section10ListItem1"
              components={[<strong className="text-white" />]}
            />
          </li>
          <li>
            <Trans 
            t={t}
              i18nKey="cryptobex.section10ListItem2"
              components={[<strong className="text-white" />]}
            />
          </li>
        </ul>
      </section>

      <p>{t('cryptobex.finalText')}</p>
    </div>
  );
};

export default PrivacyPolicyCryptobex;
