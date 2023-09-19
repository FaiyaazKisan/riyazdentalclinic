import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEditDTMutation, useGetDTByIdQuery } from '../../API/DTApi';
import AuthHOC from '../../HOC/AuthHOC';
import ApiResponseInterface from '../../Interface/ApiResponseInterface';
import Toastify from '../../Layout/Toastify';

function EditDT() {
    const {id}=useParams();
    const[heading, setHeading]=useState("");
    const[loading, setLoading]=useState(false);
    const[uploadFile, setUploadFile]=useState<any>();
    const navigate=useNavigate();
    const{data, isLoading}=useGetDTByIdQuery(id);
    const[editDT]=useEditDTMutation();
    
    useEffect(()=>{
      if(data&&data.result){
        setHeading(data.result.heading);
      }
    },[data])
    
    const handleImageUpload=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file=e.target.files && e.target.files[0];
        const fileExt=file?.type.split("/")[1];
        const validFileType=["mp4"];
        const isFileTypeValid=validFileType.filter((e)=>{
          return e===fileExt;
        })
        if(isFileTypeValid.length===0){
          Toastify("File type should be in mp4 format only", "error");
        }
        else{
          setUploadFile(file);
        }
    }
    
    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setLoading(true);
      const formData=new FormData();
      formData.append("Id", id!);
      formData.append("Heading", heading);
      if(uploadFile){
        formData.append("File", uploadFile);
      }
      const response:ApiResponseInterface=await editDT({
        id:id,
        DTData:formData
      });
      if(response.data?.isSuccess==true){
        setLoading(false);
        Toastify("Doctors Testimonial updated successfully");
        navigate("/Admin/DoctorsTestimonialAdmin/DoctorsTestimonialAdminList");
        // @ts-ignore
        window.scrollTo({top:0, left:0, behavior:"instant"});
      }
      else{
        setLoading(false);
        Toastify("Something went wrong.", "error");
      }
    }
  return (
    <div className='container'>
        <h1 className='text-success'>Edit Doctors Testimonial</h1>
        <form method='post' encType='multipart/form-data' onSubmit={(e)=>handleSubmit(e)}>
            <p>Heading<br/><input type="text" name='heading' value={heading} onChange={(e)=>setHeading(e.target.value)} className="form-control" style={{width:"100%", maxWidth:"400px"}}/></p>
            <p>File upload<br/><input type="file" onChange={handleImageUpload} className="form-control" style={{width:"100%", maxWidth:"400px"}}/></p>
            <div className='d-flex'>
            {loading?(<button className='btn btn-success btn-block' style={{width:"100%", maxWidth:"199px"}} disabled>Processing...</button>):(<button className='btn btn-success btn-block' style={{width:"100%", maxWidth:"199px"}}>Submit</button>)}
            {/* @ts-ignore */}
            <button onClick={()=>{navigate("/Admin/DoctorsTestimonialAdmin/DoctorsTestimonialAdminList");window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-secondary btn-block mx-2' style={{width:"100%", maxWidth:"199px"}}>Back</button>
            </div>
        </form>
    </div>
  )
}

export default AuthHOC(EditDT)