import React from 'react'
import { FaFacebook, FaDribbble, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LeaderCart = ({img, name, ocap}) => {
  return (
    <div className="flex flex-col gap-6 group">
      <div className='relative'>
        <img className='w-full' src={img} alt="" />
        <div className="flex gap-4 items-center absolute bg-white bottom-2 left-[50%] -translate-x-[50%] px-4 py-[10px] rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 transform duration-300">
        <div className="w-[28px] h-[28px] flex justify-center items-center">
        <Link to="/" className='w-full h-full'><FaFacebook className='w-full h-full text-primary'/></Link>
        </div>
        <div className="w-[28px] h-[28px] flex justify-center items-center">
       
        <Link to="/" className='w-full h-full'><FaDribbble className='w-full h-full text-dark'/></Link>
        </div>
        <div className="w-[28px] h-[28px] flex justify-center items-center">
        
        <Link to="/" className='w-full h-full'><FaGithub className='w-full h-full text-dark'/></Link>
        </div>
      </div>
      </div>
      <div className="">
      <h3 className="text-[22px] font-[600] leading-[34px] -tracking-[.4px] text-black">{name}</h3>
      <p className="text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-primary">{ocap}</p>
      </div>
  
    </div>
  )
}

export default LeaderCart
