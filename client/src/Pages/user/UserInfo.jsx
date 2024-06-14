import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { useFirebase } from '../../Firebase/firebase';
import { Link } from 'react-router-dom';
import { AiFillMessage } from "react-icons/ai";
import { BiDollar, BiTrendingUp } from "react-icons/bi";
import { PiBookmarksSimpleFill } from "react-icons/pi";
import { MdOutlineDrafts } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";

const UserInfo = () => {
  const firebase = useFirebase();
  const { photoURL, displayName } = firebase.user;

  const [userBar, setUserBar] = useState(false);

  const handleUserLogOut = () => {
    firebase.signOut();
  };

  return (
    <>
      <div className='hover:text-red-500 hover:bg-[#333333] p-2'>
        {photoURL ? (
          <img
            src={photoURL}
            alt={displayName}
            onClick={() => setUserBar(!userBar)}
            className='w-[1.7rem] rounded-full'
          />
        ) : (
          <FaUser size={25} onClick={() => setUserBar(!userBar)} />
        )}
      </div>
      {userBar && (
        <div className='w-[255px] h-[600px] absolute bg-[#232323] mt-4 -ml-[7rem] rounded-sm border border-gray-600'>
          <div className='p-2 border-b border-gray-500'>
            {photoURL ? (
              <img
                src={photoURL}
                alt={displayName}
                className='w-[2.5rem] rounded-full mb-2 ml-2 mt-3'
              />
            ) : (
              <FaUser size={25} />
            )}
            <div className='flex justify-between hover:bg-[#262626] p-2'>
              <h1 className='font-bold'>{displayName}</h1> {">"}
            </div>
          </div>
          <div className='p-2 pb-3 border-b border-gray-500 text-sm'>
            <div to='/' className='flex gap-2 hover:bg-[#262626] p-1.5'>
              <AiFillMessage size={20} />{"Messages"}
            </div>
            <div to='/create-ad' className='flex gap-2 hover:bg-[#262626] p-1.5'>
              <FcAdvertising size={20} />{"Create Ad"}
            </div>
            <div to='/monetization' className='flex gap-2 hover:bg-[#262626] p-1.5'>
              <BiDollar size={20} />{"Monetization"}
            </div>
            <div to='/content-stats' className='flex gap-2 hover:bg-[#262626] p-1.5'>
              <BiTrendingUp size={20} />{"Your Content & stats"}
            </div>
            <div to='/bookmarks' className='flex gap-2 hover:bg-[#262626] p-1.5'>
              <PiBookmarksSimpleFill size={20} />{"Bookmarks"}
            </div>
            <div to='/drafts' className='flex gap-2 hover:bg-[#262626] p-1.5'>
              <MdOutlineDrafts size={20} />{"Drafts"}
            </div>
            <div to='/quora-plus' className='flex gap-2 hover:bg-[#262626] p-1.5'>
              <BsStars size={20} />{"Try Quora+"}
            </div>
          </div>
          <div className='p-4 text-sm border-b border-gray-600'>
            <div  className='flex gap-2 hover:bg-[#262626] p-2'>
              <p>Dark mode</p>
            </div>
            <div  className='flex gap-2 hover:bg-[#262626] p-2'>
              <p>Settings</p>
            </div>
            <div  className='flex gap-2 hover:bg-[#262626] p-2'>
              <p>Languages</p>
            </div>
            <div  className='flex gap-2 hover:bg-[#262626] p-2'>
              <p>Help</p>
            </div>
            <div className='flex gap-2 hover:bg-[#262626] p-2'>
              <button className='cursor-pointer' onClick={handleUserLogOut}>Logout</button>
            </div>
          </div>

          <div className='bg-[#161616] absolute h-[5.2rem] w-full text-sm flex flex-wrap gap-1 p-1'>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>About.</p>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>Careers.</p>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>Privacy.</p>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>Terms.</p>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>Contact.</p>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>Languages.</p>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>Your Ad Choice.</p>
            <p className='hover:underline hover:text-blue-600 cursor-pointer'>Press.</p>
            <p>@ Quors, Inc. 2024</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
