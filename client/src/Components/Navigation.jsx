import { Link } from "react-router-dom"
import { useEffect ,useState } from "react"
import { IoMdHome,IoIosSearch } from "react-icons/io";
import { RiUserFollowLine } from "react-icons/ri";
import { MdOutlineEditNote,MdPeopleAlt,MdNotificationsNone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import {  FaUser } from "react-icons/fa";
import Home from "../Pages/Home/Home";


const Navigation = () => {
  const [userBar,setUserBar] = useState(false)

  return (<>
      <div className="bg-black">
      <div className='bg-[#262626] rounded-sm h-[55px] flex justify-center items-center  text-white'>
            <div>
              <Link to='/'>
                <h1 className="text-4xl -mt-2 mr-4 font-bold text-red-600 hover:text-white">Quora</h1>
              </Link>
            </div>
            <div className={`p-2 ml-4 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/'>
                <IoMdHome size={32} />
              </Link>
            </div>
            <div className={`p-2 ml-4 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/following'>
                <RiUserFollowLine size={28} />
              </Link>
            </div>
            <div className={`p-2 ml-4 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/'>
                <MdOutlineEditNote size={35} />
              </Link>
            </div>
            <div className={`p-2 ml-4 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/'>
                <MdPeopleAlt size={32} />
              </Link>
            </div>
            <div className={`p-2 ml-4 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/'>
                <MdNotificationsNone size={32} />
              </Link>
            </div>
            <div className={`p-2 ml-4 bg-black w-[320px] h-[35px]  flex justify-around items-center `}> 
              <IoIosSearch size={20} className=""/>
              <input type="text" placeholder="Serch Quora" className="w-[300px] h-[28px] bg-black text-white pl-1 " />
            </div>
            <div className="ml-2 px-2 border rounded-full bg-black hover:bg-[#262626] ">
              <button>Try Quora+</button>
            </div>
            <div className={`p-2 ml-4 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/'>
                <FaUser size={25} onClick={()=>setUserBar(!userBar)} />
              </Link>
            </div>
            <div className={`p-2 ml-4 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/'>
                <TbWorld size={25} />
              </Link>
            </div>
            <div className="ml-2 ">
              <button className="bg-red-600 w-[8rem] p-1 rounded-full hover:bg-red-800">Add quetion</button>
            </div>
          </div>
        <div>
           <Home userBar={userBar}/>
        </div>
      </div>
      
  </>
    
  )
}

export default Navigation
