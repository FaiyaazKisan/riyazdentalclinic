import React, { useLayoutEffect, useState } from 'react'
import { useGetPTQuery } from '../API/PTApi';
import PTInterface from '../Interface/PTInterface';
import MainLoader from '../Layout/MainLoader';

function PatientsTestimonials() {
  const{data, isLoading}=useGetPTQuery(null);
  const[index, setIndex]=useState(18);
  return (
    <div className='container'>
      <h1 className='text-success mt-2'>Patients Testimonial</h1>
      {isLoading?(<MainLoader/>):(<>
      <div className='row mt-3'>
      {data.result.toReversed().slice(0,index).map((PT:PTInterface, index:number)=>(
        <div className='col-md-4 col-12 mb-4' key={index}>
          <p><b>{PT.heading}</b></p>
        <video src={`https://192.168.0.106:7010/${PT.file}`} style={{width:"100%", maxWidth:"400px"}} controls></video>
        </div>
      ))}
      </div>
    <div className='text-center mb-5'>
    {index>data.result.length-1?(<button className="btn btn-primary" disabled><b>Show More Testimonial</b></button>):(<button onClick={()=>setIndex(u=>u+18)} className="btn btn-primary sky-neon"><b>Show More Testimonial</b></button>)}
  </div>
  </>
      )}
      
    </div>
  )
}

export default PatientsTestimonials