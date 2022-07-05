import React from 'react'
import {FaLinkedin,FaSearch,FaHome,FaUserFriends,FaBriefcase,FaRegCommentDots,FaBell,FaCaretDown,FaTh} from "react-icons/fa"
function Header() {
  return (
      <div className=" border-[1px] flex bg-white cursor-pointer sticky top-0 z-10 " >
          <div className="flex  border-[1px] h-[60px] w-[75%] ">

      <div className="flex lg:ml-[17%]  ml-4">
          <div className=' flex'>
          <FaLinkedin className=' text-[40px] text-[#0808c4e1]   mt-2 '/>
          <div className='h-8 w-8 bg-[#8bc4db20] mt-3 ml-4  '>
          <FaSearch className='  text-[14px] mt-2 ml-3 opacity-60 '/>
          </div>
          <input type="text" placeholder="Search"  className=" h-8 mt-3 bg-[#8bc4db17]   border-1 "/>

          </div>
      </div>
<div  className="flex ml-[14%] mt-2   ">

          <div className="border-b-2 w-16 border-black ">
        <img src="/home.png" className=' h-[23px] w-[23px] object-cover ml-4 '/>
          <p className='text-[12px] ml-4 '>Home</p>

          </div>
          <div className=" ml-[35px] opacity-70 ">
          <FaUserFriends className=' text-[23px] ml-5 '/>
          <p className='text-[12px] '>My network</p>
          </div>
          <div className=" ml-[35px] opacity-70 ">
          <FaBriefcase className=' text-[22px]  '/>
          <p className='text-[12px] '>Jobs</p>
          </div>
          <div className=" ml-[35px] opacity-70 ">
          <img src="/message.png"  className=' h-[24px] w-[24px]  object-cover ml-5 '/>
          <p className='text-[12px] '>Messaging</p>
          </div>
          <div className=" ml-[35px] opacity-50 ">
          <FaBell className=' text-[22px] ml-5 '/>
          <p className='text-[12px] '>Notifications</p>
          </div>
          <div className=" ml-[35px] ">
          <img src='/back.jpg ' className='h-[23px] rounded-full w-[23px] object-cover '/>
          <p  className='text-[12px] opacity-70   '>Me</p>
          <FaCaretDown className="relative -top-[19px] left-4 text-[18px]  " />

          </div>

          
        </div>
          </div>
          {/* _________right_____ */}
          <div className="ml-4 ">
          <FaTh className=" text-[20px] mt-3 " />
          <p className=" text-[13px] -ml-2 " >work </p>
          <FaCaretDown className="relative text-[19px] ml-[20px] -mt-[19px] " />

          </div>
          </div>
  )
}

export default Header