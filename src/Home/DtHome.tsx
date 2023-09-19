import React from 'react'
import { Link } from 'react-router-dom';
import { useGetDTQuery } from '../API/DTApi';
import DTInterface from '../Interface/DTInterface';
import MiniLoader from '../Layout/MiniLoader';

function DtHome() {
    const{data, isLoading}=useGetDTQuery(null);
  return (<div className='mt-3'>
    {isLoading?(<MiniLoader/>):(
        <>
        <h3 className='text-success d-none d-sm-flex'>Recent Doctors Testimonial</h3>
        <div className='row d-none d-sm-flex'>
        {data.result.toReversed().slice(0,3).map((DT:DTInterface, index:number)=>(
            <div className='mb-4' style={{width:"33.33%"}} key={index}>
            <p><b>{DT.heading}</b></p>
            <video src={`https://192.168.0.106:7010/${DT.file}`} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}} controls/>
            </div>
        ))}
        </div>
        <div className='d-none d-sm-block text-center'>
        {/*@ts-ignore*/ }
          <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Testimonials/DoctorsTestimonials">
          <button className='btn text-white sky-neon' style={{width:"100%", maxWidth:"200px"}}><b>Show More</b></button>
          </Link>
        </div>
        <div className='container d-sm-none'>
        <h3 className='text-success'>Recent Doctors Testimonial</h3>
        {data.result.toReversed().slice(0,3).map((DT:DTInterface, index:number)=>(
            <div className='mb-4' style={{width:"100%"}} key={index}>
            <p><b>{DT.heading}</b></p>
            <video src={`https://192.168.0.106:7010/${DT.file}`} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}} controls/>
            </div>
        ))}
        <div style={{width:"100%", marginTop:"30px", marginBottom:"30px"}} className="text-center">
        {/*@ts-ignore*/ }
          <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Testimonials/DoctorsTestimonials">
          <button className='btn text-white sky-neon' style={{width:"100%", maxWidth:"200px"}}><b>Show More</b></button>
          </Link>
        </div>
        </div>
        </>
      )}
</div>
  )
}

export default DtHome