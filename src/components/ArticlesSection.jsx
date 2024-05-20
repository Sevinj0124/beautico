import React  from 'react'
import './ArticlesSection.css'

const ArticlesSection = () => {
  return (
   
  
    <div className='intro  d-flex justify-content space-between align-items-center p-4 '>
        <div className="left-side container">
        <h1 className='left-side'>Hydrated skin in 3 easy steps</h1> 
        <p className='left-side'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis Cursus mi quis viverra ornare.</p>
   <div className="butonlar ">
   <button className='shop-now border-0 p-3'>Shop now</button>
   <button className=' our-story border-0 p-3'>Our story</button>
   </div>
   
   
   <div className="logolar">
   <h6 className='trusted-by pt-5'>Trusted by the world's best companies</h6>
    <img src="/assets/images/logo1.svg" alt="" />
   <img src="/assets/images/logo2.svg" alt="" />
   <img src="/assets/images/logo3.svg" alt="" />
   </div>
        </div>
         <img className='right-side' src="/assets/images/product1.svg" alt="" /></div>
         
  )
}

export default ArticlesSection