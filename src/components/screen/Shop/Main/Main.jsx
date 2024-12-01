import React, { useContext, useState } from 'react'
import ProductCard from '../../../shared/ProductCard/ProductCard'
import { VscSettings } from "react-icons/vsc";
import { BsUiRadiosGrid } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import ProductFilter from '../ProductFilter/ProductFilter';
import Pagination from '../../../shared/Pagination/Pagination';
import { ProductsContext } from '../../../../utils/ProductsProvider';
const Main = () => {
const {products} = useContext(ProductsContext)

const [openFilter, setOpenFilter] = useState(false);
const [mobileFilter, setMobileFilter] = useState(false);

const showFilter = () => {
    setOpenFilter(!openFilter);
}
const mobileFilterShow = () =>{
    setMobileFilter(!mobileFilter)
    console.log(mobileFilter);
}

  return (
    <section  className='pb-32 md:px-16'>
      <div className="container_fluid">
        {/* for mobile version  */}
        <div className={`duration-200 md:hidden ${mobileFilter? "fixed overflow-y-auto visible opacity-100 w-full bg-black/20 top-0 h-screen left-0 z-50 p-6":"hidden"}  `}>
            <ProductFilter mobileFilterShow={mobileFilterShow} />
        </div>

{/* for desktop version  */}
      <div className={`${openFilter? ' md:gap-9': 'gap-0'} flex`}>
        <div className={`${openFilter? 'md:w-[32%]': 'w-0 invisible opacity-0'} duration-200`}>
            <div className="hidden md:block">
            <ProductFilter/>
            </div>
        </div>

        

        <div className="w-full">
            {/* for desktop version  */}
            <div className={`${openFilter? "md:flex-col md:gap-4 items-center":""} md:flex lg:flex-row lg:gap-0 justify-between pb-8 hidden`}>
                <div className="flex items-center gap-6">
                    <button onClick={showFilter} className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark flex items-center gap-1'><VscSettings />Filter</button>
                    <p className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark'>12 products <span className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-gray-500'>of 24 products</span></p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-6">
                        <span className='text-[16px] font-[500] leading-[22px] -tracking-[.2px] text-black'>Sort by</span>
                        <select name="" id="" className='cursor-pointer focus:ring-0 focus:outline-none text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark w-[8rem]'>
                            <option value="">Default sorting</option>
                            <option value="">A to Z</option>
                            <option value="">Z to A</option>
                            <option value="">High to Low</option>
                            <option value="">Low to High</option>
                        </select>
                    </div>
                    <div className="border-l pl-4 flex items-center gap-2">
                        <button><BsUiRadiosGrid className='text-[16px] text-dark'/></button>
                        <button><FaListUl className='text-[16px] text-dark'/></button>
                    </div>
                </div>
            </div>

            {/* for mobile version  */}
            <div className="flex flex-col gap-4 justify-between pb-8 md:hidden">
                <div className="flex items-center justify-center gap-6">
                    <p className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark'>12 products <span className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-gray-500'>of 24 products</span></p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className='text-[16px] font-[500] leading-[22px] -tracking-[.2px] text-black'>Sort by</span>
                        <select name="" id="" className='cursor-pointer focus:ring-0 focus:outline-none text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark w-[8rem]'>
                            <option value="">Default sorting</option>
                            <option value="">A to Z</option>
                            <option value="">Z to A</option>
                            <option value="">High to Low</option>
                            <option value="">Low to High</option>
                        </select>
                    </div>
                    <div className="border-l pl-4 flex items-center gap-2">
                        <button><BsUiRadiosGrid className='text-[16px] text-dark'/></button>
                        <button><FaListUl className='text-[16px] text-dark'/></button>
                    </div>
                </div>
                <div className="">
                <button onClick={mobileFilterShow} className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark flex items-center gap-1 w-full border py-2 rounded-md justify-center'><VscSettings />Filter</button>
                </div>
            </div>

           <div className={`grid ${openFilter? "grid-cols-1 md:grid-cols-1 lg:grid-cols-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}  gap-8`}>
           
            {
                products.map(product=><ProductCard key={product.id} product={product}/>)
            }
           </div>
           <div className="flex justify-center mt-12">
            <Pagination/> 
           </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Main
