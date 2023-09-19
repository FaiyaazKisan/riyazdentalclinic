import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEditMyCasesMutation, useGetMyCasesByIdQuery } from '../../API/MyCasesApi';
import AuthHOC from '../../HOC/AuthHOC';
import ApiResponseInterface from '../../Interface/ApiResponseInterface';
import Toastify from '../../Layout/Toastify';

function EditCase() {
    const {id}=useParams();
    const[heading, setHeading]=useState("");
    const[loading, setLoading]=useState(false);
    const[uploadFile, setUploadFile]=useState<any>();
    const navigate=useNavigate();
    const{data, isLoading}=useGetMyCasesByIdQuery(id);
    const[editMyCases]=useEditMyCasesMutation();
    
    useEffect(()=>{
      if(data&&data.result){
        setHeading(data.result.heading);
      }
    },[data])
    
    const handleImageUpload=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file=e.target.files && e.target.files[0];
        const fileExt=file?.type.split("/")[1];
        const validFileType=["jpg", "png", "jpeg"];
        const isFileTypeValid=validFileType.filter((e)=>{
          return e===fileExt;
        })
        if(isFileTypeValid.length===0){
          Toastify("File type should be in jpg, png and jpeg format only", "error");
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
      const response:ApiResponseInterface=await editMyCases({
        id:id,
        MyCasesData:formData
      });
      if(response.data?.isSuccess==true){
        setLoading(false);
        Toastify("Case updated successfully");
        navigate("/Admin/MyCasesAdmin/MyCasesAdminList");
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
        <h1 className='text-success'>Edit Case</h1>
        <form method='post' encType='multipart/form-data' onSubmit={(e)=>handleSubmit(e)}>
            <p>Heading<br/><input type="text" name='heading' value={heading} onChange={(e)=>setHeading(e.target.value)} className="form-control" style={{width:"100%", maxWidth:"400px"}}/></p>
            <p>File upload<br/><input type="file" onChange={handleImageUpload} className="form-control" style={{width:"100%", maxWidth:"400px"}}/></p>
            <div className='d-flex'>
            {loading?(<button className='btn btn-success btn-block' style={{width:"100%", maxWidth:"199px"}} disabled>Processing...</button>):(<button className='btn btn-success btn-block' style={{width:"100%", maxWidth:"199px"}}>Submit</button>)}
            {/* @ts-ignore */}
            <button onClick={()=>{navigate("/Admin/MyCasesAdmin/MyCasesAdminList");window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-secondary btn-block mx-2' style={{width:"100%", maxWidth:"199px"}}>Back</button>
            </div>
        </form>
    </div>
  )
}

export default AuthHOC(EditCase)