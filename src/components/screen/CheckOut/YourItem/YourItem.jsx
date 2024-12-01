import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

import productImg from '../../../../assets/images/product.webp'
const YourItem = () => {
    return (
        <div className="flex items-center gap-6 w-full py-5 border-b-2">
            <div className="w-[65px] h-[80px] md:w-[110px] md:h-[130px]">
                <img className='w-full h-full object-cover' src={productImg} alt="product image" />
            </div>
            <div className="flex items-center gap-2">
                <h3 className='text-[16px] md:text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-dark'>Men's casual shoe</h3>
                <span className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark flex items-center'>1 <IoCloseOutline className='text-[20px]' /></span>
            </div>
            <div className="ml-auto">
                <h3 className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark'>$79.00</h3>
            </div>
        </div>
    )
}

export default YourItem
