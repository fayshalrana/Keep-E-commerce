import React from 'react'
import { BsDot } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import userImg from '../../../../assets/images/user.jpg'
const Banner = () => {
    return (
        <section className='py-[56px]'>
            <div className="container_fluid">
                <div className="flex flex-col items-center gap-3 lg:gap-6 mx-auto w-full md:w-[80%] xl:w-[60%] justify-center">
                    <div className="">
                        <ul className='flex items-center gap-[9px]'>
                            <li className='text-[16px] font-[500] leading-6 -tracking-[.3px] text-primary'><Link>Fashion</Link></li>
                            <li className='text-[40px] text-[#AFBACA]'><BsDot /></li>
                            <li className='text-[16px] font-[400] leading-6 -tracking-[.3px] text-dark'>12 Dec 2022</li>
                        </ul>
                       
                    </div>
                    <h1 className='text-[32px] lg:text-[48px] font-[600] leading-[40px] lg:leading-[60px] -tracking-[.5px] lg:-tracking-[1.75px] text-black text-center'>6 Ways to Instantly Improve Your Fashion Design Done</h1>
                        <div className="flex gap-[10px] items-center">
                            <div className="w-[40px] h-[40px] overflow-hidden rounded-complete">
                                <Link to="#"><img className='w-full h-full object-cover' src={userImg} alt="admin image " /></Link>
                            </div>
                            <Link to='#'><h3 className='text-[16px] font-[500] leading-6 -tracking-[.3px] text-dark'>Cameron Williamson</h3></Link>
                        </div>
                </div>
            </div>

        </section>
    )
}

export default Banner
