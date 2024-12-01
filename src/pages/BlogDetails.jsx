import React from 'react'
import Banner from '../components/screen/BlogDetails/Banner/Banner'
import BlogMain from '../components/screen/BlogDetails/blogMain/BlogMain'
import RelatedBlog from '../components/screen/BlogDetails/RelatedBlog/RelatedBlog'
import Feature from '../components/screen/Home/Feature/Feature'

const BlogDetails = () => {
  return (
    <>
      <Banner/>
      <BlogMain/>
      <RelatedBlog/>
      <Feature/>
    </>
  )
}

export default BlogDetails
