import React from 'react'
import { Link } from 'react-router-dom'
const FacebookLogo=require('../../src/Images/Contact/FacebookLogo.svg').default;
const InstagramLogo=require('../../src/Images/Contact/InstagramLogo.svg').default;
const LinkedInLogo=require('../../src/Images/Contact/LinkedInLogo.svg').default;

function Footer() {
  return (
    <div className='p-3' style={{backgroundColor:"#013220", bottom:"0", position:"absolute", width:"100%"}}>
      <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-sm-4'>
        {/*@ts-ignore*/ }
        <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/BookConsultation" style={{textDecoration:"none", color:"darkgray", fontSize:"13px"}}>Book Consultation</Link><br/>
        {/*@ts-ignore*/ }
        <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/About" style={{textDecoration:"none", color:"darkgray", fontSize:"13px"}}>About</Link><br/>
        {/*@ts-ignore*/ }
        <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Services" style={{textDecoration:"none", color:"darkgray", fontSize:"13px"}}>Services</Link><br/>
        {/*@ts-ignore*/ }
        <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Contact" style={{textDecoration:"none", color:"darkgray", fontSize:"13px"}}>Contact</Link><br/>
        </div>
        <div className='col-md-4 col-sm-4'>
        {/*@ts-ignore*/ }
        <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/MyCases" style={{textDecoration:"none", color:"darkgray", fontSize:"13px"}}>My Cases</Link><br/>
        {/*@ts-ignore*/ }
        <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Testimonials/DoctorsTestimonials" style={{textDecoration:"none", color:"darkgray", fontSize:"13px"}}>Doctors Testimonials</Link><br/>
        {/*@ts-ignore*/ }
        <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Testimonials/PatientsTestimonials" style={{textDecoration:"none", color:"darkgray", fontSize:"13px"}}>Patients Testimonials</Link><br/>
        </div>
        <div className='col-md-4 col-sm-4' style={{color:"darkgray"}}>
        <h4>Find us Online</h4>
        <p><a href='https://www.facebook.com/riyaz.kisan' target='_blank'><img src={FacebookLogo} style={{width:"40px"}} className="mx-2"/></a> <a href='https://www.instagram.com/riyaz15june/' target='_blank'><img src={InstagramLogo} style={{width:"40px"}} className="mx-2"/></a> <a href='https://in.linkedin.com/in/dr-riyaz-kisan-68b105151' target='_blank'><img src={LinkedInLogo} style={{width:"40px"}} className="mx-2"/></a></p>
        </div>
      </div>
      </div>
      <div className='text-center mt-2' style={{color:"whitesmoke"}}>© 2023. Dr Riyaz Kisan Dental Clinic. All Rights Reserved.
      </div>
      <div className='text-center mt-2 d-none d-sm-block' style={{color:"darkgray", fontSize:"13px"}}>Website Designed and Developed by Faiyaaz Kisan (<a href='https://wa.me/919969926811' target="_blank">+91&nbsp;9969926811</a>)
      </div>
      <div className='text-center mt-2 d-block d-sm-none' style={{color:"darkgray", fontSize:"13px", marginBottom:"50px"}}>Website Designed and Developed by Faiyaaz Kisan (<a href='https://wa.me/919969926811' target="_blank">+91&nbsp;9969926811</a>)
      </div>
      </div>
  )
}

export default Footer