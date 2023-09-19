import React, { useLayoutEffect, useState } from 'react'
import { usePostEmailApiMutation } from './API/EmailApi';
import EmailInterface from './Interface/EmailInterface';
import Toastify from './Layout/Toastify';
import "../src/CSS/NeonGlow.css"

function BookConsultation() {
  const[name, setName]=useState("");
  const[mobile, setMobile]=useState("");
  const[city, setCity]=useState("");
  const[pinCode, setPinCode]=useState("");
  const[description, setDescription]=useState("");
  const[PostEmailApi]=usePostEmailApiMutation();
  const[loading, setLoading]=useState(false);

  const regexTel=(e:any)=>{
    const patternTel=/^[\d ()+-]{0,16}$/;
    if(e.target.value===""||patternTel.test(e.target.value)){
      setMobile(e.target.value);
    }
  }

  const regexPinCode=(e:any)=>{
    const patternPinCode=/^\d{0,6}$/;
    if(e.target.value===""||patternPinCode.test(e.target.value)){
      setPinCode(e.target.value);
    }
  }

  const handleSubmit=async(e:React.FormEvent)=>{
    setLoading(true);
    e.preventDefault();
    const response:EmailInterface=await PostEmailApi(`<p><b>Name:</b> ${name}</p><p><b>Mobile No:</b> ${mobile}</p><p><b>City:</b> ${city}</p><p><b>Pin Code:</b> ${pinCode}</p><p><b>Detailed description of problem:</b> ${description}</p>`);
    if(response.data?.isSuccess===true){
      Toastify("Data submitted successfully");
      setName("");
      setMobile("");
      setCity("");
      setPinCode("");
      setDescription("");
    }
    else{
      Toastify("Something went wrong. Please try again later.", "error");
    }
    setLoading(false);
  }
  return (
    <div className='container'>
    <h2 className='mt-2 text-success'>Book Consultation</h2>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <p>Name<br/><input type="text" name='name' value={name} maxLength={100} onChange={(e)=>setName(e.target.value)} className='form-control' style={{maxWidth:"600px"}} required placeholder='Enter your Name...'/></p>
    <p>Mobile No.<br/><input type="text" name='mobile' value={mobile} onChange={regexTel} className='form-control' style={{maxWidth:"600px"}} required placeholder='Enter your Mobile No...'/></p>
    <p>City<br/><input type="text" name='city' value={city} maxLength={100} onChange={(e)=>setCity(e.target.value)} className='form-control' style={{maxWidth:"600px"}} required placeholder='Enter your City...'/></p>

    <p>Pin Code<br/><input type="text" name='pinCode' value={pinCode} onChange={regexPinCode} className='form-control' style={{maxWidth:"600px"}} required placeholder='Enter your Pin Code...'/></p>
    
    <p>Detailed Description of Problem<br/><textarea maxLength={1000} name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control' style={{maxWidth:"600px"}} required placeholder='Describe your Problem...'/><br/>
    </p>
    <p className='text-end' style={{color:'darkgray', maxWidth:"600px", marginTop:"-40px"}}>Characters remaining ({1000-description.length}/1000)</p>
    {loading?(<button className='btn btn-secondary mb-5 btn-block' style={{width:"100%", maxWidth:"200px"}} disabled>Processing...</button>):(<button className='btn btn-success mb-5 btn-block sky-neon' style={{width:"100%", maxWidth:"200px"}}><b>Submit</b></button>)}
    </form>
    {/* <h2 className='mt-2'>Make Payment</h2>
    <p>Please scan below QR code from any payment app</p>
    <img src={QrCode} className="img-fluid mb-5" style={{maxHeight:"400px"}}/> */}
    </div>
  )
}

export default BookConsultation