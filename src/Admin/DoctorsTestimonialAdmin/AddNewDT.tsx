import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateDTMutation } from '../../API/DTApi';
import AuthHOC from '../../HOC/AuthHOC';
import ApiResponseInterface from '../../Interface/ApiResponseInterface';
import Toastify from '../../Layout/Toastify';

function AddNewDT() {
    const[heading, setHeading]=useState("");
    const navigate=useNavigate();
    const[uploadedAsset, setuploadedAsset]=useState<any>();
    const[loading, setLoading]=useState(false);
    const[createDT]=useCreateDTMutation();
    
    const handleImageUpload=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file=e.target.files && e.target.files[0];
        if(file){
            const fileExt=file.type.split("/")[1];
            const validFileTypes=["mp4"];
            const isImgTypeValid=validFileTypes.filter((e)=>{
               return e===fileExt;
            })
            if(isImgTypeValid.length===0){
                Toastify("File type should be in mp4 format only", "error");
                setuploadedAsset(null);
            }
            else{
                setuploadedAsset(file);
            }
        }
    }
    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);
        if(uploadedAsset==null){
            setLoading(false);
            Toastify("Please upload a Video", "error");
            return;
        }
        const formData=new FormData();
        formData.append("Heading", heading);
        formData.append("File", uploadedAsset);
        const response:ApiResponseInterface=await createDT(formData);
        if(response.data?.isSuccess==true){
            setLoading(false);
            Toastify("Doctors Testimonial added successfully");
            navigate("/Admin/DoctorsTestimonialAdmin/DoctorsTestimonialAdminList");
            //@ts-ignore
            window.scrollTo({top:0, left:0, behavior:"instant"})
        }
        else{
            Toastify("Something went wrong.", "error")
            setLoading(false);
        }
    }
  return (
    <div className='container'>
        <h1 className='text-success'>Add New Doctors Testimonial</h1>
        <form method='post' encType='multipart/form-data' onSubmit={(e)=>handleSubmit(e)}>
            <p>Heading<br/><input type="text" name='heading' value={heading} onChange={(e)=>setHeading(e.target.value)} className="form-control" style={{width:"100%", maxWidth:"400px"}}/></p>
            <p>File upload<br/><input type="file" onChange={handleImageUpload} className="form-control" style={{width:"100%", maxWidth:"400px"}} required/></p>
            <div className='d-flex'>
            {loading?(<button className='btn btn-success btn-block' style={{width:"100%", maxWidth:"199px"}} disabled>Processing...</button>):(<button className='btn btn-success btn-block' style={{width:"100%", maxWidth:"199px"}}>Submit</button>)}
            {/* @ts-ignore */}
            <button onClick={()=>{navigate("/Admin/DoctorsTestimonialAdmin/DoctorsTestimonialAdminList");window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-secondary btn-block mx-2' style={{width:"100%", maxWidth:"199px"}}>Back</button>
            </div>
        </form>
    </div>
  )
}

export default AuthHOC(AddNewDT)