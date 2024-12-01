import React from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Pagination = () => {
  return (
    <div className='flex items-center gap-1'>
      <button className='p-[6px] flex justify-center items-center text-[18px]'><GoArrowLeft /></button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>1</button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>2</button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>3</button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>4</button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>5</button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>7</button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>8</button>
      <button className='p-[6px] flex justify-center items-center text-[16px]  w-6 md:w-8 h-7 rounded-md hover:bg-dark text-dark focus:bg-dark focus:text-white hover:text-white duration-200'>9</button>
      <button className='p-[6px] flex justify-center items-center text-[18px]'><GoArrowRight /></button>
    </div>
  )
}

export default Pagination
