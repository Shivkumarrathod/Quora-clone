import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Pages/Login"
import Navigation from "./Components/Navigation"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { Navigate } from "react-router-dom"
import { useFirebase } from "./Firebase/firebase"

function App() {
  const firebase = useFirebase()
  const navigate = useNavigate()
  const [user,setUser] = useState(false)

 useEffect(()=>{
  if (firebase.isLoggedIn) {
    setUser(firebase.isLoggedIn)
  }else{
    setUser(false)
  }
 })

  return <>
       <ToastContainer/>
       
       <main >
       {user?<Navigation/>:<Login/>}
      <Outlet/>
     </main>
  </>
}

export default App
