import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<> 
    <section> <div className="row">
<div className="left-side col-12 col-md-6 col-lg-6 p-5 ">
<p className='text-secondary text-right mt-2'>© Beautico by
Minimal Square.Powered by Webflow
.</p>
</div>

<div className="right-side col-12 col-md-6 col-lg-6 p-5 ">
    <h3>Follow us</h3>
<a href="">
                <img src="/assets/images/Facebook.svg" alt="" />
                </a>
                <a href="">
                <img src="/assets/images/Instagram.svg" alt="" />
                </a>
               
               <a href="">
               <img src="/assets/images/Twitter.svg" alt="" />
               </a>
</div>
    </div>

    </section>
   
     </>
  )
}

export default Footer