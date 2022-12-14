import React, { useState } from 'react'
import{Link} from "react-router-dom"

const Navbar = () => {

    const [MobileMenu ,setMobileMenu]=useState(false)
  return (
    <div>
       <header className="header">
        <div className="container d_flex">
          <div className='categories d_flex'>
          <span className='fas fa-border-all'></span>
          <h4>
            Categories <i className='fa fa-chevron-down'></i>
          </h4>
        </div>
        
        <div className='navlink'>
          <ul className={MobileMenu ? "nav-links-MobileMenu":"link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
          
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/pages'>Product</Link>
            </li>
            <li>
            <Link to='/vendor'>Order</Link>
            </li>
            <li>
              <Link to='/track'>Stock Management</Link>
            </li>
            <li>
            <Link to='/contact'>Service</Link>
            </li>
            <li>
            <Link to='/contact'>contact</Link>
            </li>
           </ul>
           <button className='toggle' onClick={() => setMobileMenu(!setMobileMenu)}>
            {MobileMenu ?<i className='fas fa-times close home-bth'></i>:
            <i className='fas fa-bars open'></i>}
           </button>
        </div>
        </div>
       </header>
        </div>
  )
}

export default Navbar