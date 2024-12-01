import React from 'react'
import BlogItem from '../Home/Blog/BlogItem'
import Pagination from '../../shared/Pagination/Pagination'
import SideBar from './SideBar/SideBar'

const BlogGridView = () => {
  return (
    <section className='py-6 lg:py-12'>
      <div className="container_fluid">
        <div className="lg:px-10 flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 xl:gap-16">
          <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
            <BlogItem isFirst  blogImg={"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww"}/>
            <BlogItem  blogImg={"https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww"}/>
            <BlogItem  blogImg={"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2VzfGVufDB8fDB8fHww"}/>
            <BlogItem  blogImg={"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNob2VzfGVufDB8fDB8fHww"}/>
            <BlogItem  blogImg={"https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNob2VzfGVufDB8fDB8fHww"}/>
          </div>
            <div className="flex justify-center lg:justify-start mt-12">
              <Pagination />
            </div>
          </div>
        
          <div className="">
            <SideBar/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default BlogGridView
