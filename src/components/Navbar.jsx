import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const { t } = useTranslation("navbar");

  const handleNav = () => {
    setNav(!nav);
  };

  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#00df9a',
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        <Link to="/">HCK Apps</Link>
      </h1>
      {/* Desktop menu */}
      <ul className='hidden md:flex'>
        <li className='p-4 whitespace-nowrap'>
          <Link 
            to="/" 
            style={location.pathname === '/' ? activeLinkStyle : {}}
          >
            {t('navbar.home')}
          </Link>
        </li>
        <li className='p-4'>
          <Link 
            to="/apps" 
            style={location.pathname === '/apps' ? activeLinkStyle : {}}
          >
            {t('navbar.apps')}
          </Link>
        </li>
        <li className='p-4'>
          <Link 
            to="/extensions" 
            style={location.pathname === '/extensions' ? activeLinkStyle : {}}
          >
            {t('navbar.extensions')}
          </Link>
        </li>
        <li className='p-4'>
          <Link 
            to="/websites" 
            style={location.pathname === '/websites' ? activeLinkStyle : {}}
          >
            {t('navbar.websites')}
          </Link>
        </li>
        <li className='p-4 whitespace-nowrap'>
          <Link 
            to="/about-me" 
            style={location.pathname === '/about-me' ? activeLinkStyle : {}}
          >
            {t('navbar.aboutme')}
          </Link>
        </li>
        <li className='p-4'>
          <Link 
            to="/contact" 
            style={location.pathname === '/contact' ? activeLinkStyle : {}}
          >
            {t('navbar.contact')}
          </Link>
        </li>
      </ul>
      {/* Mobile menu icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile menu */}
      <ul className={
        nav
          ? 'fixed left-0 top-0 w-[60%] h-full bg-black ease-in-out duration-500 z-50'
          : 'fixed left-[-100%] ease-in-out duration-500'
      }>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
          HCK Apps
        </h1>
        {[
          { to: '/', label: t('navbar.home') },
          { to: '/apps', label: t('navbar.apps') },
          { to: '/extensions', label: t('navbar.extensions') },
          { to: '/websites', label: t('navbar.websites') },
          { to: '/about-me', label: t('navbar.aboutme') },
          { to: '/contact', label: t('navbar.contact') },
        ].map((item, index) => (
          <li
            key={index}
            onClick={handleNav}
            className='p-4 border-b border-gray-600'
          >
            <Link
              to={item.to}
              className='block w-full h-full'
              style={location.pathname === item.to ? activeLinkStyle : {}}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;