import React from 'react'
import './Story.css'

const Story = () => {
  return (
    <> 
    <div className='text-center py-4'> 
<button className='how-it-works p-2'>How it works</button>
<h1 className='py-3'>It’s easy as 1, 2, 3</h1>
<p className='text-secondary py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in <br /> eros. Elementum tristique duis cursus, mi quis viverra ornare eros dolor.</p>
    </div>
    <div className="row"> 
   <div className="story-icons d-flex justify-content-center gap-5">
      <div className="story-icons-1 ">
      <img src="/assets/images/icon1.svg" alt="" />
<h4>Apply the product</h4>
<p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Suspendisse varius enim in  <br />eros elementum tristique.</p>
      </div>
      <div className="story-icons-2">
      <img src="/assets/images/icon2.svg" alt="" />
      <h4>Wait for the skin to absorb</h4>
      <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Suspendisse varius enim in  <br />eros elementum tristique.</p>
    
      </div>
      <div className="story-icons-3">
         <img src="/assets/images/icon3.svg" alt="" />
<h4>And that’s it</h4>
<p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Suspendisse varius enim in  <br />eros elementum tristique.</p>
      </div>
      </div>
    </div>

  <section className='row'>
<div className="left-side col-12 col-md-6 col-lg-6">
<img  src="/assets/images/oilyskin.svg" alt="" />
</div>
<div className="right-side col-12 col-md-6 col-lg-6 py-5">
<button className='smooth py-2'>Smooth skin collection </button>
  <h2 className='py-3'>For oily face skin</h2>
  <p className='text-secondary py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit  <br />suspendisse Varius enim in eros elementum tristique, duis cursus  <br />mi quis viverra ornare, eros dolor interdum nulla ut commodo.</p>
<button className='shop  p-2'>Shop now</button>
<button className='explore p-2'>Explore more  </button>
</div> 
  </section>

<section className='row'>
<div className="left-side col-12 col-md-6 col-lg-6 p-5">
<button className='healthy py-2'>Healthy tanning collection</button>
  <h2 className='py-3'>For body skin</h2>
  <p className='text-secondary py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit  <br />suspendisse Varius enim in eros elementum tristique, duis cursus  <br />mi quis viverra ornare, eros dolor interdum nulla ut commodo.</p>
<button className='shop p-2'>Shop now</button>
<button className='explore p-2'>Explore more</button>
</div> 
<div className="right-side col-12 col-md-6 col-lg-6">
<img src="/assets/images/bodyskin.svg" alt="" />
</div>

</section>





    </>
  )
}

export default Story