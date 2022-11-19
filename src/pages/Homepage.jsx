import React from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../components/Header'
import { useUserAuth } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth ,updatePassword,updateProfile } from "firebase/auth";
import {Link} from "react-router-dom"
import { storage } from '../utils/firebase';
import {v4} from 'uuid'
import AddProduct from '../components/AddProduct';

const Homepage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  //console.log(user.photoURL)
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
    <div className='home'>

  <Header/>
  <AddProduct/>
      
    </div>
  )
}

export default Homepage