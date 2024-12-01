import React, { useContext } from 'react'
import ProductCard from '../../../shared/ProductCard/ProductCard'
import { ProductsContext } from '../../../../utils/ProductsProvider'

const RelatedProducts = () => {
  const {products} = useContext(ProductsContext)
  return (
    <section className='py-16'>
      <div className="container_fluid">
        <div className="lg:px-10">
            <div className="">
                <h2 className='text-[28px] lg:text-[36px] font-semibold leading-[48px] -tracking-[1px] text-black text-center lg:text-left'>Related Products</h2>
            </div>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {
                products.slice(0, 4).map(product=><ProductCard key={product.id} product={product}/>)
              }
            </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
