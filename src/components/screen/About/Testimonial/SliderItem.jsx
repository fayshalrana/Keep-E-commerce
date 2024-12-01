import { Rating } from '@smastrom/react-rating';
import React from 'react'
const SliderItem = ({ slideInfo}) => {
  return (
    <div className='w-auto lg:w-[800px] mx-auto'>
        <div className="flex justify-center items-center gap-[6px]">
        {/* <Rating value={slideInfo.rating}/> */}
        <Rating style={{ maxWidth: 120 }} value={slideInfo.rating} readOnly />
        </div>
        <div className="text-center">
        <p className='pt-[22px] pb-6 text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>
       {slideInfo.comment}
        </p>
        <h3 className=' text-[20px] font-[600] leading-[27px] -tracking-[.3px] text-black'>{slideInfo.name}</h3>
        <p className=' text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>{slideInfo.prof}</p>
        </div>
      
    </div>
  )
}

export default SliderItem
