import React from 'react';

import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import X from '../../assets/X.svg';

function Footer() {
  return (
    <div className='pt-6 flex flex-col sm:flex-row justify-between items-center sm:gap-8'>
      {/* Social Media Icons */}
      <div className='flex gap-4 mb-4 sm:mb-0'>
        <img src={Facebook} alt="Facebook" className='cursor-pointer'/>
        <img src={Instagram} alt="Instagram" className='cursor-pointer'/>
        <img src={X} alt="X" className='cursor-pointer'/>
      </div>

      {/* Links Section */}
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <span className='cursor-pointer'>Privacy</span>
        <span className='cursor-pointer'>Terms</span>
        <span className='cursor-pointer'>Other projects</span>
        <span className='cursor-pointer'>Help center</span>
      </div>
    </div>
  );
}

export default Footer;