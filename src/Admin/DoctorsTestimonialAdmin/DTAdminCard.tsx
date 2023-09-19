import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDeleteDTMutation } from '../../API/DTApi';
import DTPropsInterface from './DTPropsAdminInterface'

function DTAdminCard({DTProps}:DTPropsInterface) {
    const navigate=useNavigate();
    const[deleteDT]=useDeleteDTMutation();
    const handleDelete=async(id:number)=>{
      toast.promise(
        deleteDT(id),
        {
          pending:"Processing your Request...",
          success:"Doctors Testimonial deleted successfully",
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
        <div className='col-md-1 col-sm-1 mt-1 text-center'><span className='d-flex d-sm-none'>Sr. {DTProps.sequence}.</span><span className='d-none d-sm-flex'>{DTProps.sequence}.</span></div>
        <div className='col-md-4 col-sm-4 mt-1'>{DTProps.heading}</div>
        <div className='col-md-2 col-sm-2 mt-1'><video src={`https://192.168.0.106:7010/${DTProps.file}`} style={{maxHeight:"50px"}}/></div>
        {/* @ts-ignore */}
        <div className='col-md-5 col-sm-5 mt-2 d-flex pb-2'><button onClick={()=>{navigate("/Admin/DoctorsTestimonialAdmin/EditDoctorsTestimonial/"+DTProps.id);window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-info mt-1' style={{maxHeight:"40px"}}><i className="bi bi-pencil-square"></i> Edit</button> <button onClick={()=>{window.confirm("Are you sure you want to delete this Doctors Testimonial?") && handleDelete(DTProps.id);}} className='btn btn-danger mt-1 mx-2' style={{maxHeight:"40px"}}><i className="bi bi-trash-fill"></i> Delete</button></div>
      </div>
      <div className='offset-md-2 border rounded row mt-3 m-1 d-flex d-sm-none' style={{maxWidth:"700px"}}>
        <div className='col-md-1 col-sm-1 mt-1 text-center'><span className='d-flex d-sm-none'>Sr. {DTProps.sequence}.</span><span className='d-none d-sm-flex'>{DTProps.sequence}.</span></div>
        <div className='col-md-4 col-sm-4 mt-1'>{DTProps.heading}</div>
        <div className='col-md-2 col-sm-2 mt-1'><video src={`https://192.168.0.106:7010/${DTProps.file}`} style={{maxHeight:"50px"}}/></div>
        {/* @ts-ignore */}
        <div className='col-md-5 col-sm-5 mt-2 d-flex pb-2'><button onClick={()=>{navigate("/Admin/DoctorsTestimonialAdmin/EditDoctorsTestimonial/"+DTProps.id);window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-info mt-1' style={{maxHeight:"40px"}}><i className="bi bi-pencil-square"></i> Edit</button> <button onClick={()=>{window.confirm("Are you sure you want to delete this Doctors Testimonial?") && handleDelete(DTProps.id);}} className='btn btn-danger mt-1 mx-2' style={{maxHeight:"40px"}}><i className="bi bi-trash-fill"></i> Delete</button></div>
      </div>
    </div>
  )
}

export default DTAdminCard