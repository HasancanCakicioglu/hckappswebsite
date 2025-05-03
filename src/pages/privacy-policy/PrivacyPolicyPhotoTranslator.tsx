import React from 'react';
// react-i18next kütüphanesinden gerekli hook'ları ve bileşenleri import edin
// Projenizde kurulu olduğundan emin olun: npm install react-i18next i18next
import { useTranslation, Trans } from 'react-i18next';

// Gizlilik Politikası bileşeni
const PrivacyPolicyPhotoTranslator = () => {
  // Çeviri fonksiyonunu (t) ve namespace'i alın
  // 'privacyPolicyPhotoTranslator' namespace'i JSON dosyanızdaki anahtar ile eşleşmelidir
  const { t } = useTranslation('privacy-policy-phototranslator');

  // E-posta ve web sitesi gibi dinamik olabilecek verileri alın (JSON'dan veya başka bir kaynaktan)
  const contactEmail = t('photoTranslator.contactEmail');

  return (
    // Ana kapsayıcı div. Temel stil için Tailwind CSS sınıfları kullanıldı.
    // Projenizde Tailwind CSS kurulu ve yapılandırılmış olmalıdır.
    // Alternatif olarak kendi CSS sınıflarınızı kullanabilirsiniz.
    <div className="max-w-3xl mx-auto p-6 text-gray-200 dark:bg-black dark:text-white font-sans"> {/* Dark modda tüm metinler beyaz */}
      
      {/* Politika Başlığı */}
      <h1 className="text-3xl font-bold mb-4 text-gray-200 dark:text-white">
        {t('photoTranslator.title')}
      </h1>
      {/* Yürürlük Tarihi */}
      <p className="mb-6 text-sm text-gray-300 dark:text-white">
        <strong className="text-gray-200 dark:text-white">{t('photoTranslator.effectiveDateLabel')}</strong>
        {t('photoTranslator.effectiveDate')}
      </p>

      {/* Bölüm 1: Giriş */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section1Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section1Text')}</p>
        <p className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-400 text-yellow-800 dark:text-white rounded-md">
          <strong className="font-semibold">{t('photoTranslator.importantNoteLabel')}</strong>
          {t('photoTranslator.importantNote')}
        </p>
      </section>

      {/* Bölüm 2: Topladığımız Bilgiler */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section2Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section2Text1')}</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="photoTranslator.section2ListItem1"
              components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="photoTranslator.section2ListItem2"
              components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="photoTranslator.section2ListItem3"
              components={[<strong className="font-semibold text-gray-200 dark:text-white" />]}
            />
          </li>
        </ul>
        <p className="mt-4 font-semibold text-gray-300 dark:text-white leading-relaxed">
          {t('photoTranslator.section2Text2')}
        </p>
      </section>

      {/* Bölüm 3: Bilgilerinizi Nasıl Kullanıyoruz */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section3Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section3Text')}</p>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300 dark:text-white">
          <li>{t('photoTranslator.section3ListItem1')}</li>
          <li>{t('photoTranslator.section3ListItem2')}</li>
          <li>{t('photoTranslator.section3ListItem3')}</li>
        </ul>
        <p className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-400 text-blue-800 dark:text-white rounded-md">
          <strong className="font-semibold">{t('photoTranslator.processingNoteLabel')}</strong>
          {t('photoTranslator.processingNote')}
        </p>
      </section>

      {/* Bölüm 4: Veri Güvenliği */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section4Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section4Text')}</p>
      </section>

      {/* Bölüm 5: Çocukların Gizliliği */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section5Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section5Text')}</p>
      </section>

      {/* Bölüm 6: Üçüncü Taraf Hizmetler */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section6Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section6Text')}</p>
      </section>

      {/* Bölüm 7: Bu Gizlilik Politikasındaki Değişiklikler */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section7Title')}
        </h2>
        <p className="leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section7Text')}</p>
      </section>

      {/* Bölüm 8: Bize Ulaşın */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200 dark:text-white">
          {t('photoTranslator.section8Title')}
        </h2>
        <p className="mb-3 leading-relaxed text-gray-300 dark:text-white">{t('photoTranslator.section8Text')}</p>
        <ul className="list-none pl-0 mt-2 space-y-2">
          <li>
            <Trans
              t={t}
              i18nKey="photoTranslator.section8ListItem1"
              values={{ contactEmail }}
              components={[
                <strong className="font-semibold text-gray-200 dark:text-white" />,
                <p className="text-blue-600 dark:text-blue-400 hover:underline" />
              ]}
            />
          </li>
          
        </ul>
      </section>

      {/* Kapanış Metni */}
      <p className="mt-6 text-sm text-gray-300 dark:text-white italic">
        {t('photoTranslator.finalText')}
      </p>
    </div>
  );
};

export default PrivacyPolicyPhotoTranslator;
