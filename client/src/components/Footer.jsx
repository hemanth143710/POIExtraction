import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      {/* Wrap the logo in a Link component */}
      <Link to='/'>
        <img width={150} src={assets.aistudio1} alt='AI Studio Logo' />
      </Link>
      
      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @infyss.in | All rights reserved.
      </p>

      <div className='flex gap-1'>
        <img width={40} src={assets.facebook_icon} alt='Facebook' />
        <img width={40} src={assets.twitter_icon} alt='Twitter' />
        <img width={40} src={assets.google_plus_icon} alt='Google Plus' />
      </div>
    </div>
  );
};

export default Footer;
