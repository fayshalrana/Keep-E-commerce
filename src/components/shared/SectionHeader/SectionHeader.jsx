import React from 'react'
import lineImg from '../../../assets/images/sectionLine.webp'
const SectionHeader = ({ subTitle, title }) => {
  return (
    <div className='w-full text-center relative'>
      <h3 className='text-[18px] font-[500] leading-6 -tracking-[0.3px] text-primary pb-3'>{subTitle}</h3>
      <h2 className='text-[28px] md:text-[36px] font-[600] leading-[42px] -tracking-[1px] text-black z-20 inline-block'>{title}</h2>
      <img className='absolute w-[180px] -bottom-2 left-[50%] transform translate-x-[-50%] -z-10' src={lineImg} alt="line png" />
    </div>
  )
}

export default SectionHeader
