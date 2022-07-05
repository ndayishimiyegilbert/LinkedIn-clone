import React from 'react'
import {FaPlus,FaLongArrowAltRight,FaThumbsUp,FaComment,FaShare,FaLocationArrow,FaImage,FaRegGrinAlt,FaHandHoldingHeart,FaLightbulb,FaHands} from 'react-icons/fa'

function Left() {
  
  return (
    <div className='mt-6 ml-4'>

    <div className='h-[460px] w-[320px] bg-white  rounded-[10px] border-[1px] border-gray '>
        <p className='ml-4 mt-5 font-semibold capitalize  mb-3 '>Add this  to your feed </p>
        <div className='flex ' >
        <img src="/p1.avif" className="h-[50px] w-[50px] object-cover rounded-full ml-3  " /> 
          <div className=' capitalize ml-3 space-y-1 '>
              <p className='font-semibold text-[15px] opacity-90 '>Cishayo songa achille </p>
              <p className='text-[12px] font-semibold  opacity-60'>software developer  . content  creator .</p>
              <p className='text-[12px] font-semibold  opacity-60'>trainer .managing director</p>
              <button className='h-[34px] mt-1 rounded-[50px] border-[1px] border-black  capitalize font-semibold opacity-70   bg-inherit w-[120px] '>follow</button>
              <FaPlus className='relative -top-7     left-4 text-sm'/>
          </div>
        </div>
        <div className='flex mt-4 ' >
          
        <img src="/p2.avif" className="h-[50px] w-[50px] object-cover rounded-full ml-3  " /> 
          <div className=' capitalize ml-3 space-y-1 '>
              <p className='font-semibold text-[15px] opacity-90 '>united nations volunteers </p>
              <p className='text-[12px] font-semibold  opacity-60'>software developer  . content  creator .</p>

              <button className='h-[34px] mt-1 rounded-[50px] border-[1px] border-black  capitalize font-semibold opacity-70   bg-inherit w-[120px] '> follow</button>
              <FaPlus className='relative -top-7     left-4 text-sm'/>
          </div>
        </div>
        <div className='flex mt-4 ' >
        <img src="/p3.avif" className="h-[50px] w-[50px] object-cover rounded-full ml-3  " /> 
          <div className=' capitalize ml-3 space-y-1 '>
              <p className='font-semibold text-[15px] opacity-90 '>job vacances today </p>
              <p className='text-[12px] font-semibold  opacity-60'>software developer  . content  creator .</p>
              <p className='text-[12px] font-semibold  opacity-60'>management</p>
              <button className='h-[34px] mt-1 rounded-[50px] border-[1px] border-black  capitalize font-semibold opacity-70   bg-inherit w-[120px] '>follow</button>
              <FaPlus className='relative -top-7 left-4 text-sm'/>
              <div className='flex'>
              <p className='text-[14px] ml-[-60px] relative top-[-14px] opacity-80 '>view all recommendations </p>
              <FaLongArrowAltRight className='text-[30px] relative top-[-18px] left-[5%] text-gray-600'/>
              </div>
          </div>
        </div>
    </div>
        <div className=' h-[270px] w-[320px]  bg-white text mt-2 relative rounded-[10px] pl-3 pt-2 sticky top-16 '>
                <img src='/mylink.png' alt='' className='h-['/>
              </div>
              {/* _________icons_______ */}
              <div>
                <FaThumbsUp/>
              </div>
    </div>
  )
}

export default Left