import React from 'react'
import Logo from '../assets/images/logo.png'

const BrandLogo = () => {
  
  return (
    <div className="relative w-[180px] h-[180px]">
          <div className="absolute inset-0 bg-gradient-radial from-[#5BB834] to-white blur-md rounded-full"></div>
          <img 
            src={Logo}
            alt="Logo"
            className="relative z-10 w-full object-cover rounded-full m-2"
          />
        </div>
  )
}

export default BrandLogo
