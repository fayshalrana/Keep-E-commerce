import React from 'react'
import { Link } from 'react-router-dom'
import blogImg from '../../../../src/assets/images/aboutUs.webp'
import userImg from '../../../../src/assets/images/user.webp'
import { BsDot } from "react-icons/bs";
const ListItem = ({ isFirst }) => {
    return (
        <div className={`group ${isFirst ? 'md:col-span-2 ' : ''} flex flex-col md:flex-row gap-8 items-start`}>
            <div className={`${isFirst ? "h-[200px] md:h-[300px] xl:h-[500px]" : "h-[270px]"} w-full md:w-[50%]`}>
                <Link to="/blog/Details"><img className='w-full h-full object-cover' src={blogImg} alt="blog img" /></Link>
            </div>
            <div className="w-full md:w-[50%]">
                <div className="pb-5 md:pb-6">
                    <ul className='flex items-center gap-[9px]'>
                        <li className='text-[16px] font-[500] leading-6 -tracking-[.3px] text-primary'><Link>Fashion</Link></li>
                        <li className='text-[40px] text-[#AFBACA]'><BsDot /></li>
                        <li className='text-[16px] font-[400] leading-6 -tracking-[.3px] text-dark'>12 Dec 2022</li>
                    </ul>
                    <Link to="/blog/Details"><h2 className='xl:text-[22px] lg:text-[18px] font-[500] leading-[30px] md:leading-6 -tracking-[.3px] text-black group-hover:text-primary pt-2 pb-4 xl:pb-6'>As People Move Out of Big Cities,
                        Fashion Retail Follows</h2></Link>
                    <p className='text-[16px] font-[400] leading-6 -tracking-[.3px] text-dark'>Until recently, the prevailing view assumed lorem ipsum  was born as a nonsense text nothing Before & After magazine.</p>
                </div>
                <div className="flex gap-[10px] items-center">
                    <div className="w-[40px] h-[40px] overflow-hidden rounded-complete">
                        <Link to="#"><img className='w-full h-full object-cover' src={userImg} alt="admin image " /></Link>
                    </div>
                    <Link to='#'><h3 className='text-[16px] font-[500] leading-6 -tracking-[.3px] text-dark'>Cameron Williamson</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default ListItem
