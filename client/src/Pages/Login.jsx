import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const loginHandler =()=>{
    alert(email+password)
  }
  return (
    <div className='h-[100vh] -mt-5 bg-black flex justify-center items-center'>
      <div className='bg-[#161616] w-[680px] h-[523px] text-white'>
      <div className='mt-4' >
        <h1 className='text-center text-red-700 font-bold text-[3.5rem]'>Quora</h1>
        <p className='mt-1 text-center font-bold'>A place to share knowledge and better understand the world</p>
      </div>
      <div className='flex mt-8'>
        <div className='w-[350px] h-[255px] border-r ml-2 mt-4'>
          <p className='text-sm ml-2 text-[#fff]'>By continuing you indicate that you agree to Quora’s  <span className='text-blue-600' >Terms of Service</span > and <span className='text-blue-600'>Privacy Policy</span>.</p>
          <div className='ml-2 mt-5'>
            <button className='bg-black w-[255px] h-[40px] rounded'>Continue with Google</button>
          </div>
        </div>

        <div className='w-[350px] h-[255px] ml-2'>
           <h1 className=' border-b font-bold p-2'>login</h1>
           <div className='ml-2 mt-2 '>
            <label htmlFor="Email" className='font-bold'>Email</label>
            <br />
            <input type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            className='w-[300px] h-[40px] bg-black pl-2 mt-2 rounded' 
            placeholder='You Email'/>
           </div>
           <div className='ml-2 mt-2 '>
            <label htmlFor="password" className='font-bold'>Password</label>
            <br />
            <input type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            className='w-[300px] h-[40px] bg-black pl-2 mt-2 rounded' 
            placeholder='You Password'/>

            <div className='flex justify-between ml-2 w-[290px] mt-4'>
              <p className='hover:underline hover:text-blue-600'>Forgot password?</p>
              <button className='bg-blue-700 p-1 w-[80px] rounded-full'
              onClick={loginHandler}>Login</button>
            </div>
           </div>

        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Login
