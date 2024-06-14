import { Link } from "react-router-dom"
import { useEffect ,useState } from "react"
import { IoMdHome,IoIosSearch } from "react-icons/io";
import { RiUserFollowLine } from "react-icons/ri";
import { MdOutlineEditNote,MdPeopleAlt,MdNotificationsNone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Home from "../Pages/Home/Home";
import AddQuetion from "./AddQuetion";
import UserInfo from "../Pages/user/UserInfo";

const Navigation = () => {
  

  return (<>
      <div className="bg-black">
      <div className='bg-[#262626]  h-[55px] flex justify-center items-center  text-white border-b border-gray-500 fixed -mt-[0.0rem] w-full'>
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
              <input type="text" placeholder="Serch Quora" className="w-[300px] h-[28px] bg-black text-white pl-1 focus:outline-none" />
            </div>
            <div className="ml-2 px-2 border rounded-full bg-black hover:bg-[#262626] ">
              <button>Try Quora+</button>
            </div>

            <div className={`p-2 ml-2`}> 
              <Link to='/'>
                <UserInfo/>
              </Link>
            </div>

            <div className={`p-2 ml-1 hover:text-red-500 hover:bg-[#333333]`}> 
              <Link to='/'>
                <TbWorld size={25} />
              </Link>
            </div>

            <div className="ml-2 ">
              <AddQuetion/>
            </div>
          </div>
        <div>
           <Home/>
        </div>
       
      </div>
      
  </>
    
  )
}

export default Navigation
