import React from 'react'
import CartItem from './CartItem/CartItem'
import { FaPercentage } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CartTable = () => {
  return (
    <section className='md:py-12'>
      <div className="container_fluid">
        <div className="lg:px-10">
            <div className="flex border-t-2 md:border-t-0 md:border-b-2 py-6">
                <span className="xl:w-[70%] md:w-[55%] text-[20px] font-[500] leading-[27px] -tracking-[.3px] text-black  xl:pl-[53px]">Products</span>
                <span className="hidden md:inline xl:w-[10%] md:w-[15%] text-[20px] font-[500] leading-[27px] -tracking-[.3px] text-black">Price</span>
                <span className="hidden md:inline xl:w-[10%] md:w-[15%] text-[20px] font-[500] leading-[27px] -tracking-[.3px] text-black">Quantity</span>
                <span className="hidden md:inline xl:w-[10%] md:w-[15%] text-[20px] font-[500] leading-[27px] -tracking-[.3px] text-black text-right">Subtotal</span>
            </div>

            <div className="">
            {Array.from({ length: 3 }, (_, index) => (
           <CartItem key={index}/>
        ))}
           
            </div>

            <div className="py-6 flex justify-between items-center flex-col md:flex-row">
              <div className="flex gap-2 items-center">
                <input className='border-2 rounded-md py-2 md:py-4 px-2 md:px-3 text-[14px] md:text-[18px] font-[500] leading-[22px] md:leading-[24px] -tracking-[.2px] w-[70%]' type="text" name="" id="" placeholder='Coupon code'/>
                <button type='button' className='text-[12px] md:text-[18px] font-[500] leading-[24px] -tracking-[.2px] text-white py-2 md:py-4 px-2 md:px-3 rounded-md bg-primary whitespace-nowrap hover:text-primary hover:bg-white hover:border-blue-600 border duration-200'>Apply Coupon</button>
              </div>
              <button type='button' className='text-[18px] font-[500] leading-[24px] -tracking-[.2px] text-dark py-4 px-5 rounded-md border-2 border-blue-300 w-full mt-2 md:mt-0 md:w-auto hover:bg-primary hover:text-white hover:border-transparent duration-200'>Add New Product</button>
            </div>
            <div className="pt-8 pb-24 flex justify-end ">
              <div className="w-[370px] border-2 p-8">
                <div className="">
                <div className="py-4 px-2 border-b-2 border-blue-200">
                  <span className='text-[18px] font-[500] leading-[24px] -tracking-[.2px]text'>Cart Total</span>
                </div>
                <div className="py-4 px-2 border-b-2 border-blue-200 flex justify-between items-center">
                  <span className='text-[18px] font-[500] leading-[24px] -tracking-[.2px]text'>Subtotal</span>

                  <span className='text-[18px] font-[500] leading-[24px] -tracking-[.2px]text'>$237.00</span>
                </div>
                <div className="py-4 px-2 border-b-2 border-blue-200 flex justify-between items-center">
                  <span className='text-[18px] font-[500] leading-[24px] -tracking-[.2px]text'>Discount</span>

                  <span className='text-[18px] font-[500] leading-[24px] -tracking-[.2px]text p-2 border-2 border-blue-200 flex items-center text-dark gap-2 rounded-md'>Amount <FaPercentage /></span>
                </div>
                <div className="py-4 px-2 border-b-2 border-blue-200 flex justify-between items-center">
                  <span className='text-[18px] font-[500] leading-[24px] -tracking-[.2px]text'>Total</span>

                  <span className='text-[18px] font-[500] leading-[24px] -tracking-[.2px]text'>$237.00</span>
                </div>
                </div>
               <div className="flex justify-end">
               <Link to='/checkout' className='text-[18px] font-[500] leading-[24px] -tracking-[.2px] whitespace-nowrap text-white mt-6 py-4 px-5 rounded-md bg-primary hover:text-primary hover:bg-white hover:border-blue-600 border duration-200'>Procced To Checkout</Link>
               </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CartTable
