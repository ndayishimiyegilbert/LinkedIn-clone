import React from 'react'
import {FaFolder,FaBookmark} from 'react-icons/fa'
import "../App.css"

function Right() {
  return (
    <div className="ml-[13%] ">
        <div className="h-[340px] w-[210px] bg-[#87cfeb50] mt-6 rounded-[10px]  ">
  <div className="h-[280px] w-[210px] bg-white relative top-[60px] rounded-br-md rounded-bl-md   ">
  <div className=" h-[68px] w-[68px] p-1 rounded-full relative -top-7 left-14 bg-[whitesmoke] border-1 ">
   <img src="/back.jpg" className="h-[62px] w-[62px] object-cover rounded-full  " />
   <p className="mt-4 font-semibold">  N.gilbert</p>
  </div>
  <div className="  mt-8 ">

  <div  className=" parts  border-y-[1px] pt-2 ">
       <p className=" text-[13px] ml-4  opacity-90 ">Connections </p>
       <p className=" text-[13px] ml-4 font-semibold mb-4   ">Grow your network</p>
   </div>
   <div className=" parts  border-y-[1px] pt-2 ">
       <p className=" text-[13px] ml-4 opacity-90  ">Access exclusive tools & insights</p>
       
       <FaFolder className=" text-[13px] ml-4 mt-2  text-yellow-500"/>
       <span className="text-[13px] font-semibold ml-2 relative left-6 -top-5 " > Try premium for free</span>
   </div>
   <div className=" parts border-y-[1px] pt-2 pl-4" >

       <FaBookmark className=" text-[13px] text-gray-600 "/>
       <p className="text-[14px] relative left-6 -top-5 " >My Items  </p>
   </div>
  </div>
   <div>

   </div>
  </div>
        </div>
        {/* __________down_____ */}
        <div className="h-[150px] w-[210px] rounded-[10px] bg-white mt-2  text-[13px] pt-1 sticky top-16 ">
            <p className="font-semibold  text-blue-500 mt-3 pl-3" >Group</p>
            <p className="font-semibold  text-blue-500 mt-3 pl-3" >Events</p>
            <p className="font-semibold  text-blue-500 mt-3 pl-3" >Followed Hashtags</p>
            <p className=" text-[14px] font-semibold opacity-70 pl-6 h-10 w-[210px]  text-center pt-2 border-t-2 mt-2 ">Discover More</p>

        </div>
    </div>
  )
}

export default Right