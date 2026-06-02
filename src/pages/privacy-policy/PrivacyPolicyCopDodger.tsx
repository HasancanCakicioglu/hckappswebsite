import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicyCopDodger = () => {
  const { t } = useTranslation('privacy-policy-copdodger');
  const contactEmail = t('copdodger.contactEmail');

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('copdodger.title')}
      </h1>

      {/* Last Updated Date */}
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('copdodger.effectiveDateLabel')}</strong>
        {t('copdodger.effectiveDate')}
      </p>

      {/* Intro */}
      <p className="mb-6 leading-relaxed text-gray-300 dark:text-white">
        <Trans
          t={t}
          i18nKey="copdodger.intro"
          components={[
            <React.Fragment key="0" />,
            <strong key="1" className="font-bold text-[#00df9a]" />
          ]}
        />
      </p>

      {/* Section 1: Data We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section1Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>{t('copdodger.section1Item1')}</li>
          <li>{t('copdodger.section1Item2')}</li>
          <li>{t('copdodger.section1Item3')}</li>
          <li>{t('copdodger.section1Item4')}</li>
          <li>{t('copdodger.section1Item5')}</li>
          <li>{t('copdodger.section1Item6')}</li>
          <li>{t('copdodger.section1Item7')}</li>
        </ul>
      </section>

      {/* Section 2: How We Use Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section2Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>{t('copdodger.section2Item1')}</li>
          <li>{t('copdodger.section2Item2')}</li>
          <li>{t('copdodger.section2Item3')}</li>
          <li>{t('copdodger.section2Item4')}</li>
          <li>{t('copdodger.section2Item5')}</li>
          <li>{t('copdodger.section2Item6')}</li>
        </ul>
      </section>

      {/* Section 3: Third-Party Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section3Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section3Text')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-white mb-4">
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.section3Item1"
              components={[<strong key="0" className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.section3Item2"
              components={[<strong key="0" className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.section3Item3"
              components={[<strong key="0" className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.section3Item4"
              components={[<strong key="0" className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.section3Item5"
              components={[<strong key="0" className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.section3Item6"
              components={[<strong key="0" className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.section3Item7"
              components={[<strong key="0" className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
        </ul>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section3Footer')}
        </p>
      </section>

      {/* Section 4: Ads and Privacy Preferences */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section4Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section4Text1')}
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          <Trans
            t={t}
            i18nKey="copdodger.section4Text2"
            components={[
              <React.Fragment key="0" />,
              <strong key="1" className="font-semibold text-gray-200 dark:text-white" />
            ]}
          />
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section4Text3')}
        </p>
      </section>

      {/* Section 5: In-App Purchases */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section5Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section5Text1')}
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section5Text2')}
        </p>
      </section>

      {/* Section 6: Game Services, Cloud Save, and Leaderboards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section6Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section6Text1')}
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section6Text2')}
        </p>
      </section>

      {/* Section 7: Locally Stored Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section7Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section7Text1')}
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section7Text2')}
        </p>
      </section>

      {/* Section 8: Children's Privacy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section8Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section8Text')}
        </p>
      </section>

      {/* Section 9: Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section9Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section9Text')}
        </p>
      </section>

      {/* Section 10: Data Retention */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section10Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section10Text')}
        </p>
      </section>

      {/* Section 11: Your Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section11Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section11Text1')}
        </p>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section11Text2')}
        </p>
      </section>

      {/* Section 12: Changes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section12Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section12Text')}
        </p>
      </section>

      {/* Section 13: Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('copdodger.section13Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">
          {t('copdodger.section13Text')}
        </p>
        <ul className="list-none pl-0 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="copdodger.emailLabel"
              values={{ contactEmail }}
              components={[
                <strong key="0" className="font-semibold text-gray-200 dark:text-white" />,
                <a key="1" className="text-blue-600 dark:text-blue-400 hover:underline" href={`mailto:${contactEmail}`} aria-label={contactEmail} />
              ]}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicyCopDodger;
