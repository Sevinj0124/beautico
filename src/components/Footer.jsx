import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer container p-4'>
<div className="row">
    <p className='text-secondary text-right mt-2'>© Beautico by
Minimal Square.Powered by Webflow
.</p>
    <div className="col-12 col-md-4">
        <div className="footer-icons  ">
            <h4 className='text-dark justify-content-center '>Follow us</h4>
            <div className="icons d-flex gap-3">
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
      

    </div>
</div>
    // </div>
  )
}

export default Footer