import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <> 
    <div className='intro  d-flex justify-content space-between align-items-center p-4 '>
        <div className="left-side container">
        <h1 className='left-side'>Hydrated skin in 3 <br /> easy steps</h1> 
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
         <img className='right-side' src="/assets/images/photo1.svg" alt="" /></div>


         <div className="about-us ">
<button className='button-about-us p-3 '>About us</button>
<h1 className='text-center'>The beautiful story</h1>
<p className='text-secondary text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique. Duis cursus, mi quis viverra ornare,  eros dolor interdum nulla,<br /> ut commodo diam libero vitae erat.</p>
         </div>
         </>
  )
}

export default Home