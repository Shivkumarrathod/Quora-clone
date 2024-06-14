import { useEffect, useState } from "react"
import { BiUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { useFirebase } from "../../Firebase/firebase"
import {FaUser} from 'react-icons/fa'
import moment from "moment"

const Post =({post}) => {
  const firebase = useFirebase()
  const [user,setUser] = useState('')
  const [imageUrl,setImageUrl] = useState('')

  const getDoc =async()=>{
    const user=await firebase.GetUserById(post.uid)
    setUser(user.data())
    const imgurl = await firebase.getImage(post.imgUrl)
    setImageUrl(imgurl)
  }
  getDoc()
  
  return (
    <div className='w-full  bg-[#262626] mb-2 rounded-sm border border-gray-700 shaddow '>
      <div className="flex">
        <div className="mt-4 ml-4">
          {user.photoURL?(
            <img src={user.photoURL} alt={user.displayName} className='w-9 h-9 rounded-full'/>
          ):(
            <FaUser size={30}  />
          )}  
        </div>
        <div className="mt-4 ml-2">
          <h2 className='text-sm font-bold'>{user.displayName+" "}<span className="text-blue-500 text-sm">Follow</span></h2>
          <p className="-mt-1 text-sm">.{moment(post.createAt).fromNow()}</p>
        </div>
      </div>
      <h1 className="ml-4 mt-2 ">{(post.something).substring(0,200)}</h1>
      <div className="shaddow mt-1">
        <img src={imageUrl} alt={post._id} />
      </div>
      <div className="flex p-1 w-full mt-1 ">
         <div className="flex w-[11rem] bg-[#161616] ml-4 p-1 rounded-full">
            <div className="flex w-[77%] ml-2 font-bold text-sm">
              <BiUpvote size={20} className="mt-0.5 text-blue-500"/><span className="ml-1 ">{'Upvote'+" :"+post.like}</span>
            </div>
            <div className="border-l ">
              <BiSolidDownvote size={20} className="ml-1"/>
            </div>
         </div>
         <div className="mt-1 ml-4">
            <BiMessageRounded size={20}/>
         </div>
      </div>
    </div>
  )
}

export default Post
