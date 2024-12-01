import React, { useState } from 'react'
import product1 from './../../../../assets/images/product1.1.png'
import product2 from './../../../../assets/images/product1.2.png'
import product3 from './../../../../assets/images/product1.3.png'
import product4 from './../../../../assets/images/product1.4.png'


const Details = () => {
    const [show, setShow] = useState(true)

    const showReviews = () => {
        setShow(false)
    }
    const showDescription = () => {
        setShow(true)
    }

    return (
        <section className='py-10 lg:py-20'>
            <div className="container_fluid">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[30px] lg:gap-[100px] lg:px-10">
                <div className="grid grid-cols-2 gap-4">
                    <div className="w-full h-full">
                        <img className='w-[100%] h-[100%] object-cover' src={product1} />
                    </div>
                    <div className="w-full h-full">
                        <img className='w-[100%] h-[100%] object-cover' src={product2} />

                    </div>
                    <div className="w-full h-full">
                        <img className='w-[100%] h-[100%] object-cover' src={product3} />

                    </div>
                    <div className="w-full h-full">
                        <img className='w-[100%] h-[100%] object-cover' src={product4} />

                    </div>
                </div>
                <div className="">
                    <div className="">
                        <button onClick={showDescription} className={`${show? "text-primary border-primary" :""} px-[30px] md:px-[50px] py-[10px] border-b-2 text-[14px] font-[500] leading-[22px] -tracking-[.2px]`}>Description</button>
                      
                        <button onClick={showReviews} className={`${show? "" :"text-primary border-primary"} px-[30px] md:px-[50px] py-[10px] border-b-2 text-[14px] font-[500] leading-[22px] -tracking-[.2px]`}>Reviews(0)</button>
                      
                    </div>
                    <div className="mt-16">
                        {
                            show ? <div className="">
                            <p className='text-[16px] font-normal leading-6 -tracking-[.3px] text-[#3D4A5C]'>Lorem ipsum dolor sit amet consectetur. Ante malesuada sodales quis ornare pharetra sed morbi. Ultrices lacus integer pretium purus tellus fermentum fermentum volutpat integer. Consectetur nam nibh nunc tortor at pretium netus. Imperdiet diam adipiscing lobortis elementum sit viverra pretium nibh adipiscing. Ullamcorper mauris in adipiscing odio. Praesent vel auctor neque nulla malesuada libero.</p>
                            <ul className='pt-6 pl-6 flex flex-col gap-[10px]'>
                                <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-[#3D4A5C] before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Fits true to size.</li>
                                <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-[#3D4A5C] before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>100% Recycled polyester upper</li>
                                <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-[#3D4A5C] before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Spot clean with water and mild soap</li>
                                <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-[#3D4A5C] before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Pull-on back tab</li>
                                <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-[#3D4A5C] before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Made in Thai Binh, VNSee the factory</li>
                            </ul>
                        </div> 
                        : 
                            <div className="">
                                Customer Reviews
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
            </div>
        
        </section>
    )
}

export default Details
