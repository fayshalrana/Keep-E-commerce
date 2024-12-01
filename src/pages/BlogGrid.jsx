import React from 'react'
import BlogGridView from '../components/screen/BlogGrid/BlogGridView'
import BannerSection from '../components/shared/BannerSection/BannerSection'
import Feature from '../components/screen/Home/Feature/Feature'

const BlogGrid = () => {
  return (
    <>
    <BannerSection currentPage={"Blog Grid"}/>
      <BlogGridView/>
      <Feature/>
    </>
  )
}

export default BlogGrid
