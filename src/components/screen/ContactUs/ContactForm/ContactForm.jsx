import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
const ContactForm = () => {
  return (
    <section className='py-[80px]'>
      <div className="container_fluid">
        <div className="md:px-16 lg:px-56">
            <div className="flex flex-col justify-center items-center">
            <h3 className='text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-primary '>Need Help</h3>
                    <h2 className='text-[30px] lg:text-[36px] font-[600] leading-[40px] lg:leading-[48px] -tracking-[.5px] lg:-tracking-[1px] text-black pt-2'>Tell Us About Your Project</h2>
            </div>
            <div className="mt-12">
                <form action="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                        <div className="flex justify-start gap-[6px] flex-col md:pb-6">
                            <label className='text-[14px] font-500 leading-[22px] -tracking-[.2px] text-black' htmlFor="firstName">First name</label>
                            <input className='text-dark text-[16px] font-500 leading-[24px] border border-blue-200 focus:border-blue-400 -tracking-[.2px] py-2 px-3 rounded-md focus:outline-none' id='firstName' type="text" placeholder='First name' required/>
                        </div>
                        <div className="flex justify-start gap-[6px] flex-col">
                            <label className='text-[14px] font-500 leading-[22px] -tracking-[.2px] text-black' htmlFor="lastName">Last name</label>
                            <input className='text-dark text-[16px] font-500 leading-[24px] border border-blue-200 focus:border-blue-400 -tracking-[.2px] py-2 px-3 rounded-md focus:outline-none' id='lastName' type="text" placeholder='Last name' required/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 md:pb-6">
                        <div className="flex justify-start gap-[6px] flex-col">
                            <label className='text-[14px] font-500 leading-[22px] -tracking-[.2px] text-black' htmlFor="Email">Email</label>
                            <input className='text-dark text-[16px] font-500 leading-[24px] border border-blue-200 focus:border-blue-400 -tracking-[.2px] py-2 px-3 rounded-md focus:outline-none' type="email" id='Email' placeholder='Your Email' required/>
                        </div>
                        <div className="flex justify-start gap-[6px] flex-col">
                            <label className='text-[14px] font-500 leading-[22px] -tracking-[.2px] text-black' htmlFor="phone">Phone number</label>
                            <input className='text-dark text-[16px] font-500 leading-[24px] border border-blue-200 focus:border-blue-400 -tracking-[.2px] py-2 px-3 rounded-md focus:outline-none' type="number" id='phone' placeholder='+1 (205) 555-0100' required/>
                        </div>
                    </div>
                    <div className="flex justify-start gap-[6px] flex-col">
                            <label className='text-[14px] font-500 leading-[22px] -tracking-[.2px] text-black' htmlFor="">Message</label>
                            <textarea rows={6} className='text-dark text-[16px] font-500 leading-[24px] border border-blue-200 focus:border-blue-400 -tracking-[.2px] py-2 px-3 rounded-md focus:outline-none resize-none' type="text" placeholder='Enter a description...' required/>
                        </div>
                        <div className="mt-12 flex justify-center">
                            <button type='submit' className='hover:bg-white/40 hover:text-primary duration-200 border border-transparent hover:border-primary py-4 px-5 rounded bg-primary flex justify-center items-center text-[16px] lg:text-[18px] font-[500] leading-[24px] -tracking-[.2px] text-white w-full md:w-auto gap-2'>Send Message <LuArrowUpRight /></button>
                        </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
