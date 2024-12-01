import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

const BannerSection = ({currentPage}) => {
  const currentPath = useLocation()
  return (
  <section className='pb-10'>
      <div className="text-center flex justify-center items-center flex-col pb-10 md:pb-0">
      <h2 className="text-2xl md:text-4xl font-semibold leading-[48px] -tracking-[1px] capitalize text-black">
        {currentPage}
      </h2>
      <ul className="pt-1 md:pt-4 flex gap-2 items-center">
        <li><Link to='/' className="text-[14px] font-medium leading-[22px] -tracking-[.2px] capitalize text-primary">Home page</Link></li>
        <MdKeyboardArrowRight className="text-[14px] " />
        {
          currentPath.pathname === "/details" && <><li><Link to='/shop' className="text-[14px] font-medium leading-[22px] -tracking-[.2px] capitalize text-primary">Shop</Link></li>
          <MdKeyboardArrowRight className="text-[14px] " /></>
        }
        <li><Link className="text-[14px] font-medium leading-[22px] -tracking-[.2px] capitalize text-dark">{currentPage}</Link></li>
      </ul>
    </div>
  </section>
  )
}

export default BannerSection
