import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { Route,RouterProvider, createRoutesFromElements } from 'react-router'
import { FirebaseProvider } from './Firebase/firebase'

import { Store } from './app/Store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<App/>}>
    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <Provider store={Store}>
       <FirebaseProvider>
          <RouterProvider router={router}/>
       </FirebaseProvider>
    </Provider>
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
