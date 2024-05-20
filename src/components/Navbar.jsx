import React from 'react'
import { MdClose } from "react-icons/md";
import './Navbar.css'
import { useRef } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const qaraMenyu = useRef ()
    const menyunuAc = () => {
qaraMenyu.current.classList.add("aktiv")
    }
    const menyunuBagla = () => {
        qaraMenyu.current.classList.remove("aktiv")
    }
  return (
    <> 
    <div className="mobile-menu position-fixed" ref={qaraMenyu}>
    <MdClose className='text-white baglama-iconu' onClick={menyunuBagla} />
    <nav className="mobile-links">
        <a href="">Products</a>
        <a href="">Story</a>
        <a href="">Blog</a>
        <a href="">Collections</a>
        <a href="">Contact</a>
    </nav>
    </div>
    <nav className="navbar navbar-expand-lg pt-3">
  <div className="container">
    <Link className="navbar-brand" to="/"></Link>
    <button onClick={menyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active text-secondary" aria-current="page" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-secondary" aria-current="page" to="/Story">Story</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-secondary" aria-current="page" to="/Blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-secondary" aria-current="page" to="/Collections">Collections</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-secondary" aria-current="page" to="/Contact">Contact</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
{/* <div className="butonlar">
<button className='cart border-0'>Cart</button>
<button className='subscribe'>Subscribe</button>
</div> */}

</>
  )
}

export default Navbar