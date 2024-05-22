import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <> 
    <div className='text-right p-4 '> 
    <button>Latest posts </button>
    <h3>From our blog</h3>
    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button>View all posts</button>
    </div>
      <div className="row">
        <div className="col-12 p-4  gap-3 d-flex">
          <div className="card">
          <img src="/assets/images/blog1.svg" alt="" />
          <h5>Dry acne prone skincare routine</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <button>Read more</button>
        </div>


          <div className="card">
          <img src="/assets/images/blog2.svg" alt="" />
          <h5>5 ingredients to calm down stressed out skin</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <button>Read more</button>
        </div>


          <div className="card">
          <img src="/assets/images/blog3.svg" alt="" />
          <h5>How to use products for sensitive skin</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <button>Read more</button>
        </div>
      </div>
      </div>

  
    </>
  )
}

export default Blog