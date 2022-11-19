import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { AuthStateContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import app from '../utils/firebase';
import { useUserAuth } from '../context/Context';
const Register = () => {
  const navigate=useNavigate()
  let[email,setEmail]=useState('')
  let[password,setPassword]=useState('')
  const {signUp}=useUserAuth();
  const success = () => toast.success("User was registered successfully");
 // const failure=()=>toast("error")
//  const auth = getAuth(app);
  const submit=(e)=>{
    e.preventDefault()
if(email.length>0 && password.length>0){
  signUp(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    success()
    console.log(user)
    setEmail(' ')
    setPassword(' ')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const failure=()=>toast.error(errorMessage)
    failure()
     
    console.log(errorMessage)
    
    // ..
  //  failure()
  });
}else{
  const failure=()=>toast.error("Please add all the information needed")
  failure()
}

 

  
  }
  return (
    <div className="register">
      <div className='register-container'>

        <h1>Register</h1> 
       <form className='form-register'>

        <div className='form-el'>
            <p>Email</p>
            <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className='form-el'>
            <p>Password</p>
            <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>

       </form>
       <button onClick={submit} className='register-btn'>Submit</button>
       <div className='register-msg'>Do you have an account ?<p onClick={()=>{navigate('/login')}}>Go to Login Page</p></div>
       <ToastContainer/>
      </div>
     
    </div>
  )
}

export default Register