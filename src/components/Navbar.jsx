import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom'; // useLocation import et

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();  // Aktif sayfa bilgisini almak için kullanıyoruz

  const handleNav = () => {
    setNav(!nav);
  };

  // Linkin altını çizen stil
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#00df9a', // Yeşil renk
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        <Link to="/">HCK Apps</Link>
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link 
            to="/" 
            style={location.pathname === '/' ? activeLinkStyle : {}}  // Aktif sayfa kontrolü
          >
            Home
          </Link>
        </li>
        <li className='p-4'>
          <Link 
            to="/apps" 
            style={location.pathname === '/apps' ? activeLinkStyle : {}}
          >
            Apps
          </Link>
        </li>
        <li className='p-4 whitespace-nowrap'>
          <Link 
            to="/about-me" 
            style={location.pathname === '/about-me' ? activeLinkStyle : {}}
          >
            About Me
          </Link>
        </li>
        <li className='p-4'>
          <Link 
            to="/contact" 
            style={location.pathname === '/contact' ? activeLinkStyle : {}}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
          HCK Apps
        </h1>
        <li className='p-4 border-b border-gray-600'>
          <Link 
            to="/" 
            style={location.pathname === '/' ? activeLinkStyle : {}}
          >
            Home
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link 
            to="/apps" 
            style={location.pathname === '/apps' ? activeLinkStyle : {}}
          >
            Apps
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link 
            to="/about-me" 
            style={location.pathname === '/about-me' ? activeLinkStyle : {}}
          >
            About Me
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link 
            to="/contact" 
            style={location.pathname === '/contact' ? activeLinkStyle : {}}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
