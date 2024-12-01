import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import InstaItem from './InstaItem'

const Instagram = () => {
  return (
    <section className='pt-6 md:pt-16 pb-8 md:pb-32'>
      <div className="container_fluid">
        <div className="">
            <SectionHeader title={"Follow Us on Instagram"} subTitle={"Instagram"}/>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InstaItem socialImg={"https://images.unsplash.com/photo-1554062614-6da4fa67725a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"}/>
            <InstaItem socialImg={"https://images.unsplash.com/photo-1574413230119-f302e1c9035d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <InstaItem socialImg={"https://images.unsplash.com/photo-1511822610278-4656f22cdd46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"}/>
            <InstaItem socialImg={"https://images.unsplash.com/photo-1596908181039-caa23a9eb6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"}/>
        </div>
      </div>
    </section>
  )
}

export default Instagram
