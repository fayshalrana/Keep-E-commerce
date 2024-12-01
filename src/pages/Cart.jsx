import React from 'react'
import BannerSection from '../components/shared/BannerSection/BannerSection'
import CartTable from '../components/screen/Cart/CartTable'
import Feature from '../components/screen/Home/Feature/Feature'

const Cart = () => {
  return (
    <>
      <BannerSection currentPage={"Cart"}/>
      <CartTable/>
      <Feature/>
    </>
  )
}

export default Cart
