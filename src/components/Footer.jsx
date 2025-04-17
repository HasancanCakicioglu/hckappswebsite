import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaStackOverflow,
  FaGooglePlay
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <div className='w-full bg-gray-900 text-gray-300 py-8 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6'>
        {/* HCK Apps Section */}
        <div>
          <h1 className='text-2xl font-bold text-[#00df9a]'>{t('footer.hckapps')}</h1>
          <p className='py-2 text-sm'>
            {t('footer.about')}
          </p>
          <div className='flex justify-between md:w-[60%] my-4'>
            <a href="https://linkedin.com/in/hasancan-çakıcıoğlu-a8560a255" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </a>
            <a href="https://github.com/HasancanCakicioglu" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size={25} />
            </a>
            <a href="https://medium.com/@hckecommerce" target="_blank" rel="noopener noreferrer">
              <FaMedium size={25} />
            </a>
            <a href="https://stackoverflow.com/users/17810039/hasancan-%c3%87ak%c4%b1c%c4%b1o%c4%9flu?tab=profile" target="_blank" rel="noopener noreferrer">
              <FaStackOverflow size={25} />
            </a>
            {/* Google Play Store Icon */}
            <a href="https://play.google.com/store/apps/developer?id=HCK+Apps" target="_blank" rel="noopener noreferrer">
              <FaGooglePlay size={25} />
            </a>
          </div>
        </div>

        {/* Solutions, Support, and Company Sections */}
        <div className=' lg:col-span-2 grid sm:grid-cols-2 gap-4 mt-4'>
          {/* Solutions Section */}
          <div className='flex flex-col items-center'>
            <h6 className='font-medium text-gray-400 text-lg'>{t('footer.solutions')}</h6>
            <ul className='text-center'>
              <li className='py-1 text-sm'><Link to={"/apps"}>{t('footer.mobileapps')}</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className='flex flex-col items-center'>
            <h6 className='font-medium text-gray-400 text-lg'>{t('footer.support')}</h6>
            <ul className='text-center'>
              <li className='py-1 text-sm'><Link to={"/contact"}>{t('footer.helpcenter')}</Link></li>
              <li className='py-1 text-sm'><Link to={"/contact"}>{t('footer.contact')}</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className='flex flex-col items-center'>
            <h6 className='font-medium text-gray-400 text-lg'>{t('footer.company')}</h6>
            <ul className='text-center'>
              <li className='py-1 text-sm'><Link to={"/about-me"}>{t('footer.aboutme')}</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className='flex flex-col items-center'>
            <h6 className='font-medium text-gray-400 text-lg'>{t('footer.legal')}</h6>
            <ul className='text-center'>
              <li className='py-1 text-sm'><Link to={"/privacy-policy"}>{t('footer.privacypolicyvoidnote')}</Link></li>
              <li className='py-1 text-sm'><Link to={"/privacy-policy-cryptobex"}>{t('footer.privacypolicycrypobex')}</Link></li>
              <li className='py-1 text-sm'><Link to={"/privacy-policy-phototranslator"}>{t('footer.privacypolicyphototranslator')}</Link></li>
              <li className='py-1 text-sm'><Link to={"/privacy-policy-stopwatchskull"}>{t('footer.privacypolicystopwatch')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
