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

  const socialLinks = [
    {
      href: "https://linkedin.com/in/hasancan-çakıcıoğlu-a8560a255",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/HasancanCakicioglu",
      icon: FaGithubSquare,
      label: "GitHub",
    },
    {
      href: "https://medium.com/@hckecommerce",
      icon: FaMedium,
      label: "Medium",
    },
    {
      href: "https://stackoverflow.com/users/17810039/hasancan-%c3%87ak%c4%b1c%c4%b1o%c4%9flu?tab=profile",
      icon: FaStackOverflow,
      label: "Stack Overflow",
    },
    {
      href: "https://play.google.com/store/apps/developer?id=HCK+Apps",
      icon: FaGooglePlay,
      label: "Google Play",
    },
  ];

  const privacyPolicies = [
    { path: "/privacy-policy", labelKey: "footer.privacypolicyvoidnote" },
    { path: "/privacy-policy-notebooksurvivors", labelKey: "footer.privacypolicynotebooksurvivors" },
    { path: "/privacy-policy-everfeast", labelKey: "footer.privacypolicyeverfeast" },
    { path: "/privacy-policy-boringofflinegames", labelKey: "footer.privacypolicyboringofflinegames" },
    { path: "/privacy-policy-copdodger", labelKey: "footer.privacypolicycopdodger" },
    { path: "/privacy-policy-graviton", labelKey: "footer.privacypolicygraviton" },
    { path: "/privacy-policy-minesweeper", labelKey: "footer.privacypolicyminesweeper" },
    { path: "/privacy-policy-weechess", labelKey: "footer.privacypolicyweechess" },
    { path: "/privacy-policy-101calculator", labelKey: "footer.privacypolicy101calculator" },
    { path: "/privacy-policy-phototranslator", labelKey: "footer.privacypolicyphototranslator" },
    { path: "/privacy-policy-cryptobex", labelKey: "footer.privacypolicycrypobex" },
    { path: "/privacy-policy-stopwatchskull", labelKey: "footer.privacypolicystopwatch" },
    { path: "/privacy-policy-taptapup", labelKey: "footer.privacypolicytaptapup" },
  ];

  return (
    <footer className="w-full bg-[#0a0d14] border-t border-gray-800/80 text-gray-300 pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Brand Info & Socials (4 columns on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="text-2xl sm:text-3xl font-extrabold text-[#00df9a] tracking-tight inline-block hover:opacity-90 transition-opacity">
              {t('footer.hckapps')}
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t('footer.about')}
            </p>
            {/* Social Icons */}
            <div className="pt-2">
              <div className="flex items-center space-x-2.5">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#00df9a] hover:border-[#00df9a]/40 hover:bg-[#00df9a]/10 transition-all duration-200"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions / Discover (2 columns on lg) */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#00df9a] pl-2.5 mb-4">
              {t('footer.solutions')}
            </h6>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/apps" className="text-gray-400 hover:text-[#00df9a] transition-colors block">
                  {t('footer.mobileapps')}
                </Link>
              </li>
              <li>
                <Link to="/extensions" className="text-gray-400 hover:text-[#00df9a] transition-colors block">
                  {t('footer.extensions')}
                </Link>
              </li>
              <li>
                <Link to="/websites" className="text-gray-400 hover:text-[#00df9a] transition-colors block">
                  {t('footer.websites')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support (2 columns on lg) */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#00df9a] pl-2.5 mb-4">
              {t('footer.company')}
            </h6>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about-me" className="text-gray-400 hover:text-[#00df9a] transition-colors block">
                  {t('footer.aboutme')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#00df9a] transition-colors block">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#00df9a] transition-colors block">
                  {t('footer.helpcenter')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Privacy Policies (4 columns on lg) */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#00df9a] pl-2.5">
                {t('footer.legal')}
              </h6>
              <span className="text-[11px] font-mono text-[#00df9a] bg-[#00df9a]/10 px-2 py-0.5 rounded-full border border-[#00df9a]/20">
                {privacyPolicies.length} Apps
              </span>
            </div>
            {/* 2-column subgrid so 13 items look compact, tidy, and balanced */}
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-[13px]">
              {privacyPolicies.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#00df9a] transition-colors duration-150 block truncate"
                    title={t(item.labelKey)}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} HCK Apps. {t('footer.copyright')}</p>
          <div className="flex items-center space-x-1.5 text-gray-400">
            <span>Built with</span>
            <span className="text-[#00df9a]">♥</span>
            <span>by</span>
            <Link to="/about-me" className="text-gray-300 hover:text-[#00df9a] transition-colors font-medium">
              {t('footer.designedby')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
