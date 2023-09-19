import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDeletePTMutation } from '../../API/PTApi';
import PTAdminPropsInterface from './PTAdminPropsInterface'

function PTAdminCard({PTProps}:PTAdminPropsInterface) {
    const navigate=useNavigate();
    const[deletePT]=useDeletePTMutation();
    const handleDelete=async(id:number)=>{
      toast.promise(
        deletePT(id),
        {
          pending:"Processing your Request...",
          success:"Patients Testimonial deleted successfully",
          error:"Something went wrong"
        },
        {
          theme:"dark"
        }
      )
    }
  return (
    <div>
      <div className='offset-md-2 border rounded row mt-3 d-none d-sm-flex' style={{maxWidth:"700px"}}>
        <div className='col-md-1 col-sm-1 mt-1 text-center'><span className='d-flex d-sm-none'>Sr. {PTProps.sequence}.</span><span className='d-none d-sm-flex'>{PTProps.sequence}.</span></div>
        <div className='col-md-4 col-sm-4 mt-1'>{PTProps.heading}</div>
        <div className='col-md-2 col-sm-2 mt-1'><video src={`https://192.168.0.106:7010/${PTProps.file}`} style={{maxHeight:"50px"}}/></div>
        {/* @ts-ignore */}
        <div className='col-md-5 col-sm-5 mt-2 d-flex pb-2'><button onClick={()=>{navigate("/Admin/PatientsTestimonialAdmin/EditPatientsTestimonial/"+PTProps.id);window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-info mt-1' style={{maxHeight:"40px"}}><i className="bi bi-pencil-square"></i> Edit</button> <button onClick={()=>{window.confirm("Are you sure you want to delete this Patients Testimonial?") && handleDelete(PTProps.id);}} className='btn btn-danger mt-1 mx-2' style={{maxHeight:"40px"}}><i className="bi bi-trash-fill"></i> Delete</button></div>
      </div>
      <div className='offset-md-2 border rounded row mt-3 m-1 d-flex d-sm-none' style={{maxWidth:"700px"}}>
        <div className='col-md-1 col-sm-1 mt-1 text-center'><span className='d-flex d-sm-none'>Sr. {PTProps.sequence}.</span><span className='d-none d-sm-flex'>{PTProps.sequence}.</span></div>
        <div className='col-md-4 col-sm-4 mt-1'>{PTProps.heading}</div>
        <div className='col-md-2 col-sm-2 mt-1'><video src={`https://192.168.0.106:7010/${PTProps.file}`} style={{maxHeight:"50px"}}/></div>
        {/* @ts-ignore */}
        <div className='col-md-5 col-sm-5 mt-2 d-flex pb-2'><button onClick={()=>{navigate("/Admin/PatientsTestimonialAdmin/EditPatientsTestimonial/"+PTProps.id);window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-info mt-1' style={{maxHeight:"40px"}}><i className="bi bi-pencil-square"></i> Edit</button> <button onClick={()=>{window.confirm("Are you sure you want to delete this Patients Testimonial?") && handleDelete(PTProps.id);}} className='btn btn-danger mt-1 mx-2' style={{maxHeight:"40px"}}><i className="bi bi-trash-fill"></i> Delete</button></div>
      </div>
    </div>
  )
}

export default PTAdminCard