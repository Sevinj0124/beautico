import React from 'react'
import'./Contact.css'

const Contact = () => {
  return (
    <div className='row'>
      <div className="left-side col-12 col-md-6 col-lg-6 p-5">
<h2>Frequently asked  <br />questions</h2>
<p className='text-secondary'>Frequently asked questions ordered by popularity. <br /> Remember that if the visitor has not committed to the call <br /> to action, they may still have questions (doubts) that can be  <br />answered.</p>
<button className='contact p-2 text-white'>Contact us</button>
      </div>

      <div className="right-side col-12 col-md-6 col-lg-6 py-5">
<h6 className='text-secondary'> Join our newsletter to stay up to date on features and releases.</h6>
<input  className="p-2" type="text" />
<button className='subscribe p-2 text-white'>Subscribe</button>
      </div>

    </div>
  )
}

export default Contact