import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { motion, useAnimation } from "framer-motion";

// link variant 
const variants = {
  hover: {
    x: -60,
    scale: [1.1, 1]
  },
  initial: {
    x: 0,
    scale: 1
  }
};

// cart variant
const cartVariant = {
  hover: {
    y: -10,
    scale: [1.1, 1]
  },
  initial: {
    y: 100,
    scale: 1
  }
}


const ProductCard = ({ product }) => {
  const { id, price, image, productName, discountPrice, rating, reviews, details, size, stock, quantity, colors, features, categoryName, description, } = product || {}
  const [showWish, setShowWish] = useState(false);

  const handleWishClick = () => {
    setShowWish(!showWish);
  }
  setTimeout(() => {
    setShowWish(false);
  }, 5000);

  // framer motion 
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }


  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='group'>
      <div className="md:h-[200px] xl:h-[350px] overflow-hidden relative">
        <Link to={`/product-details/${id}`} ><img className='w-full h-full object-cover group-hover:scale-125 duration-700' src={image} alt="Product image" /></Link>
        <motion.div variants={cartVariant}
          animate={isHovered ? "hover" : "initial"}
          transition={{ delay: 0.1 }}>
          <Button className="absolute bottom-0 left-[50%] transform -translate-x-[50%] text-[14px] py-3 flex items-center gap-2 whitespace-nowrap">Add to Cart<CgShoppingCart /></Button>
        </motion.div>
        <div className="absolute -right-[3rem] top-5 flex flex-col gap-[10px]">

          <motion.button variants={variants}
            animate={isHovered ? "hover" : "initial"}
            transition={{ delay: 0.1 }}
            onClick={handleWishClick}
            className='p-[15px] bg-primary  text-white rounded-complete relative'><FaRegHeart className='text-[15x]' />
            {
              showWish && <Link className={`py-2 px-3 bg-[#1C222B] text-[14px] font-[500] text-white leading-[22px] -tracking-[.2px] absolute -left-[6rem] top-0 before:content-[""] before:w-3 before:absolute before:h-3 before:-right-[5px] before:top-[50%] before:-translate-y-[50%] before:transform before:rotate-45 before:bg-[#1C222B] before:rounded-sm rounded-md`}>Wishlist</Link>
            }
          </motion.button>

          <motion.a variants={variants} 
          href='#'
            animate={isHovered ? "hover" : "initial"}
            transition={{ delay: 0.2 }}
            className='p-[15px] bg-white text-primary rounded-complete'><LuEye className='text-[15x]' /></motion.a>
        </div>
      </div>
      <div className="pt-5">
        <Link to={`/product-details/${id}`}><h3 className='text-[18px] font-[500] leading-6 -tracking-[.2px] text-black pb-2'>Casual shoes sneakers</h3></Link>
        <p className='text-[16px] font-[500] leading-6 -tracking-[.3px] text-dark'>$79.00</p>
      </div>
    </div>
  )
}

export default ProductCard
