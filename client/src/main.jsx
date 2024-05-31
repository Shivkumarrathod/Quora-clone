import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { Route,RouterProvider, createRoutesFromElements } from 'react-router'
import Login from './Pages/Login.jsx'
import { FirebaseProvider } from './Firebase/firebase'
import { useFirebase } from './Firebase/firebase'
import Navigation from './Components/Navigation.jsx'


const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<App/>}>
    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}/>
    </FirebaseProvider>
  </React.StrictMode>
)


// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   <React.StrictMode>
//     <BrowserRouter>
//       <FirebaseProvider>
//         <App/>
//       </FirebaseProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// )
