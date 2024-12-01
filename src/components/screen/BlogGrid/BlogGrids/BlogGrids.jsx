import React from 'react'
import blogGrid from '../../../../assets/images/blogGrid.png'
const BlogGrids = () => {
  return (
    <div>
      <div className="w-full lg:h-[300px] xl:h-[560px]">
        <img className='w-full h-full object-cover' src={blogGrid} alt="" />
      </div>
    </div>
  )
}

export default BlogGrids
