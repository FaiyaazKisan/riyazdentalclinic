import React, { useState } from 'react'
import { useGetMyCasesQuery } from './API/MyCasesApi';
import MyCasesInterface from './Interface/MyCasesInterface';
import MainLoader from './Layout/MainLoader';
import "../src/CSS/NeonGlow.css"

function MyCases() {
  const {data, isLoading}=useGetMyCasesQuery(null);
  const[index, setIndex]=useState<number>(18);
  return (<div className='container'>
    <h1 className='text-success mt-2'>My Cases</h1>
    {isLoading?(<MainLoader/>):(
      <>
      <div className='row mt-3'>
      {data.result.toReversed().slice(0,index).map((myCase:MyCasesInterface, index:number)=>(
        <div className='col-md-4 col-12 mb-4' key={index}>
          <p><b>{myCase.heading}</b></p>
          <img src={`https://192.168.0.106:7010/${myCase.file}`} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
        </div>
      ))}
    </div>
    <div className='text-center mb-5'>
      {index>data.result.length-1?(<button className='btn btn-primary' disabled><b>Show More Cases</b></button>):(<button onClick={()=>setIndex(u=>u!+18)} className='btn btn-primary sky-neon'><b>Show More Cases</b></button>)}
    </div>
    </>
    )}
    
    
    </div>
  )
}

export default MyCases