import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext(null)
const ProductsProvider = ( {children}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://keep-react-ecommerce.vercel.app/products")
            .then(res => res.json())
            .then(data => setProducts(data))
      }, [])

    const data = {
        products
    }
  return (
    <ProductsContext.Provider value={data}>
       {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
