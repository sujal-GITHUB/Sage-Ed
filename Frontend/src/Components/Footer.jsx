import React from 'react'

import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import X from '../assets/X.svg'

function Footer() {
  return (
    <div className='pt-6 flex gap-8 items-center'>
      <div className='flex gap-4 '>
        <img src={Facebook} alt="" className='cursor-pointer'/>
        <img src={Instagram} alt="" className='cursor-pointer'/>
        <img src={X} alt="" className='cursor-pointer'/>
      </div>

      <div className='flex gap-4'>
        <span className='cursor-pointer'>
          Privacy
        </span>

        <span className='cursor-pointer'>
          Terms
        </span>

        <span className='cursor-pointer'>
          Other projects
        </span>

        <span className='cursor-pointer'>
          Help center
        </span>
      </div>
    </div>
  )
}

export default Footer