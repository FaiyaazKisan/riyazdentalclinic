import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import AuthInterface from '../Interface/AuthInterface'
import { getAuthData, initialState } from '../Redux/AuthSlice'
import { Role_Admin } from '../Utility/SD'
import "./Navbar.css"

function Header() {
  const AuthData:AuthInterface=useSelector((state:any)=>state.AuthStore??"")
  const dispatch=useDispatch();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    dispatch(getAuthData(initialState));
  }


return (
<div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink id="JumpToTop" className="navbar-brand" to="/">Home</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100">
          <li className="nav-item">
          <NavLink className="nav-link" to="/BookConsultation"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Book Consultation</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">About</span></NavLink> 
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Services"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Services</span></NavLink> 
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Testimonials
            </a> 
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/Testimonials/DoctorsTestimonials"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Doctors Testimonials</span></NavLink></li>
              <li><NavLink className="dropdown-item" to="/Testimonials/PatientsTestimonials"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Patients Testimonials</span></NavLink></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/MyCases"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">My Cases</span></NavLink> 
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Contact</span></NavLink> 
          </li>
          {AuthData.role===Role_Admin && (
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin Panel
            </a> 
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/Admin/MyCasesAdmin/MyCasesAdminList"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">My Cases (Admin)</span></NavLink></li>
              <li><NavLink className="dropdown-item" to="/Admin/DoctorsTestimonialAdmin/DoctorsTestimonialAdminList"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Doctors Testimonials (Admin)</span></NavLink></li>
              <li><NavLink className="dropdown-item" to="/Admin/PatientsTestimonialAdmin/PatientsTestimonialAdminList"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Patients Testimonials (Admin)</span></NavLink></li>
            </ul>
          </li>
          )}
          <div className="d-flex" style={{marginLeft:"auto"}}>
            {AuthData.role==Role_Admin && (<>
              <li className='nav-item'>
                <span className='nav-link'>Welcome {AuthData.fullname}</span>
              </li>
            <li className='nav-item'>
              <NavLink onClick={()=>handleLogout()} className="btn btn-success rounded-pill mx-2" aria-current="page" to="/">Logout</NavLink>
            </li>
            </>
            )}
          </div>
        </ul>
      </div>
    </div>
  </nav>
</div>
  )
}

export default Header