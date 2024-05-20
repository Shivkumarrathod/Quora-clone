import { Link } from "react-router-dom"
import Login from "./Pages/Login"
import Navigation from "./Components/Navigation"
import { useEffect, useState } from "react"
import Mypage from "./Pages/Mypage"
import { Outlet } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { Navigate } from "react-router-dom"

function App() {
  const [user,setUser] =useState(false)
 
  return (
    <>
    <ToastContainer/>
     {user ? (<Navigation/>):<Navigate to='/login'/>}
      <main className="py-3">
      <Outlet/>
     </main>
    </>
  )
}

export default App
