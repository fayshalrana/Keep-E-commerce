import React from 'react'
import BannerSection from '../components/shared/BannerSection/BannerSection'
import Details from '../components/screen/ProductDetails/Details/Details'
import RelatedProducts from '../components/screen/ProductDetails/RelatedProducts/RelatedProducts'
import Feature from '../components/screen/Home/Feature/Feature'
import { useLoaderData } from 'react-router-dom'
import VariantControl from '../components/screen/ProductDetails/RelatedProducts/VariantControl'

const ProductDetails = () => {
  const product = useLoaderData()
  return (
    <>
      <BannerSection currentPage={"Product Details"}/>
      <VariantControl product={product}/>
      <Details/>
      <RelatedProducts/>
      <Feature/>
    </>
  )
}

export default ProductDetails
