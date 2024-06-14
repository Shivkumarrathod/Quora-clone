import React, { useRef, useState } from 'react'
import { useFirebase } from '../Firebase/firebase'
import { IoMdImages } from "react-icons/io";
import { useCreateQuetionMutation } from '../app/services/quetion';
import { useCreatePostMutation } from '../app/services/post';

const AddQuetion = () => {
  
  const firebase = useFirebase()
  const {uid} = firebase.user
  
  const [addQuetion,setaddQuetion]=useState(false)
  const [question,setQuestion]= useState('')
  const [addQuetions,setAddQuetion]= useState(true)
  const [showCreatePost,setShowCreatePost]=useState(false)

  const [postImage,setPostImage] = useState('')
  const [something,setSomething] = useState('')
  const fileInputRef = useRef(null)

  const [createQuetion]=useCreateQuetionMutation()
  const [createPost] = useCreatePostMutation()


  const handleAddQuetion =async()=>{
    try {
      const res=await createQuetion({uid,question})
       console.log(res);
       setQuestion('')
       setaddQuetion(!addQuetion)
    } catch (error) {
      console.log(error.message);
      setQuestion('')
    }
  }
  const handlePostSomething=async()=>{
    try {
      const imgUrl =await firebase.uploadingImagePost(uid,postImage)
      const result= await createPost({uid,something,imgUrl})
      setPostImage('')
      setSomething('')
      setaddQuetion(!addQuetion)
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleImageIcon=()=>{
    fileInputRef.current.click()
  }
  return (
    <div>
      <button className="bg-red-600 w-[8rem] p-1 rounded-full hover:bg-red-800"
               onClick={()=>setaddQuetion(!addQuetion)}
        >Add quetion</button>

      {addQuetion&&(
          <div className=' h-[100vh] absolute z-50'>
             <div className='w-[45rem] h-[23rem] -ml-[45rem]  mt-10 rounded-md bg-[#161616] text-white '> 
              <div className='flex justify-center items-center w-full mt-[2rem] h-[3rem] '>
                <div onClick={()=>{setAddQuetion(true) ,setShowCreatePost(false)}} className={`font-bold  w-[50%] text-center cursor-pointer mt-4 ${addQuetions?" border-b-4 border-b border-red-600":"border-b border-gray-500 "} hover:bg-[#262626] p-1`}>Add Quetion</div>
                <div onClick={()=>{setAddQuetion(false) ,setShowCreatePost(true)}} className={`font-bold  w-[50%] text-center cursor-pointer mt-4 ${showCreatePost?" border-b-4 border-b border-red-600":"border-b border-gray-500"} hover:bg-[#262626] p-1`}>Create Post</div>
              </div>

                {addQuetions&&(<>
                    <div className='mt-[5rem] ml-5 w-[40rem] border-b hover:border-blue-600'>
                        <input type="text" className='border-none text-white w-full p-2 h-2rem] bg-[#161616] focus:outline-none ' 
                        value={question}
                        onChange={e=>setQuestion(e.target.value)}
                        placeholder='Start your quetion with "What","How","why",etc.' />
                    </div>
                    <div className='w-full border-t mt-[9rem] p-3 flex '>
                        <div className='w-[83%]'></div>
                        <button className='mr-5' onClick={()=>setaddQuetion(!addQuetion)}>cancel</button>
                        <button className='w-[7rem] bg-blue-600 rounded-lg p-1'
                        onClick={handleAddQuetion}
                        >Add Quetion</button>
                    </div>
                </>
                )}

              {showCreatePost&&(
                <>
                 <div className="flex flex-col ">
                        <div className="flex-1 mt-[1rem] ml-5 w-[97%] ">
                            {postImage&&(
                              <img src={URL.createObjectURL(postImage)} alt={postImage.name} className='w-[10rem]' />
                            )}
                            <textarea
                            type="text"
                            className="border-none text-white w-full p-2 h-[8rem] bg-[#161616] focus:outline-none scrollbar-none "
                            value={something}
                            onChange={(e) => setSomething(e.target.value)}
                            placeholder="Say Something..."
                            ></textarea>
                        </div>
                        <div className=" border-t p-2 pr-4 flex items-center absolite w-[45rem] top-[25rem] fixed ">
                            <div className="w-[80%] cursor-pointer" onClick={handleImageIcon} >
                               <input type="file" 
                                onChange={(e)=>setPostImage(e.target.files[0])} 
                                ref={fileInputRef}
                                style={{display:'none'}}
                               /> 
                               <IoMdImages size={20} className='ml-5 cursor-pointer'/>
                            </div>
                            <button className="mr-5" onClick={() => setaddQuetion(!addQuetion)}>Cancel</button>
                            <button className="w-[7rem] bg-blue-600 rounded-lg p-1" onClick={handlePostSomething}>Add Question</button>
                        </div>
                    </div>
                </>
              )}

             </div>
          </div>
        )}
    </div>
  )
}

export default AddQuetion
