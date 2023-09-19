import React, { useLayoutEffect } from 'react';
const ChatOnWhatsapp=require('../src/Images/Contact/WhatsAppButtonGreenLarge.png');
const FacebookLogo=require('../src/Images/Contact/FacebookLogo.svg').default;
const InstagramLogo=require('../src/Images/Contact/InstagramLogo.svg').default;
const LinkedInLogo=require('../src/Images/Contact/LinkedInLogo.svg').default;

function Contact() {
  return (
    <div className='container mt-2'>
    <h1 className='text-success mt-2'>Contact us</h1>  
    <p><b>Dr. Riyaz N. Kisan</b><br/>(Braces and Aligner specialist)</p>
    <p><i className="bi bi-house-fill" style={{color:"brown", fontSize:"30px"}}></i> 4B, 104, Kapadia Nagar, CST Road, Kurla (W), Mumbai 400070<br/>
    <i className="bi bi-telephone-fill" style={{color:"darkgreen", fontSize:"30px"}}></i> +91 9503803743 <a aria-label="Chat on WhatsApp" href="https://wa.me/919969926811" target="_blank"> <img alt="Chat on WhatsApp" src={ChatOnWhatsapp} style={{width:"100%", maxWidth:"150px"}}/></a><br/>
    <i className="bi bi-envelope-fill" style={{color:"gold", fontSize:"30px"}}></i> rnkisan3@gmail.com
    </p>
    <p><b>Working Hours</b></p>
    <p>Follow us:</p>
    {/* <p><i className="bi bi-facebook" style={{color:"blue", fontSize:"30px"}}></i> <i className="bi bi-instagram" style={{color:"red", fontSize:"30px"}}></i></p> */}
    <p><a href='https://www.facebook.com/riyaz.kisan' target='_blank'><img src={FacebookLogo} style={{width:"40px"}} className="mx-2"/></a> <a href='https://www.instagram.com/riyaz15june/' target='_blank'><img src={InstagramLogo} style={{width:"40px"}} className="mx-2"/></a> <a href='https://in.linkedin.com/in/dr-riyaz-kisan-68b105151' target='_blank'><img src={LinkedInLogo} style={{width:"40px"}} className="mx-2"/></a></p>
    <p><b>Google Maps</b></p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3770.7574406852054!2d72.87053590582488!3d19.074399355735906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99d82cbe249%3A0x3f9825a121d22409!2sDr.%20Nasir%20Kisan%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1690833206638!5m2!1sen!2sin" className='mb-4' height="450" style={{border:"0", width:"100%", maxWidth:"800px"}} loading="lazy"></iframe>
    </div>
  )
}

export default Contact