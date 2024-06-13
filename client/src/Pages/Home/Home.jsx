import React, { useState } from 'react'
import { useFirebase } from '../../Firebase/firebase'
import {useCreateQuetionMutation} from '../../app/services/allApi'
import {useNavigate} from 'react-router-dom'

const Home = ({userBar}) => {
  const firebase = useFirebase()
  const {uid}= firebase.user

  return (
    <>
      <div className="bg-black text-white flex justify-center gap-5 ml-[3rem] mt-2">
        <div className='leftBar w-[153px] h-[600px] bg-[#262626]'>
        
        </div>
        <div className="middleBar w-[540px] h-[1200px] bg-[#262626]">
           <div>
              
           </div>
        </div>
        <div className='w-[400px] h-[1000px] '>
        </div>
        </div>
    </>
    

  )
}

export default Home
