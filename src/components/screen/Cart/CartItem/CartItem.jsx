import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import productImg from '../../../../assets/images/product.webp'
const CartItem = () => {
    return (
        <div className="py-6 border-b-2 flex">
            <div className="w-full relative md:w-[55%] lg:w-[55%] xl:w-[70%] flex items-center">
                <button className='absolute right-0 top-1 md:relative text-[30px] text-dark hover:text-red-500'><RxCrossCircled /></button>
                <div className="h-[96px] md:h-auto w-[80px] md:w-[110px] md:ml-6 mr-[10px] md:mr-[72px]">
                    <img className='w-full h-full object-cover' src={productImg} alt="" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h2 className='text-[18px] font-[500] leading-[24px] -tracking-[.2px] text-black'>Men's casual shoe</h2>
                    <h3 className='text-[16px] font-[500] leading-[24px] -tracking-[.2px] text-black md:hidden'>$79.00</h3>
                    <div className="flex justify-between items-center">
                        <div className="md:hidden w-[110px] border rounded-md px-3 py-2 flex justify-around">
                            <button className='rounded-md bg-gray-100 p-1 text-[16px]'><FiMinus /></button>
                            <span>1</span>

                            <button className='rounded-md bg-gray-100 p-1 text-[16px]'><IoMdAdd /></button>
                        </div>
                        <div className="">
                            <h3 className='text-[16px] font-[500] leading-[24px] -tracking-[.2px] text-black md:hidden'>$79.00</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:w-[10%] md:w-[15%]  md:flex items-center hidden">
                <h3 className='text-[16px] font-[500] leading-[24px] -tracking-[.2px] text-black'>$79.00</h3>
            </div>
            <div className="hidden xl:w-[10%] md:w-[15%] md:flex items-center">
                <div className="w-[110px] border rounded-md px-3 py-2 flex justify-around">
                    <button className='rounded-md bg-gray-100 p-1 text-[16px]'><FiMinus /></button>
                    <span>1</span>

                    <button className='rounded-md bg-gray-100 p-1 text-[16px]'><IoMdAdd /></button>
                </div>
            </div>
            <div className="hidden xl:w-[10%] md:w-[15%] md:flex items-center justify-end">
                <h3 className='text-[16px] font-[500] leading-[24px] -tracking-[.2px] text-black'>$79.00</h3>
            </div>
        </div>
    )
}

export default CartItem
