import React from 'react'
import { Link } from 'react-router-dom';
import { useGetMyCasesQuery } from '../API/MyCasesApi';
import MyCasesInterface from '../Interface/MyCasesInterface';
import MiniLoader from '../Layout/MiniLoader';
import "../../src/CSS/NeonGlow.css"

function MyCasesHome() {
    const{data, isLoading}=useGetMyCasesQuery(null);
  return (<div className='mt-4'>
    <h3 className='text-success d-none d-sm-flex'>My Recent Cases</h3>
    {isLoading?(<MiniLoader/>):(
        <>
        <div className='row d-none d-sm-flex'>
        {data.result.toReversed().slice(0,3).map((myCase:MyCasesInterface, index:number)=>(
            <div className='mb-4' style={{width:"33.33%"}} key={index}>
            <p><b>{myCase.heading}</b></p>
            <img src={`https://192.168.0.106:7010/${myCase.file}`} style={{width:"100%", maxWidth:"300px", border:"1px solid black"}}/>
            </div>
        ))}
        </div>
        <div className='d-none d-sm-block text-center'>
        {/*@ts-ignore*/ }
          <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/MyCases">
          <button className='btn text-white sky-neon' style={{width:"100%", maxWidth:"200px"}}><b>Show More</b></button>
          </Link>
        </div>
        <div className='container d-sm-none'>
        <h3 className='text-success'>My Recent Cases</h3>
        {data.result.toReversed().slice(0,3).map((myCase:MyCasesInterface, index:number)=>(
            <div className='mb-4' style={{width:"100%"}} key={index}>
            <p><b>{myCase.heading}</b></p>
            <img src={`https://192.168.0.106:7010/${myCase.file}`} style={{width:"100%", maxWidth:"500px", border:"1px solid black"}}/>
            </div>
        ))}
        <div style={{width:"100%", marginTop:"30px", marginBottom:"30px"}} className="text-center">
        {/*@ts-ignore*/ }
          <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/MyCases">
          <button className='btn text-white sky-neon' style={{width:"100%", maxWidth:"200px"}}><b>Show More</b></button>
          </Link>
        </div>
        </div>
        </>
      )}
</div>
  )
}

export default MyCasesHome