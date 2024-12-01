import React from 'react'
import contactBannerImg from '../../../../assets/images/contactBanner.png'
const Banner = () => {
    return (
        <section className='py-[30px] lg:py-[73px]'>
            <div className="container_fluid">
                <div className="md:px-8 lg:px-10 flex justify-between flex-col lg:items-center  lg:flex-row gap-4">
                    <div className="w-full lg:w-[40%]">
                        <h3 className='text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-primary text-left md:text-center lg:text-left'>Contact Us</h3>
                        <h2 className='text-[30px] lg:text-[36px] font-[600] leading-[40px] lg:leading-[48px] -tracking-[.5px] lg:-tracking-[1px] text-black text-left md:text-center lg:text-left pt-4 pb-6'>Don’t Hesitate to Contact Us, if You need Help.</h2>
                        <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>Lorem ipsum dolor sit amet consectetur. Mattis molestie at facilisis convallis proin quam arcu. Posuere feugiat nec tellus ut integer interdum nec. Pretium integer sit lorem eros dui vestibulum consequat purus. Netus id convallis maecenas platea nulla mattis mattis.</p>
                    </div>
                    <div className="w-full lg:w-[55%] ">
                        <img className='w-full' src={contactBannerImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
