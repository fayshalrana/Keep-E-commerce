import React from 'react'

const Payment = () => {
  return (
    <div className='px-6 py-10 border-2 rounded-md flex flex-col items-center gap-4'>
      <div className="grid grid-cols-2 gap-2 md:gap-6 items-center justify-between">
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="cardNumber">Card number*</label>
            <input type='Number' id='cardNumber' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' placeholder='' required/>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="Expiration">Expiration*</label>
            <input id='Expiration' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-6 items-center justify-between">
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="CVV">CVV*</label>
            <input type='number' id='CVV' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' placeholder='' required/>
        </div>
        <div className="flex flex-col gap-[10px]">
            <label className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer' htmlFor="Country">Country*</label>
            <input id='Country' className='w-full border-2 rounded-md py-3 px-[14px] focus:ring-0 focus:outline-none' type="text" placeholder='' required/>
        </div>
    </div>
    <div className="w-full">
      <button type='button' className='py-4 px-5 rounded-md bg-primary text-white w-full text-[16px] md:text-[18px] font-[500] leading-[24px] -tracking-[.3px] hover:text-primary hover:bg-white border hover:border-blue-700 duration-200'>Purchase</button>
    </div>
    </div>
  )
}

export default Payment
