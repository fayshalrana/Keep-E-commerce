import React from 'react'
import errorPage from '../../../../assets/images/errorPage.png'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className='pt-5 lg:pt-10 pb-5 lg:pb-32'>
            <div className="container_fluid">
                <div className="px-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="w-full lg:h-screen 2xl:h-auto hidden md:inline">
                        <img className='w-full h-full object-cover' src={errorPage} alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className='text-[18px] font-[600] leading-[24px] -tracking-[.3px] text-primary'>404 Error</h3>
                        <h2 className='text-[30px] lg:text-[36px] font-[600] leading-[42px] md:leading-[48px] -tracking-[.5px] md:-tracking-[1px] text-black pb-3'>Oops! Looks Like You Took a
                            Wrong Turn. Let's Get You Back
                            on Track!</h2>
                        <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>
                        Sorry, the page you are looking for doesn’t exist or has been moved. Try searching out site:
                        </p>
                        <div className="flex gap-[14px] flex-col lg:flex-row items-center mt-[43px]">
                            <Link to='/' className='py-4 px-5 rounded bg-primary flex justify-center items-center text-[16px] lg:text-[18px] font-[500] leading-[24px] -tracking-[.2px] text-white w-full lg:w-auto whitespace-nowrap hover:text-primary hover:bg-white hover:border-blue-600 border duration-200'>Back to Home</Link>
                            <span>or</span>
                            <div className="w-full ml-auto px-[14px] border border-blue-200 flex justify-between items-center rounded-md">
                                <input className='w-full py-[17px] focus:outline-none' type="text" placeholder='Search page name' />
                               <button type='button'><IoSearch className='text-[20px] text-gray-400'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner
