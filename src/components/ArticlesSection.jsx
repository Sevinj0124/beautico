import React from 'react'
import './ArticlesSection.css'

const ArticlesSection = () => {
  return (
    <div className='intro  d-flex justify-content space-between align-items-center p-4 '>
        <div className="left-side container">
        <h1 className='left-side'>Hydrated skin in 3 easy steps</h1> 
        <p className='left-side'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis Cursus mi quis viverra ornare.</p>
   
        </div>
         <img className='right-side' src="/assets/images/product1.svg" alt="" /></div>
  )
}

export default ArticlesSection