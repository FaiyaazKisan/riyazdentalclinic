import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDeleteMyCaseMutation } from '../../API/MyCasesApi';
import MyCasesAdminPropsInterface from './MyCasesAdminPropsInterface'

function MyCasesAdminCard({MyCaseProps}:MyCasesAdminPropsInterface) {
    const navigate=useNavigate();
    const[deleteMyCase]=useDeleteMyCaseMutation();
    const handleDelete=async(id:number)=>{
      toast.promise(
        deleteMyCase(id),
        {
          pending:"Processing your Request...",
          success:"Case deleted successfully",
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
        <div className='col-md-1 col-sm-1 mt-1 text-center'><span className='d-flex d-sm-none'>Sr. {MyCaseProps.sequence}.</span><span className='d-none d-sm-flex'>{MyCaseProps.sequence}.</span></div>
        <div className='col-md-4 col-sm-4 mt-1'>{MyCaseProps.heading}</div>
        <div className='col-md-2 col-sm-2 mt-1'><img src={`https://192.168.0.106:7010/${MyCaseProps.file}`} style={{maxHeight:"50px"}}/></div>
        <div className='col-md-5 col-sm-5 mt-2 d-flex pb-2'><button onClick={()=>navigate("/Admin/MyCasesAdmin/EditCase/"+MyCaseProps.id)} className='btn btn-info mt-1' style={{maxHeight:"40px"}}><i className="bi bi-pencil-square"></i> Edit</button> <button onClick={()=>{window.confirm("Are you sure you want to delete this case?") && handleDelete(MyCaseProps.id);}} className='btn btn-danger mt-1 mx-2' style={{maxHeight:"40px"}}><i className="bi bi-trash-fill"></i> Delete</button></div>
      </div>
      <div className='offset-md-2 border rounded row mt-3 m-1 d-flex d-sm-none' style={{maxWidth:"700px"}}>
        <div className='col-md-1 col-sm-1 mt-1 text-center'><span className='d-flex d-sm-none'>Sr. {MyCaseProps.sequence}.</span><span className='d-none d-sm-flex'>{MyCaseProps.sequence}.</span></div>
        <div className='col-md-4 col-sm-4 mt-1'>{MyCaseProps.heading}</div>
        <div className='col-md-2 col-sm-2 mt-1'><img src={`https://192.168.0.106:7010/${MyCaseProps.file}`} style={{maxHeight:"50px"}}/></div>
        <div className='col-md-5 col-sm-5 mt-2 d-flex pb-2'>
        {/* @ts-ignore */}
          <button onClick={()=>{navigate("/Admin/MyCasesAdmin/EditCase/"+MyCaseProps.id);window.scrollTo({top:0, left:0, behavior:"instant"})}} className='btn btn-info mt-1' style={{maxHeight:"40px"}}><i className="bi bi-pencil-square"></i> Edit</button>
          <button onClick={()=>{window.confirm("Are you sure you want to delete this case?") && handleDelete(MyCaseProps.id);}} className='btn btn-danger mt-1 mx-2' style={{maxHeight:"40px"}}><i className="bi bi-trash-fill" style={{maxHeight:"40px"}}></i> Delete</button>
        </div>
      </div>
    </div>
  )
}

export default MyCasesAdminCard