import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
const SideBar = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filter, setFilter] = useState(false);
    const [showCategory, setShowCategory] = useState(true)
    const [showArch, setShowArch] = useState(false);
    const [showTags, setShowTags] = useState(false);

    //Show selected item
    const handleItemClick = (itemId) => {
        setSelectedItem(itemId === selectedItem ? null : itemId);
    };

    //Show filter item
    const handleFilter = () => {
        setFilter(!filter);
    }

    //Show category filter item
    const handleShowCategory = () => {
        setShowCategory(!showCategory)
    }

    //Show Archives filter item
    const handleShowArch = () => {
        setShowArch(!showArch)
    }

    //Show filter item
    const handleShowTags = () => {
        setShowTags(!showTags);
    }


    return (
        <div className='flex flex-col gap-8'>
            <div className="flex flex-col gap-4">
                <h2 className='text-[20px] font-semibold leading-[27px] -tracking-[.3px] text-black'>Search</h2>
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <input className='py-[10px] px-[14px] border rounded-md border-blue-200 w-full focus:outline-none focus:border-gray-400' type="text" placeholder='Search...' />
                    <button type='button' className='w-full flex justify-center gap-2 items-center md:w-auto  py-[13px] px-[18px] rounded-md bg-primary text-[20px] text-white'><IoSearch /><span className='md:hidden'>Search</span></button>
                    <button onClick={handleFilter} type='button' className='w-full flex justify-center gap-2 items-center md:w-auto  py-[13px] px-[18px] rounded-md border border-blue-300 text-[20px] text-gray-500 lg:hidden'><GiSettingsKnobs /><span className='md:hidden'>Filter</span></button>
                </div>
            </div>
            <div className={`${filter ? "fixed w-full h-full top-0 left-0 p-5 bg-black/20" : "hidden"} overflow-auto lg:relative lg:inline`}>
                <div className='bg-white rounded-md p-5 lg:p-0 flex flex-col gap-8'>
                    <div className="flex flex-col gap-6 overflow-hidden">
                        <div onClick={handleShowCategory} className=" cursor-pointer flex justify-between w-full items-center">
                            <button type='button' className='select-none  text-[20px] font-semibold leading-[27px] -tracking-[.3px] text-black'>Categories</button>
                            <div className="flex items-center gap-2">
                                <IoIosArrowDown className={`${showCategory ? "transform rotate-180 ease-in-out duration-500" : ""} `} />
                                <AiOutlineCloseCircle onClick={handleFilter} className='lg:hidden text-red-500 text-[20px]' />
                            </div>
                        </div>
                        <ul className={`transition-max-height flex flex-col gap-5 ${showCategory ? "max-h-[500px] ease-in-out duration-500" : "max-h-0"}`}>
                            <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Boots Fashion</li>
                            <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Sneakers</li>
                            <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Sandals</li>
                            <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Loafers</li>
                            <li className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark cursor-pointer select-none'>Uncategorized</li>
                        </ul>

                    </div>
                    <div className="flex flex-col gap-6 overflow-hidden">
                        <div onClick={handleShowArch} className=" cursor-pointer flex justify-between w-full items-center">
                            <h2 className='text-[20px] font-semibold leading-[27px] -tracking-[.3px] text-black select-none'>Archives</h2>
                            <IoIosArrowDown className={`${showArch ? "transform rotate-180 ease-in-out duration-500" : ""} `} />
                        </div>
                        <div className={`transition-max-height flex flex-col gap-5 ${showArch ? "max-h-[500px] ease-in-out duration-500" : "max-h-0"}`}>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id='one'
                                    className="mr-2 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark"
                                    checked={selectedItem === 'one'}
                                    onChange={() => handleItemClick('one')}
                                />
                                <label htmlFor="one" className="cursor-pointer select-none">August 2022</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id='two'
                                    className="mr-2 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark"
                                    checked={selectedItem === 'two'}
                                    onChange={() => handleItemClick('two')}
                                />
                                <label htmlFor="two" className="cursor-pointer select-none">July 2021</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id='three'
                                    className="mr-2 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark"
                                    checked={selectedItem === 'three'}
                                    onChange={() => handleItemClick('three')}
                                />
                                <label htmlFor="three" className="cursor-pointer select-none">June 2020</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id='four'
                                    className="mr-2 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark"
                                    checked={selectedItem === 'four'}
                                    onChange={() => handleItemClick('four')}
                                />
                                <label htmlFor="four" className="cursor-pointer select-none">May 2019</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id='five'
                                    className="mr-2 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark"
                                    checked={selectedItem === 'five'}
                                    onChange={() => handleItemClick('five')}
                                />
                                <label htmlFor="five" className="cursor-pointer select-none">April 2018</label>
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-col gap-6 overflow-hidden">
                    <div onClick={handleShowTags} className=" cursor-pointer flex justify-between w-full items-center">
                            <button type='button' className='text-[20px] font-semibold leading-[27px] -tracking-[.3px] text-black select-none'>Popular Tags</button>
                            <IoIosArrowDown className={`${showTags ? "transform rotate-180 ease-in-out duration-500" : ""} `} />
                        </div>
                        <ul className={`transition-max-height flex flex-wrap gap-[10px]  ${showTags ? "max-h-[500px] ease-in-out duration-500" : "max-h-0"}`}>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Shoe</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Running shoe</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Footwear</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Loafers</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Fashion</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Sneaker</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Trends</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary hover:text-white hover:bg-primary duration-200 select-none'>Collections</li>
                        </ul>

                    </div>
                    <div className="lg:hidden">
                        <button onClick={handleFilter} type='button' className='w-full block md:inline md:w-auto py-3 px-5 rounded-md bg-primary text-white text-[18px] font-[500] leading-[24px] -tracking-[.3px]'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideBar
