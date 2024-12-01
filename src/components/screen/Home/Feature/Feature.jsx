import React from 'react'
import { PiVan, PiPhoneCall  } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
const Feature = () => {
    return (
        <section className='pt-8 pb-12 border-t border-blue-200'>
            <div className="container_fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:px-10">
                   <div className="group flex gap-[17px] items-center cursor-pointer">
                   <div className="group-hover:bg-primary duration-200 xl:w-20 xl:h-20 w-16 h-16 rounded-complete flex justify-center items-center border border-blue-300 p-5 lg:p-3">
                    <PiVan className='text-primary text-[35px] group-hover:text-white duration-200'/>
                    </div>
                    <div className="flex flex-col lg:gap-1 xl:gap-2">
                        <h3 className='xl:text-xl lg:text-md font-semibold leading-7 -tracking-[.3px] text-black'>Free Shipping</h3>
                        <p className='xl:text-[16px] lg:text-[13px] font-[500] leading-6 -tracking-[.3px] text-dark'>On order over $1000</p>
                    </div>
                   </div>
                   <div className="group flex gap-[17px] items-center cursor-pointer">
                   <div className="group-hover:bg-primary duration-200 xl:w-20 xl:h-20 w-16 h-16 rounded-complete flex justify-center items-center border border-blue-300 p-5">
                    <MdAttachMoney  className='text-primary text-[35px] group-hover:text-white duration-200'/>
                    </div>
                    <div className="flex flex-col lg:gap-1 xl:gap-2">
                        <h3 className='xl:text-xl lg:text-md font-semibold leading-7 -tracking-[.3px] text-black'>Quick Payment</h3>
                        <p className='xl:text-[16px] lg:text-[13px] font-[500] leading-6 -tracking-[.3px] text-dark'>Online Quick Payment</p>
                    </div>
                   </div>
                   <div className="group flex gap-[17px] items-center cursor-pointer">
                   <div className="group-hover:bg-primary duration-200 xl:w-20 xl:h-20 w-16 h-16 rounded-complete flex justify-center items-center border border-blue-300 p-5">
                    <BsCart2  className='text-primary text-[35px] group-hover:text-white duration-200'/>
                    </div>
                    <div className="flex flex-col lg:gap-1 xl:gap-2">
                        <h3 className='xl:text-xl lg:text-md font-semibold leading-7 -tracking-[.3px] text-black'>Easy Return</h3>
                        <p className='xl:text-[16px] lg:text-[13px] font-[500] leading-6 -tracking-[.3px] text-dark'>Return within 24 Hours</p>
                    </div>
                   </div>
                   <div className="group flex gap-[17px] items-center cursor-pointer">
                   <div className="group-hover:bg-primary duration-200 xl:w-20 xl:h-20 w-16 h-16 rounded-complete flex justify-center items-center border border-blue-300 p-5">
                    <PiPhoneCall  className='text-primary text-[35px] group-hover:text-white duration-200'/>
                    </div>
                    <div className="flex flex-col lg:gap-1 xl:gap-2">
                        <h3 className='xl:text-xl lg:text-md font-semibold leading-7 -tracking-[.3px] text-black'>24/7 Support</h3>
                        <p className='xl:text-[16px] lg:text-[13px] font-[500] leading-6 -tracking-[.3px] text-dark'>Customer Online Support</p>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
