import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import SlickSlider from './SlickSlider'

const Testimonial = () => {
  return (
    <section className='py-10 lg:py-20 lg:px-10'>
      <div className="container_fluid">
        <div className="">
          <SectionHeader title={"What People Say"} subTitle={"Testimonials"} />
        </div>
        <div className="mt-[20px] md:mt-[54px] pb-10">
        <SlickSlider/>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
