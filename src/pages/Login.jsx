import React,{useContext, useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/Context';
//import { AuthStateContext } from '../context/Context';
const Login = () => {
 // const state=useContext(AuthStateContext)
  // const{userEmail,user,setUser,setUserEmail}=useContext(AuthStateContext)
   //console.log(user)
  //console.log(state)

  const navigate=useNavigate();
  const {login,userInfo}=useUserAuth();

  let[email,setEmail]=useState('')
  let[password,setPassword]=useState('')

  const success = () => toast.success("User is logged in");

  //const auth = getAuth(app);
  const submit=(e)=>{
    e.preventDefault()
    if(email.length> 0 && password.length> 0){
   
      login(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        success()
        console.log(user)
        console.log(userInfo.email)
      //  state.email=email;
      //  state.status=true;
    //  setUser(true)
   //   setUserEmail(email)
      //  console.log(state)
        navigate('/home')
    

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
     
        console.log(errorMessage)
        // ..
        const failure=()=>toast.error(errorMessage)
        failure()
      });
    
    }else{
      const failure=()=>toast.error("Please add all the information needed")
      failure()
    }



    /*console.log(password)
    console.log(email)

    alert('User is connected to database')
    setEmail('')
    setPassword('')
    email='';password='';
    */
  }
  return (
    <div className="login">
      
       <div className='login-container'>
       <h1>Login</h1> 

       <form className='login-form'>

       <div className='form-el'>
    <p>Email</p>
    <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div className='form-el'>
    <p>Password</p>
    <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
</div>

</form>
<button onClick={submit} className='login-btn'>Submit</button>
 <div className='login-msg'>Don't you have an account? <p onClick={()=>{navigate('/register')}}>Go to register page</p></div>
       </div>
  
       <ToastContainer/>
    </div>
  )
}

export default Login