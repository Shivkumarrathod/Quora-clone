import React from 'react'
import { useFirebase } from '../../Firebase/firebase'


const Home = ({userBar}) => {
  const firebase = useFirebase()

  const handleUserLogOut = ()=>{
    firebase.signOut()
  }
  return (
    <>
      <div className="bg-black text-white flex justify-center gap-5 ml-[3rem] mt-2">
        <div className='leftBar w-[153px] h-[600px] bg-[#262626]'>
        
        </div>
        <div className="middleBar w-[540px] h-[1200px] bg-[#262626]">

        </div>
        <div className='w-[400px] h-[1000px] '>
        {userBar && (<>
            <div className='  w-[240px] h-[600px] bg-pink-700 '>
              <button className='' onClick={handleUserLogOut}>Log out</button>
            </div>
        </>
        )}
        </div>
        </div>

       

    </>
    

  )
}

export default Home
