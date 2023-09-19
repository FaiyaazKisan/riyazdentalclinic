import React, { useLayoutEffect } from 'react'
const MetalBraces=require("../src/Images/Services/MetalBraces.jpg")
const CeramicBraces=require("../src/Images/Services/CeramicBraces.jpg")
const MetalSelfLigatingBraces=require("../src/Images/Services/MetalSelfLigatingBraces.jpg")
const ClearAligners=require("../src/Images/Services/ClearAligners.jpg")
const CeramicSelfLigatingBraces=require("../src/Images/Services/CeramicSelfLigatingBraces.jpeg")
const BracesForKids=require("../src/Images/Services/BracesForKids.jpg")

function Services() {
  return (
    <div className='container'>
      <h1 className='text-success mt-2'>Services</h1>
      <div className='row'>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>1. Metal Braces</b></p>
          <img src={MetalBraces} style={{width:"100%", maxWidth:"500px"}} className="p-3"/>
        </div>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>2. Ceramic Braces</b></p>
          <img src={CeramicBraces} style={{width:"100%", maxWidth:"500px"}} className="p-3"/>
        </div>
      </div>
      <div className='row'>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>3. Metal Self Ligating Braces</b></p>
          <img src={MetalSelfLigatingBraces} style={{width:"100%", maxWidth:"500px"}} className="p-3"/>
        </div>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>4. Ceramic Self Ligating Braces</b></p>
          <img src={CeramicSelfLigatingBraces} style={{width:"100%", maxWidth:"500px"}} className="p-3"/>
        </div>
      </div>
      <div className='row'>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>5. Clear Aligners</b></p>
          <img src={ClearAligners} style={{width:"100%", maxWidth:"500px"}} className="p-3"/>
        </div>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>6. Mini-Implant Assisted Orthodontics</b></p>
        </div>
      </div>
      <div className='row'>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>7. Cleft Lip and Cleft Palate Cases</b></p>
        </div>
        <div className='mt-3 col-md-6 border'>
          <p className='mt-2'><b>8. Surgical Orthodontics</b></p>
        </div>
      </div>
      <div className='row'>
        <div className='mt-3 col-md-6 border mb-5'>
          <p className='mt-2'><b>9. Braces for Kids</b></p>
          <img src={BracesForKids} style={{width:"100%", maxWidth:"500px"}} className="p-3"/>
        </div>
      </div>
    </div>
  )
}

export default Services