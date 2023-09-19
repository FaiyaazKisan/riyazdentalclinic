import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Header from './Layout/Header'
import MyCases from './MyCases'
import Services from './Services'
import DoctorsTestimonials from './Testimonials/DoctorsTestimonials'
import PatientsTestimonials from './Testimonials/PatientsTestimonials'
import AddNewCase from './Admin/MyCasesAdmin/AddNewCase'
import Login from './Login'
import jwtDecode from 'jwt-decode'
import AuthInterface from './Interface/AuthInterface'
import { useDispatch } from 'react-redux'
import {getAuthData} from './Redux/AuthSlice'
import EditCase from './Admin/MyCasesAdmin/EditCase'
import MyCasesAdminList from './Admin/MyCasesAdmin/MyCasesAdminList'
import PageNotFound from './PageNotFound'
import DTAdminList from './Admin/DoctorsTestimonialAdmin/DTAdminList'
import AddNewDT from './Admin/DoctorsTestimonialAdmin/AddNewDT'
import EditDT from './Admin/DoctorsTestimonialAdmin/EditDT'
import PTAdminList from './Admin/PatientsTestimonialAdmin/PTAdminList'
import AddNewPT from './Admin/PatientsTestimonialAdmin/AddNewPT'
import EditPT from './Admin/PatientsTestimonialAdmin/EditPT'
import Footer from './Layout/Footer'
import BookConsultation from './BookConsultation'
const WhatsAppLogo=require('../src/Images/WhatsappLogo.png')

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
   const token = localStorage.getItem("token");
   if(token) {
    const{id, fullname, email, role}:AuthInterface=jwtDecode(token);
    dispatch(getAuthData({id, fullname, email, role}));
  }
  })
  return (
    <div style={{position:"relative", minHeight:"100vh"}}>
      <div className='d-none d-sm-block' style={{paddingBottom:"180px"}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/BookConsultation' element={<BookConsultation/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Testimonials/DoctorsTestimonials' element={<DoctorsTestimonials/>}></Route>
          <Route path='/Testimonials/PatientsTestimonials' element={<PatientsTestimonials/>}></Route>
          <Route path='/MyCases' element={<MyCases/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Admin/MyCasesAdmin/MyCasesAdminList' element={<MyCasesAdminList/>}></Route>
          <Route path='/Admin/MyCasesAdmin/AddNewCase' element={<AddNewCase/>}></Route>
          <Route path='/Admin/MyCasesAdmin/EditCase/:id' element={<EditCase/>}></Route>
          <Route path='/Admin/DoctorsTestimonialAdmin/DoctorsTestimonialAdminList' element={<DTAdminList/>}></Route>
          <Route path='/Admin/DoctorsTestimonialAdmin/AddNewDoctorsTestimonial' element={<AddNewDT/>}></Route>
          <Route path='/Admin/DoctorsTestimonialAdmin/EditDoctorsTestimonial/:id' element={<EditDT/>}></Route>
          <Route path='/Admin/PatientsTestimonialAdmin/PatientsTestimonialAdminList' element={<PTAdminList/>}></Route>
          <Route path='/Admin/PatientsTestimonialAdmin/AddNewPatientsTestimonial' element={<AddNewPT/>}></Route>
          <Route path='/Admin/PatientsTestimonialAdmin/EditPatientsTestimonial/:id' element={<EditPT/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
          <Route path='/z' element={<Login/>}/>
        </Routes>
        </div>
        <div className='d-block d-sm-none' style={{paddingBottom:"460px"}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/BookConsultation' element={<BookConsultation/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Testimonials/DoctorsTestimonials' element={<DoctorsTestimonials/>}></Route>
          <Route path='/Testimonials/PatientsTestimonials' element={<PatientsTestimonials/>}></Route>
          <Route path='/MyCases' element={<MyCases/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Admin/MyCasesAdmin/MyCasesAdminList' element={<MyCasesAdminList/>}></Route>
          <Route path='/Admin/MyCasesAdmin/AddNewCase' element={<AddNewCase/>}></Route>
          <Route path='/Admin/MyCasesAdmin/EditCase/:id' element={<EditCase/>}></Route>
          <Route path='/Admin/DoctorsTestimonialAdmin/DoctorsTestimonialAdminList' element={<DTAdminList/>}></Route>
          <Route path='/Admin/DoctorsTestimonialAdmin/AddNewDoctorsTestimonial' element={<AddNewDT/>}></Route>
          <Route path='/Admin/DoctorsTestimonialAdmin/EditDoctorsTestimonial/:id' element={<EditDT/>}></Route>
          <Route path='/Admin/PatientsTestimonialAdmin/PatientsTestimonialAdminList' element={<PTAdminList/>}></Route>
          <Route path='/Admin/PatientsTestimonialAdmin/AddNewPatientsTestimonial' element={<AddNewPT/>}></Route>
          <Route path='/Admin/PatientsTestimonialAdmin/EditPatientsTestimonial/:id' element={<EditPT/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
          <Route path='/z' element={<Login/>}/>
        </Routes>
        </div>
        <Footer/>
        <a href='https://wa.me/919969926811' target="_blank"><img src={WhatsAppLogo} style={{width:"100%", maxWidth:"50px", position:"fixed", bottom:"10px", right:"10px"}}/></a>
    </div>
  )
}

export default App