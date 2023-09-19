import React from 'react'
import { useNavigate } from 'react-router-dom';
import DtHome from './Home/DtHome';
import MyCasesHome from './Home/MyCasesHome';
import PTHome from './Home/PtHome';
import ServicesHome from './Home/ServicesHome';
import Banner from './Layout/Banner'
import "../src/CSS/NeonGlow.css"
import BookConsultation from './BookConsultation';
import CertificatesHome from './Home/CertificatesHome';
const ChatOnWhatsapp=require('../src/Images/Contact/WhatsAppButtonGreenLarge.png')

function Home() {
  const navigate=useNavigate();
  return (<>
  <Banner/>
  <div className='container mt-2'>
    <div>
    <h3>Dr. Riyaz N. Kisan (BDS) (MDS)</h3>
    <p>Orthodontics and Dentofacial Orthopaedics<br/>
    (Braces and Aligner specialist)<br/>
    <i className="bi bi-telephone-fill" style={{color:"darkgreen", fontSize:"15px"}}></i> +91 9503803743 <a aria-label="Chat on WhatsApp" href="https://wa.me/919969926811" target="_blank"> <img alt="Chat on WhatsApp" src={ChatOnWhatsapp} style={{width:"100%", maxWidth:"130px"}}/></a><br/>
    <i className="bi bi-geo-alt-fill"></i> <span style={{color:"#8c8c8c", fontSize:"12px"}}>Mumbai, Thane, Navi Mumbai</span></p>
    {/* @ts-ignore */}
    <p><button className='btn text-white sky-neon mb-2' onClick={()=>{navigate('/BookConsultation'); window.scrollTo({top:0, left:0, behavior:"instant"})}}><b>Book Consultation</b></button></p>
    </div>
  
  <ServicesHome/>
  <div className='border rounded mt-5'>
  <BookConsultation/>
  </div>
  <MyCasesHome/> 
  <DtHome/>
  <PTHome/>
  <CertificatesHome/>
  </div> 
    </>
  )
}

export default Home