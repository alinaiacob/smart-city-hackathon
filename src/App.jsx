import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from "./pages/Login"
import Register from './pages/Register'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Homepage from './pages/Homepage'
//import {AuthStateContext} from "./context/Context";
import HomepageLogged from './pages/HomepageLogged'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard'
function App() {
//const state=useContext(AuthStateContext)
//console.log(state)

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Login/>}/>
          <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Homepage />
                  </ProtectedRoute>
                }
              />
                 <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
