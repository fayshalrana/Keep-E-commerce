import React from 'react'
import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <section className='py-6'>
        <div className="container_fluid">
            <div className="lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                <div className="flex flex-col justify-center items-center px-6 py-14 gap-5 border hover:shadow-lg cursor-pointer duration-200">
                    <h2 className='text-[24px] font-[600] leading-[34px] -tracking-[.4px] text-black'>London Office</h2>
                    <div className="lg:w-[250px] text-center flex flex-col gap-4">
                    <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    <Link to='tel:302 555-0107' className='text-[20px] font-[500] leading-[27px] -tracking-[.3px] text-black'>(302) 555-0107</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-6 py-14 gap-5 border hover:shadow-lg cursor-pointer duration-200">
                    <h2 className='text-[24px] font-[600] leading-[34px] -tracking-[.4px] text-black'>New York Office</h2>
                    <div className="lg:w-[250px] text-center flex flex-col gap-4">
                    <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>2464 Royal Ln. Mesa, New Jersey 45463</p>
                    <Link to='tel:808 555-0111' className='text-[20px] font-[500] leading-[27px] -tracking-[.3px] text-black'>(808) 555-0111</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-6 py-14 gap-5 border hover:shadow-lg cursor-pointer duration-200">
                    <h2 className='text-[24px] font-[600] leading-[34px] -tracking-[.4px] text-black'>Mexico Office</h2>
                    <div className="lg:w-[250px] text-center flex flex-col gap-4">
                    <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                    <Link to='tel:205 555-0100' className='text-[20px] font-[500] leading-[27px] -tracking-[.3px] text-black'>(205) 555-0100</Link>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Location
