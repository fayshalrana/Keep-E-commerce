import React from 'react'
import BannerSection from '../components/shared/BannerSection/BannerSection'
import List from '../components/screen/BlogList/List'
import Feature from '../components/screen/Home/Feature/Feature'

const BlogList = () => {
  return (
    <>
      <BannerSection currentPage={"Blog List"}/>
      <List/>
      <Feature/>
    </>
  )
}

export default BlogList
