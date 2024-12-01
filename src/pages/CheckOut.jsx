import React from 'react'
import BannerSection from '../components/shared/BannerSection/BannerSection'
import CheckOutAction from '../components/screen/CheckOut/CheckOutAction'
import Feature from '../components/screen/Home/Feature/Feature'

const CheckOut = () => {
  return (
    <>
      <BannerSection currentPage={"Checkout"}/>
      <CheckOutAction/>
      <Feature/>
    </>
  )
}

export default CheckOut
