import React from 'react'
import social from '../../../../assets/images/social.png'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
const InstaItem = ({socialImg}) => {
  return (
    <div className='h-[298px] relative group'>
      <img className='w-full h-full object-cover' src={socialImg} alt="social image" />
      <div className="flex w-full h-full justify-center items-center absolute top-0 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transform duration-300">
        <Link className='hover:text-white hover:bg-primary duration-200 p-4 rounded-complete text-4xl text-primary bg-white/70'><FaInstagram /></Link>
      </div>
    </div>
  )
}

export default InstaItem
