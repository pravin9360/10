import React from 'react'
import logo from './logo.png';
const Head = () => {
  return (
    <div>
       <section className="head">
            <div className="container d_flex">
                <div className="left row" >
                    <i className="fa fa-phone"></i>
                    <lable>+91 9360515218 </lable>
                    <i className="fa fa-envelope" style={{paddingLeft:"10px"}}  ></i>
                    <label>gcvrapp@gmail.com</label>
                </div>
                <div className="right row Rtext">
                    <label>Theme FAQ's </label>
                    <label>Need Helps </label>
                    <span > 12</span>
                    <i class="flag flag-in"></i>

                    <span>🇮🇳</span>
                    <label htmlFor=''>IN</label>
                </div>
            </div>
       </section>
        </div>
  )
}

export default Head

