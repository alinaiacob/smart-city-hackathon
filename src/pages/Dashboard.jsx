import React ,{useState}from 'react'
import { useUserAuth } from '../context/Context';
import { getAuth ,updatePassword,updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
    const error=()=>toast.error('Please add all the necessarry information');
    const success=()=>toast.success("User was updated successfully" )
    const {login,userInfo,logout}=useUserAuth();
    const[name,setName]=useState('')
    const[photoUrl,setPhotoUrl]=useState('')
    const[password,setPassword]=useState('')
    const auth = getAuth();
const user = auth.currentUser;

const submit=(e)=>{
    e.preventDefault();
    if(name.length>0 && password.length && photoUrl.length>0){
        updateProfile(user,{
            displayName:name,
            photoURL:photoUrl
        })
        success()
    }else{
      error()
    }
}
const changePassword=(e)=>{
    e.preventDefault();
   // const newPassword = getASecureRandomPassword();
    if(password.length>0){
        updatePassword(user,password)
       
        .then(()=>{
            toast.success("Password was updated successfully" )
            console.log(password)
        }).catch(()=>{
            toast.error("Can' change password")
        })
    }
}
  return (
 
    <div>
        {userInfo.email}
        <h1>Update your profile</h1>
        <form>
           

            <div className='form-el'>
                <p>Add/Update your name</p>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className='form-el'>
                <p>Add/Update your profile photo</p>
                <input type="text" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}/>
            </div>
         
            <div className='form-el'>
                <p>Change your password</p>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={changePassword}>Change Password</button>
            </div>
      
        </form>
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Dashboard