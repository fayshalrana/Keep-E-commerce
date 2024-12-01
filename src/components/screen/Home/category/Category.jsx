import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import CategoryItem from './CategoryItem'
import Marquee from "react-fast-marquee";
const Category = () => {
  return (
    <section className='py-12 md:py-16'>
      <div className="container_fluid">
        <SectionHeader title={"Shop Our Collections"} subTitle={"Categories"}/>
      </div>
      <div className="mt-[58px] flex gap-12 overflow-x-auto min-[1280px]:pl-10 min-[1540px]:pl-32 min-[1600px]:pl-40 min-[1850px]:pl-[16rem] min-[1920px]:pl-[19rem]">
        <Marquee
            autoFill={true}
            pauseOnHover={true}
            style={{ gap: "1rem" }}
             >
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHNob2VzfGVufDB8fDB8fHww"}/>
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNob2VzfGVufDB8fDB8fHww"}/>
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHNob2VzfGVufDB8fDB8fHww"}/>
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHNob2VzfGVufDB8fDB8fHww"}/>
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNob2VzfGVufDB8fDB8fHww"}/>
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1612902377756-414b2139d5e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHNob2VzfGVufDB8fDB8fHww"}/>
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHNob2VzfGVufDB8fDB8fHww"}/>
        <CategoryItem categoryImg={"https://images.unsplash.com/photo-1571859856639-d54ab2c18ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHNob2VzfGVufDB8fDB8fHww"}/>
  </Marquee>
    
      </div>
    </section>
  )
}

export default Category
