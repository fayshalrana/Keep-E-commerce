import React from 'react'
import Button from '../../../shared/Button/Button'
import callToActionImg from '../../../../assets/images/callToAction.webp'
const CallToAction = () => {
  return (
    <section className='py-0 md:py-16'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="vw-[50%]">
          <img className="w-full h-full" src={callToActionImg} alt="" />
        </div>
        <div className="flex justify-center items-center bg-[#F2F5FF] pt-[104px] px-6 pb-[40px] md:px-0">
          <div className="w-[503px] md:w-[300px] lg:w-[426px] pt-[30px] relative md:pr-0 lg:pt-0 z-20">
            <h2 className='md:text-[28px] lg:text-[32px] text-[30px] font-[600] leading-[42px] md:leading-[37px] lg:leading-[48px] -tracking-[.5px] md:-tracking[1px] text-black z-30'>Get 25% Off to Any Items.All You Need to do is Share This Page</h2>
            <span className='absolute top-3 md:-top-[45px] lg:-top-[72px] lx:top-3 -left-5 md:-left-[1rem] lg:-left-8 text-[72px] md:text-[60px] lg:text-[80px] xl:text-[120px] font-semibold leading-[40px] md:leading-[134px] -tracking-[3.5px] text-[#1C222B]/10 whitespace-nowrap select-none -z-10'>25% OFF</span>
            <p className='text-[16px] font-[400] leading-6 -tracking[.3px] text-dark pt-4 pb-9'>Give your friends 25% off. When your friends buy from your invite link, you get 25% off!</p>
            <Button className='py-4 w-full block text-center md:inline'>Get Discount Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
