import React from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import BlogItem from './BlogItem'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <section className='py-6 md:py-[72px] lg:py-10'>
            <div className="container_fluid">
                <div className="flex flex-col gap-6 justify-center items-center">
                    <SectionHeader title={"Browse Our Articles and Learn More"} subTitle={"Recent Blog"} />
                    <div className="w-auto md:w-[570px] text-center">
                        <p className='text-[14px] md:text-[16px] font-[400] text-dark leading-5 md:leading-6 -tracking-[.3px]'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before & After magazine.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <BlogItem blogImg={"https://images.unsplash.com/photo-1591557343940-9cfd79914ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"}/>
                    <BlogItem blogImg={"https://images.unsplash.com/photo-1561720982-39a1f04e2854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"}/>
                    <BlogItem blogImg={"https://images.unsplash.com/photo-1605325360282-9b0ac4ca7b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"}/>
                </div>
                
            </div>

        </section>
    )
}

export default Blog
