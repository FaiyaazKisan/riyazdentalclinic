import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetDTQuery } from '../../API/DTApi';
import AuthHOC from '../../HOC/AuthHOC';
import DTInterface from '../../Interface/DTInterface';
import MainLoader from '../../Layout/MainLoader';
import DTAdminCard from './DTAdminCard';

function DTAdminList() {
    const{data, isLoading}=useGetDTQuery(null);
    const[nextIndex, setNextIndex]=useState<number>(20);
    const[prevIndex, setPrevIndex]=useState<number>(0);
    const[currentPage, setCurrentPage]=useState<number>(1);
    const[lengthDT, setLengthDT]=useState<number>(0);
    const[lastPage, setLastPage]=useState<number>(0);
    const[apiData, setApiData]=useState<any>([]);

    let SrArray:any=[];
    useEffect(()=>{
      if(data && data.result){
        for(let i=1; i<=data.result.length;i++){
          SrArray.push(i);
        }
        const resultNew=data.result.map((DT:DTInterface, index:number)=>({
          ...DT, sequence:SrArray[index]
        }))
      setApiData(resultNew);
      setLastPage(Math.ceil(resultNew.length/20));
      setLengthDT(resultNew.length);
    }
    }, [data])
    
    const handleNextButton=()=>{
      setNextIndex(x=>x+20);
      setPrevIndex(x=>x+20);
      setCurrentPage(x=>x+1);
      window.scrollTo(0,0);
    }
    const handlePrevButton=()=>{
      setNextIndex(x=>x-20);
      setPrevIndex(x=>x-20);
      setCurrentPage(x=>x-1);
      window.scrollTo(0,0);
    }
    const handleGoToLastButton=()=>{
    setNextIndex(Math.ceil(lengthDT/20)*20);
    setPrevIndex((Math.ceil(lengthDT/20)*20)-20);
    setCurrentPage(lastPage);
    window.scrollTo(0,0);
    }
    const handleGoToFirstButton=()=>{
    setNextIndex(20);
    setPrevIndex(0);
    setCurrentPage(1);
    window.scrollTo(0,0);
    }
  return (
    <>
    {isLoading?(<MainLoader/>):(
    <div className='container'>
    <h1 className='offset-md-2 text-success mt-2'>Doctors Testimonial (Admin)</h1>
    <div className='offset-md-2 d-flex justify-content-end d-none d-sm-flex' style={{maxWidth:"700px"}}>
        {/*@ts-ignore*/ }
    <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Admin/DoctorsTestimonialAdmin/AddNewDoctorsTestimonial"><button className='btn btn-success'><i className="bi bi-journal-plus"></i> Add New Doctors Testimonial</button></Link>
    </div>
    <div className='offset-md-2 d-flex justify-content-start d-flex d-sm-none' style={{maxWidth:"700px"}}>
        {/*@ts-ignore*/ }
    <Link onClick={()=>window.scrollTo({top:0, left:0, behavior:"instant"})} to="/Admin/DoctorsTestimonialAdmin/AddNewDoctorsTestimonial"><button className='btn btn-success'><i className="bi bi-journal-plus"></i> Add New Doctors Testimonial</button></Link>
    </div>
    <div className='offset-md-2 border rounded row mt-3 d-none d-sm-flex' style={{maxWidth:"700px"}}>
      <h6 className='col-md-1 col-sm-1 mt-1'>Sr.</h6>
      <h6 className='col-md-4 col-sm-3 mt-1'>Heading</h6>
      <h6 className='col-md-2 col-sm-3 mt-1'>File</h6>
    </div>
    {apiData.toReversed().slice(prevIndex,nextIndex).map((DT:DTInterface, index:number)=>(
    <DTAdminCard DTProps={DT} key={index}/>
    ))}
    <div className='mb-5'>
      <div className='offset-md-2 mt-3 d-flex justify-content-end' style={{maxWidth:"700px"}}>
      <button onClick={()=>handleGoToFirstButton()} className="btn btn-outline-primary" title='Go to First Page' disabled={currentPage===1}>
      <i className="bi bi-chevron-double-left"></i>
      </button>
      <button onClick={()=>handlePrevButton()} className="btn btn-outline-primary ms-4" title='Previous Page' disabled={currentPage===1}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <button onClick={()=>handleNextButton()} className="btn btn-outline-primary ms-3" title='Next Page' disabled={currentPage===lastPage}>
        <i className="bi bi-chevron-right"></i>
      </button>
      <button onClick={()=>handleGoToLastButton()} className="btn btn-outline-primary ms-4 me-3" title='Go to Last Page' disabled={currentPage===lastPage}>
      <i className="bi bi-chevron-double-right"></i>
      </button>
      <span className='mt-2' style={{color:"darkgray"}}>Page {currentPage} of {lastPage}</span>
      </div>
    </div>
    </div>
    )}
    </>
  )
}

export default AuthHOC(DTAdminList)