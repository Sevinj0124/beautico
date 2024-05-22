import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <> 
  
<section>
  <div className="row">
 
  
  <div className="left-side col-12 col-md-6 col-lg-6 p-5">
  <button className='posts p-2'>Latest posts </button>
    <h3 className='py-3'>From our blog</h3>
    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div className="right-side col-12 col-md-6 col-lg-6 ">
  <button className='view p-2'>View all posts</button>
  </div>
  </div>
</section>


      <div className="row">
        <div className="col-12 p-4  gap-3 d-flex">
          <div className="card">
          <img src="/assets/images/blog1.svg" alt="" />
          <h5>Dry acne prone skincare <br /> routine</h5>
          <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <button className='buton p-2'>Read more</button>
        </div>


          <div className="card">
          <img src="/assets/images/blog2.svg" alt="" />
          <h5>5 ingredients to calm down stressed out skin</h5>
          <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <button className='buton p-2'>Read more</button>
        </div>


          <div className="card">
          <img src="/assets/images/blog3.svg" alt="" />
          <h5>How to use products for <br /> sensitive skin</h5>
          <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <button className='buton p-1'>Read more</button>
        </div>
      </div>
      </div>

  
    </>
  )
}

export default Blog