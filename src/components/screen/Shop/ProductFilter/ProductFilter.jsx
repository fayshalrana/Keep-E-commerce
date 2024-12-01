import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import MultiRangSlider from './MultiRang/MultiRangSlider';
const ProductFilter = ({mobileFilterShow}) => {
    const [showCategory, setShowCategory] = useState(true)
    const [showFilter, setShowFilter] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [showAva, setShowAva] = useState(false);

    //Show category filter item
    const handleShowCategory = () => {
        setShowCategory(!showCategory)
    }

    //Show Filter item
    const handleShowFilter = () => {
        setShowFilter(!showFilter)
    }

    //Show filter item
    const handleShowColor = () => {
        setShowColor(!showColor);
    }

    //Show filter item
    const handleShowAva = () => {
        setShowAva(!showAva);
    }

    return (
        <div className='bg-white p-5 md:p-0 rounded-md md:rounded-none'>
            {/* filter by Category  */}
            <div className="overflow-hidden">
                <div onClick={handleShowCategory} className=" cursor-pointer flex justify-between items-center">
                    <button  className='text-[20px] font-[600] leading-[27px] -tracking-[.3px] text-black select-none'>Categories</button>
                    <IoIosArrowDown className={`${showCategory ? "transform rotate-180 ease-in-out duration-500" : ""} `} />
                </div>
                <div className={`mt-4 transition-max-height flex flex-col gap-5 ${showCategory ? "max-h-[500px] ease-in-out duration-500" : "max-h-0" }`}>
                    <ul className='flex flex-col gap-6'>
                        <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Boots Fashion</li>
                        <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Sneakers</li>
                        <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Sandals</li>
                        <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Loafers</li>
                        <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Uncategorized</li>
                    </ul>
                </div>
            </div>
            {/* filter by price  */}
            <div className="mt-12 border-t border-b py-2">
                <div onClick={handleShowFilter}  className="flex justify-between items-center cursor-pointer">
                    <button className='text-[20px] font-[600] leading-[27px] -tracking-[.3px] text-black select-none'>Filter By Price</button>
                    <IoIosArrowDown className={`${showFilter ? "transform rotate-180 ease-in-out duration-500" : ""} `} />
                </div>
                <div className={`mt-4 transition-max-height flex flex-col gap-5 overflow-hidden ${showFilter ? "max-h-[500px] ease-in-out duration-500" : "max-h-0" }`}>
               <MultiRangSlider/>
                </div>
            </div>
            {/* filter by color  */}
            <div className="mt-12 border-b py-2">
                <div onClick={handleShowColor} className="flex justify-between items-center cursor-pointer">
                    <button className='text-[20px] font-[600] leading-[27px] -tracking-[.3px] text-black select-none'>Color</button>
                    <IoIosArrowDown className={`${showColor ? "transform rotate-180 ease-in-out duration-500" : ""} `} />
                </div>
                <div className={`mt-4 transition-max-height flex flex-col gap-6 overflow-hidden ${showColor ? "max-h-[500px] ease-in-out duration-500" : "max-h-0" }`}>
                   <div className="flex gap-2">
                    <input type="checkbox" className='cursor-pointer focus:outline-none focus:ring-0' id='green'/>
                    <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none capitalize' htmlFor="green">Green</label>
                   </div>
                   <div className="flex gap-2">
                    <input type="checkbox" className='cursor-pointer focus:outline-none focus:ring-0' id='red'/>
                    <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none capitalize' htmlFor="red">red</label>
                   </div>
                   <div className="flex gap-2">
                    <input type="checkbox" className='cursor-pointer focus:outline-none focus:ring-0' id='white'/>
                    <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none capitalize' htmlFor="white">white</label>
                   </div>
                   <div className="flex gap-2">
                    <input type="checkbox" className='cursor-pointer focus:outline-none focus:ring-0' id='gray'/>
                    <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none capitalize' htmlFor="gray">gray</label>
                   </div>
                   <div className="flex gap-2">
                    <input type="checkbox" className='cursor-pointer focus:outline-none focus:ring-0' id='others'/>
                    <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none capitalize' htmlFor="others">others</label>
                   </div>
                </div>
            </div>
            {/* filter by stock  */}
            <div className="mt-12 py-2">
                <div onClick={handleShowAva}  className="flex justify-between items-center cursor-pointer">
                    <button className='text-[20px] font-[600] leading-[27px] -tracking-[.3px] text-black select-none'>Availability</button>
                    <IoIosArrowDown className={`${showAva ? "transform rotate-180 ease-in-out duration-500" : ""} `} />
                </div>
                <div className={`mt-4 transition-max-height flex flex-col gap-6 overflow-hidden ${showAva ? "max-h-[500px] ease-in-out duration-500" : "max-h-0" }`}>
                   <div className="flex gap-2">
                    <input type="checkbox" className='cursor-pointer focus:outline-none focus:ring-0' id='discount'/>
                    <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none capitalize' htmlFor="discount">Spacial Discount </label>
                   </div>
                   <div className="flex gap-2">
                    <input type="checkbox" className='cursor-pointer focus:outline-none focus:ring-0' id='inStock'/>
                    <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none capitalize' htmlFor="inStock">In Stock </label>
                   </div>
                </div>
            </div>
            <div className="mt-6 md:hidden">
                <button onClick={mobileFilterShow} className='w-full text-center text-white rounded-md text-[14px] font-[500] leading-6 -tracking-[.3px] bg-primary py-3 '>Apply</button>
            </div>
        </div>
    )
}

export default ProductFilter
