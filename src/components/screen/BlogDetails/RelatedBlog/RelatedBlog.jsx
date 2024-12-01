import React from 'react'
import BlogItem from '../../Home/Blog/BlogItem'

const RelatedBlog = () => {
  return (
    <section className='pt-5'>
        <div className="container_fluid">
            <div className="border-t pt-[56px] pb-24">
                <div className="flex flex-col gap-2 justify-center md:justify-start">
                    <h3 className='text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-primary text-center md:text-left'>Recent Blog</h3>
                    <h2 className='text-[30px] lg:text-[48px] font-[600] leading-[40px] lg:leading-[60px] -tracking-[.5px] lg:-tracking-[1.75px] text-black text-center md:text-left'>You Might Also Like</h2>
                </div>
                <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <BlogItem blogImg="https://images.unsplash.com/photo-1596140096558-07b3cd0fd99e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"/>
                    <BlogItem blogImg="https://images.unsplash.com/photo-1568467020752-b08fbd48e878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWFuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"/>
                    <BlogItem blogImg="https://images.unsplash.com/photo-1565056216639-dafa91914037?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWFuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"/>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default RelatedBlog
