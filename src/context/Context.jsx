import React,{createContext,useState,useEffect, useContext} from "react"
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import app from '../utils/firebase';
 const UserAuthContext=createContext()
const UserContextProvider=({children})=>{
  const[userInfo,setUser]=useState({})
  const[userEmail,setUserEmail]=useState('')
  const auth=getAuth(app)
  const signUp=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logout=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  return()=>{
    unsubscribe()
  }
  },[])
    return(
        <UserAuthContext.Provider value={{ userInfo,userEmail,setUser,setUserEmail,signUp,login,logout}}> 
          {children}
        </UserAuthContext.Provider>
    )
}

export default UserContextProvider;
export function useUserAuth(){
  return useContext(UserAuthContext)
}