import React from 'react'

const BillingDetails = () => {
  return (
    <div className="flex gap-6 flex-col">
    <div className="">
        <h2 className='text-[26px] lg:text-[32px] font-[600] leading-[42px] -tracking-[.5px] text-black'>Billing details</h2>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-6 items-center justify-between">
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="firstName">First Name*</label>
            <input id='firstName' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="lastName">Last Name*</label>
            <input id='lastName' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
    </div>
    <div className="flex flex-col gap-[10px]">
        <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="emailAD">Email Address*</label>
        <input type='email' id='emailAD' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none'  placeholder='' required/>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-6 items-center justify-between">
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="phone">Phone Number*</label>
            <input type='number' id='phone' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' placeholder='' required/>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="Country">Country*</label>
            <input id='Country' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-6 items-center justify-between">
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="Home">Home Address*</label>
            <input type='text' id='Home' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none'  placeholder='' required/>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="Town">Town/City*</label>
            <input  id='Town' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-6 items-center justify-between">
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="Home">State*</label>
            <input id='Home' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="Town">State*</label>
            <input  id='Town' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
    </div>
    <div className="flex gap-2 items-center">
        <input id='otherAddress' className='w-5 h-5 border-2 rounded-md border-blue-300' type="checkbox" />
        <label htmlFor="otherAddress" className='text-[17px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Ship to a different address?</label>
    </div>
    <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="note">Any Note</label>
            <textarea rows={6} id='note' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none resize-none' type="text" placeholder='Notes about your order, e.g. special notes for your delivery' required />
        </div>
</div>
  )
}

export default BillingDetails
