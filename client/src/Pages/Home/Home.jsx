import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../Firebase/firebase'
import {useNavigate} from 'react-router-dom'
import { useGetAllPostsQuery } from '../../app/services/post'
import Post from './Post'

const Home = () => {
  const firebase = useFirebase()
  const {data:post,isLoading} = useGetAllPostsQuery()
  
  return (
    <>
      {isLoading?(
        <h1>Loading...</h1>
       ):(
        <div className="bg-black text-white flex justify-center gap-5 ml-[3rem] ">
        <div className='leftBar w-[153px] h-[600px] bg-[#262626] mt-[4rem]'>
        </div>
        <div className="middleBar w-[570px] mt-[4rem]">
          <div></div>
          {post?.map((post)=>(
            <div key={post._id} >
              <Post post={post} />
           </div>
          ))}
        </div>
        <div className='w-[400px] h-[1000px] '>
        </div>
        </div>
       )}
    </>
    

  )
}

export default Home
