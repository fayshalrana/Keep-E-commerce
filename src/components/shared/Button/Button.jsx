import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, className, path}) => {
  return (
    <Link to={path} className={`hover:bg-white/40 hover:text-primary hover:border hover:border-primary duration-200 border border-transparent backdrop-blur-md px-3 lg:px-5 bg-primary text-white font-[500] leading-[24px] -tracking-[.3px] rounded-md ${className}`}>{children}</Link>
  )
}

export default Button
