import React from 'react'
import { Navigate } from 'react-router-dom';

import { useUserAuth } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth ,updatePassword,updateProfile } from "firebase/auth";
import {Link} from "react-router-dom"

const Header = () => {
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
    <div className='header'>

        
       
    <div>
       <p>Go to Dashboard</p>
       <Link to='/dashboard'>Dashboard</Link>
       </div> 
      <div>
        {userInfo.displayName? <p>{userInfo.displayName}</p>:(<></>)}
        {userInfo.photoURL ? <img  className='header-img' src={user.photoURL}/> :<></>}
        
      </div>
      <button onClick={submit}>Logout</button>
    </div>
  )
}

export default Header