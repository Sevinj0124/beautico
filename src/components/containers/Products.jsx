import React from 'react'
import Cards from './Cards'
import './Products.css'
const Products = () => {
  return (
    <> 
    <div className='text-center'> 
    <div className="basliq">
      <button className='best-sellers p-3'>Best sellers</button>
      <h1>The most trusted products by our <br /> customers</h1>
    </div>
<div className="articles-three">
  <Cards /> 
</div>
    </div>
    <div className="articles-two">
      <Cards-2 />
    </div>
    </>
  )
}

export default Products