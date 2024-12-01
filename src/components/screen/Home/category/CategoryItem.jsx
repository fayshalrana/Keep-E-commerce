import React from 'react'
import { Link } from 'react-router-dom'
const CategoryItem = ({categoryImg}) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center mx-[1rem]'>
      <div className="w-[100px] md:w-[210px] h-[100px] md:h-[210px] rounded-complete overflow-hidden">
        <Link to="#"><img className='w-full h-full object-cover' src={categoryImg} alt="category image" /></Link>
      </div>
     <div className="text-center">
    <Link to="#"><h3 className='text-black text-[16px] md:text-[20px] font-[500] leading-7 -tracking-[0.3px] pb-2'>Women’s shoes</h3></Link>
      <p className='text-dark text-[14px] md:text-[16px] font-[500] leading-6 -tracking-[0.3px]'>12 Items</p>
     </div>
    </div>
  )
}

export default CategoryItem
