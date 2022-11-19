import React from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../components/Header'
import { useUserAuth } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
  const {login,userInfo,logout}=useUserAuth();
  const success = () => toast.success("User was logged out");
  const navigate=useNavigate()
  const submit=(e)=>{
    e.preventDefault()
     success()
    logout()
    navigate('')
  }
  return (
    <div>

      <Header/>
      {userInfo.email}
      <button onClick={submit}>Logout</button>
      
    </div>
  )
}

export default Homepage