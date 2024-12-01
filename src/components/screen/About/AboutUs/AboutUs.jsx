import React from 'react'
import Button from '../../../shared/Button/Button'
import aboutUsImg from '../../../../assets/images/aboutUs.webp'
import missionImg from '../../../../assets/images/Misson.webp'
const AboutUs = () => {
  return (
    <section className='md:pt-10 lg:pt-16 pb-5 md:px-[50px] lg:px-[100px]'>
     <div className="container_fluid">
     <div className="flex gap-[30px] md:gap-[50px] lg:gap-[100px] flex-col-reverse md:flex-row justify-between">
        <div className="lg:pl-7 flex flex-col justify-center w-full md:[50%] lg:w-[55%]">
            <h3 className="text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-primary">About Us</h3>
            <h2 className="text-[27px] md:text-[36px] font-[600] md:leading-[45px] lg:leading-[48px] -tracking-[1px] text-black pt-[10px] md:pt-[15px] pb-4 md:pb-6">About Our Online Store</h2>
            <p className="text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark">Lorem ipsum dolor sit amet consectetur. Mattis molestie at facilisis convallis proin quam arcu. Posuere feugiat nec tellus ut integer interdum nec. Pretium integer sit lorem eros dui vestibulum consequat purus. Netus id convallis maecenas platea nulla mattis mattis.</p>

            <div className="mt-7 xl:mt-10">
            <Button className='py-2 lg:py-3'>Contact us</Button>
            </div>
        </div>
        <div className="w-full md:[50%] lg:w-[45%]">
            <img className='w-ful h-full object-cover' src={aboutUsImg} alt="" />
        </div>
      </div>
      <div className="flex gap-[30px] md:gap-[50px] lg:gap-[100px] flex-col md:flex-row justify-between mt-20">
      <div className="w-full md:w-[45%]">
            <img className='w-ful h-full object-cover' src={missionImg} alt="" />
        </div>
        <div className="flex md:gap-7 lg:gap-12 flex-col justify-center w-full  md:w-[55%]">
            <div className="">
            <h2 className="text-[24px] font-[600] leading-[34px] -tracking-[.4px] text-black">Our Mission</h2>
            <p className="text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark">Lorem ipsum dolor sit amet consectetur. Mattis molestie at facilisis convallis proin quam arcu. Posuere feugiat nec tellus ut integer interdum nec. Pretium integer sit lorem eros dui vestibulum.</p>
            </div>
            <div className="">
            <h2 className="text-[24px] font-[600] leading-[34px] -tracking-[.4px] text-black">Our Mission</h2>
            <p className="text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark">Lorem ipsum dolor sit amet consectetur. Mattis molestie at facilisis convallis proin quam arcu. Posuere feugiat nec tellus ut integer interdum nec. Pretium integer sit lorem eros dui vestibulum.</p>
            </div>
        </div>
       
      </div>
     </div>
    </section>
  )
}

export default AboutUs
