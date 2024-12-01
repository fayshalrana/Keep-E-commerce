import React from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { FaStar, FaRegHeart  } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { CgShoppingCart } from "react-icons/cg";
import { useLoaderData } from 'react-router-dom';
const VariantControl = ({product}) => {
    const {id, price, image, productName, discountPrice,rating,reviews,details,size, stock, quantity,colors,features, category,description,} = product || {}
    return (
    <section className='md:py-10'>
        <div className="container_fluid">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-[100px] lg:px-10">
                <div className="h-[350px] md:h-[600px] lg:h-[700px]">
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className="">
                    <h1 className='text-[28px] lg:text-[36px] font-semibold leading-12 -tracking-[1px] text-[#1C222B]'>{productName}</h1>
                    <div className="flex items-center gap-2 pt-4 pb-3">
                    <Rating style={{ maxWidth: 120 }} value={rating.stars} readOnly />
                    
                    <span className='text-[16px] font-normal leading-6 -tracking-[.3px] text-dark'>({reviews.length} reviews)</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-[#1C222B]'>${price}</span>
                        <span className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-gray-400 line-through'>${discountPrice}</span>
                    </div>
                    <p className='pt-7 pb-12 text-[16px] font-normal leading-[24px] -tracking-[.3px] text-[#3D4A5C]'>Lorem ipsum dolor sit amet consectetur. Mattis molestie at facilisis convallis proin quam arcu. Posuere feugiat nec tellus ut integer interdum nec. Pretium integer sit lorem eros vestibulum.</p>
                    <div className="pb-[36px]">
                        <h4 className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-dark'>Color:</h4>
                       <div className="flex items-center gap-2 pt-[10px]">
                       <div className="w-12 h-12 rounded-complete border border-black p-1"><button className=' rounded-complete w-full h-full bg-black'></button></div>
                        <div className="w-12 h-12 rounded-complete border border-gray-500 p-1"><button className=' rounded-complete w-full h-full bg-white'></button></div>
                       </div>
                    </div>
                    <div className="pb-[36px]">
                        <h4 className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-dark'>Size:</h4>
                       <div className="flex items-center gap-2 pt-[10px]">
                       
                       {
                        size.map((s, idx)=> <button key={idx} className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black w-12 h-12 rounded-complete border border-gray-500 p-1 focus:border-2 focus:border-black'>{s}</button>)
                       }
                        
                       </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="border rounded-md py-3 px-2 w-[114px] flex justify-between items-center">
                                <button className='border rounded-md text-[20px] text-dark w-7 h-7 flex justify-center items-center'><TiMinus /></button>
                                <span className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-dark'>10</span>
                                <button className='border rounded-md text-[20px] text-dark w-7 h-7 flex justify-center items-center'><FaPlus /></button>
                            </div>
                            <button className='py-3 px-5 rounded-md bg-primary text-white flex items-center gap-2 hover:bg-transparent hover:text-primary border hover:border-primary duration-300'>Add to Cart <CgShoppingCart  className='text-[18px]'/> </button>
                        </div>
                        <button className='text-[17.5px] font-medium leading-[24px] -tracking-[.3px] text-dark flex gap-2 items-center border rounded-md py-3 px-5 w-[16rem] justify-center hover:bg-primary hover:text-white duration-200'> <FaRegHeart  className='text-[18px]'/> Add to Wishlist</button>
                    </div>
                    <div className="pt-[33px] flex flex-col gap-2">
                        <h4 className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black'>Category: <span className='text-dark'>{category}</span></h4>
                        <h4 className='text-[16px] font-medium leading-[24px] -tracking-[.3px] text-black'>Tags: <span className='text-dark'>Men’s, Black</span></h4>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default VariantControl
