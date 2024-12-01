import React, { useContext, useState } from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import { NavLink, Outlet } from 'react-router-dom'
import ProductCard from '../../../shared/ProductCard/ProductCard'
import { IoIosArrowForward } from "react-icons/io";
import { ProductsContext } from '../../../../utils/ProductsProvider';

const NewCollection = () => {
    const {products} = useContext(ProductsContext);
    const [toggleStage, setToggleStage] = useState(1);

    const handleStage = (index) => {
        setToggleStage(index);
    }
   
  return (
    <section className='py-12 md:py-16'>
        <div className="container_fluid">
            <SectionHeader title={"This Week's Highlights"} subTitle={"New Collections"}/>
            <div className="mt-8 md:mt-16 mb-6 md:mb-12 flex justify-center">
                <ul className='flex'>
                    <NavLink onClick={()=>handleStage(1)} className=
                    {`${toggleStage === 1 ? "border-b border-primary text-primary":""} py-[10px] px-[10px] md:px-[50px] text-[11px] md:text-[14px] font-[500] leading-[22px] -tracking-[.2px] border-b hover:border-primary  hover:text-primary`} >Hot Item</NavLink>
                    <NavLink onClick={()=>handleStage(2)} className={`${toggleStage === 2 ? "border-b border-primary text-primary":""} py-[10px] px-[10px] md:px-[50px] text-[11px] md:text-[14px] font-[500] leading-[22px] -tracking-[.2px] border-b hover:border-primary  hover:text-primary`}>Best sellers</NavLink>
                    <NavLink onClick={()=>handleStage(3)} className={`${toggleStage === 3 ? "border-b border-primary text-primary":""} py-[10px] px-[10px] md:px-[50px] text-[11px] md:text-[14px] font-[500] leading-[22px] -tracking-[.2px] border-b hover:border-primary  hover:text-primary`} >On sale</NavLink>
                    <NavLink onClick={()=>handleStage(4)} className={`${toggleStage === 4 ? "border-b border-primary text-primary":""} py-[10px] px-[10px] md:px-[50px] text-[11px] md:text-[14px] font-[500] leading-[22px] -tracking-[.2px] border-b hover:border-primary  hover:text-primary`}>New Arrivals</NavLink>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                { toggleStage === 1 &&
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
                { toggleStage === 2 &&
                    products.slice(3, 7).map(product => <ProductCard key={product.id} product={product} />)
                }
                { toggleStage === 3 &&
                    products.slice(8, 13).map(product => <ProductCard key={product.id} product={product} />)
                }
                { toggleStage === 4 &&
                    products.slice(13,18).map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>

            <div className="mt-12 flex justify-center">
                <button className='py-4 px-5 border border-primary rounded-md text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-primary flex items-center gap-2 self-center hover:bg-primary hover:text-white duration-200'>Discover more <IoIosArrowForward /></button>
            </div>
        </div>
      
    </section>
  )
}

export default NewCollection
