import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from "./pages/Login"
import Register from './pages/Register'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Homepage from './pages/Homepage'
function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
