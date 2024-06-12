import React, { useState } from 'react'
import { useFirebase } from '../Firebase/firebase'
import { useCreateQuetionMutation } from '../app/services/allApi'
import { useNavigate } from 'react-router'
import { IoMdImages } from "react-icons/io";

const AddQuetion = () => {
  
  const firebase = useFirebase()
  const {uid} = firebase.user
  
  const [addQuetion,setaddQuetion]=useState(false)
  const [question,setQuestion]= useState('')
  const [addQuetions,setAddQuetion]= useState(true)
  const [createPost,setcreatePost]=useState(false)
  
  const [createQuetion]=useCreateQuetionMutation()
  
  const navigate = useNavigate()

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

  return (
    <div>
      <button className="bg-red-600 w-[8rem] p-1 rounded-full hover:bg-red-800"
               onClick={()=>setaddQuetion(!addQuetion)}
        >Add quetion</button>

      {addQuetion&&(
          <div className=' h-[100vh] absolute  z-50'>
             <div className='w-[45rem] h-[23rem] -ml-[45rem]  mt-10 rounded-md bg-[#161616] text-white '> 
              <div className='flex justify-center items-center w-full mt-[2rem] h-[3rem] '>
                <div onClick={()=>{setAddQuetion(true) ,setcreatePost(false)}} className={`font-bold  w-[50%] text-center cursor-pointer mt-4 ${addQuetions?" border-b-4 border-b border-red-600":"border-b border-gray-500 "} hover:bg-[#262626] p-1`}>Add Quetion</div>
                <div onClick={()=>{setAddQuetion(false) ,setcreatePost(true)}} className={`font-bold  w-[50%] text-center cursor-pointer mt-4 ${createPost?" border-b-4 border-b border-red-600":"border-b border-gray-500"} hover:bg-[#262626] p-1`}>Create Post</div>
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

              {createPost&&(
                <>
                 <div className=" flex flex-col">
                        <div className="flex-1  mt-[5rem] ml-5 w-[97%] ">
                            <textarea
                            type="text"
                            className="border-none text-white w-full p-2 h-[10rem] bg-[#161616] focus:outline-none scrollbar-none "
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Say Something..."
                            ></textarea>
                        </div>
                        <div className="w-full border-t p-3  mt-4 flex items-center">
                            <div className="w-[80%]">
                                <IoMdImages size={20} className='ml-5'/>
                            </div>
                            <button className="mr-5" onClick={() => setaddQuetion(!addQuetion)}>Cancel</button>
                            <button className="w-[7rem] bg-blue-600 rounded-lg p-1" onClick={handleAddQuetion}>Add Question</button>
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
