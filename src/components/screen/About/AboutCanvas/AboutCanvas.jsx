import React from 'react'
import aboutCanvas from '../../../../assets/images/aboutCanvas.webp'
const AboutCanvas = () => {
  return (
    <section>
     <div style={{ backgroundImage: `url(${aboutCanvas})`, backgroundSize: "cover", backgroundPosition:'center', backgroundRepeat:'no-repeat'}} className="py-[100px] md:py-[150px] lg:py-[250px]"></div>
    </section>
  )
}

export default AboutCanvas
