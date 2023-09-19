import React, { useLayoutEffect } from 'react'
const RiyazDp=require('../src/Images/RiyazDp.png')

function About() {
  return (
    // <div className='container'>
    // <div className='row'>
    //   <div className='col-md-6 m-2'>
    //   <p><b>About us</b></p>
    //   <h1>Dr. Riyaz Kisan Dental Clinic</h1>
    //   </div>
    //   <div className='col-md-6 m-2'>
    //   <img src={RiyazDp} style={{width:"100%", maxWidth:"400px", marginLeft:"50px"}} className="mb-3"/>
    //   </div>
    // </div>
    // </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-12'>
            <h3 className='text-success mt-4'>About us</h3>
            <h1>Dr. Riyaz Kisan Dental Clinic</h1>
        </div>
        <div className='col-md-4 col-12 mt-4 mb-5'>
            <img src={RiyazDp} style={{width:"100%", maxWidth:"350px"}} alt=""/>
        </div>
        </div>
        
    </div>
  )
}

export default About