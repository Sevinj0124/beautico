import React from 'react'
 import './Cards.css'
const Cards = () => {
  return (
    <> 
    <div className="row">
      <div className="col-12 ">
        <div className="cards d-flex p-5 gap-4">
    <div className='card'>
        <img src="/assets/product1.svg" alt="" />
        <h3><span>Clean</span>$32.00 </h3>
        <p>Lorem ipsum dolor sit amet</p>
        <button className='knopka'>Product details</button>
    </div>
    <div className='card'>
        <img src="/assets/images/product2.svg" alt="" />
        <h3><span>Tone</span>$17.00 </h3>
        <p>Lorem ipsum dolor sit amet</p>
        <button className='knopka'>Product details</button>
    </div>
    <div className='card'>
        <img src="/assets/product3.svg" alt="" />
        <h3><span>Soft</span>$54.00 </h3>
        <p>Lorem ipsum dolor sit amet</p>
        <button className='knopka'>Product details</button>
    </div>
    </div>
    </div>
    </div>



 <div className="row"> 
 <div className="container"> 
 <div className="col-12"> 
    <div className="cards-two d-flex p-5 gap-5">
      
      <div className="card">
      <h3>Best selling creams</h3>
      <p className='text-secondary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br />Suspendisse varius enim in eros elementum tristique.</p>
      <button>Shop now</button>
      <img src="/assets/images/Product4.svg" alt="" />
    </div>
    <div className="card">
      <h3>Best selling lotions</h3>
      <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br />Suspendisse varius enim in eros elementum tristique.</p>
      <button>Shop now</button>
      <img src="/assets/images/Product5.svg" alt="" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Cards