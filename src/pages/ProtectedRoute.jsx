import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/Context';
const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()
    const {userInfo}=useUserAuth();
    if (!userInfo) {
      navigate('/')
      }
  return children;
}

export default ProtectedRoute