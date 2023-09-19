import jwtDecode from 'jwt-decode';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePostLoginMutation } from './API/AuthApi';
import ApiResponseInterface from './Interface/ApiResponseInterface';
import AuthInterface from './Interface/AuthInterface';
import MiniLoader from './Layout/MiniLoader';
import Toastify from './Layout/Toastify';
import { getAuthData } from './Redux/AuthSlice';

function Login() {
    const[userName, setUserName]=useState("");
    const[password, setPassword]=useState("");
    const[loading, setLoading]=useState(false);
    const[postLogin]=usePostLoginMutation();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogin=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);
        const response:ApiResponseInterface=await postLogin({
            username:userName,
            password:password
        })
        if(response.data?.isSuccess===true){
            const token=response.data.result.token;
            localStorage.setItem("token", token);
            const{id, fullname, email, role}:AuthInterface=jwtDecode(token);
            dispatch(getAuthData({id, fullname, email, role}));
            navigate("/");
            // @ts-ignore
            window.scrollTo({top:0, left:0, behavior:"instant"})
            setLoading(false);
        }
        else{
            Toastify(response.error.data.errorMessages[0], "error");
            setLoading(false);
        }
    }
  return (
    <div className='container text-center'>
        <form method='post' onSubmit={(e)=>handleLogin(e)}>
        <h1 className='text-success mt-5'>Login</h1>
        <div className='col-md-5 mt-4 mx-auto'>
        <p><input className='form-control' style={{width:"100%", maxWidth:"500px"}} type="text" name='userName' value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Username..." required/></p>
        </div>
        <div className='col-md-5 mx-auto'>
        <p><input className='form-control' style={{width:"100%", maxWidth:"500px"}} type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password..." required/></p>
        </div>
        <button className='btn btn-success mb-3'>Submit</button>{loading?(<><br/><MiniLoader/></>):("")}
        </form>
    </div>
  )
}

export default Login