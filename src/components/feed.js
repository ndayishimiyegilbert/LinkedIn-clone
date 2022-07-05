import {React,useState} from 'react';
import {FaImage,FaPlay,FaIndent,FaShirtsinbulk,FaEllipsisH,FaLocationArrow} from 'react-icons/fa'
import "../App.css"

function Feed() {
  const [userinfo,setUserinfo]=useState("hidden")
  return (
    <div className=' ml-[20px] relative  top-6'>
        {/* ________top1_______ */}

        <div className=' h-[120px] w-[540px] bg-white rounded-[10px] border-[1px] ' id="bla">
           <div className='ml-4 mt-4 flex'>
           <img src="/back.jpg" className="h-[50px] w-[50px] object-cover rounded-full  " />  
           <input type="text" placeholder=" start a post" className='h-[50px] border-[1px] border-gray-500  rounded-[50px] ml-3  w-[410px] bg-inherit pl-4 hover:bg-gray-100 ' />
           </div>
           {/* ________photos__ */}
           <div className='flex'>
               <div className='flex  text-[14px] font-semibold  '>
               <FaImage className='text-blue-300  text-[20px]  ml-5 mt-4' />
               <p className='opacity-60 mt-4 ml-3'>Photo</p>
               </div>
               <div className='flex  font-semibold  ml-8 '>
               <img src='/play.png'  className=' object-contain   ml-5 mt-[18px] h-4 w-[20px] bg-[#86df86] text-[20px] ' />
               <p className='opacity-60 mt-4 ml-3 text-[14px] '>Video</p>
               </div>
               <div className='flex  text-[14px] font-semibold ml-8  '>
               <FaShirtsinbulk className='text-yellow-500  text-[20px]  ml-5 mt-4' />
               <p className='opacity-60 mt-4 ml-3'>Event</p>
               </div>
               <div className='flex  text-[14px] font-semibold ml-8  '>
               <FaIndent className='text-red-300  text-[20px]  ml-5 mt-4' />
               <p className='opacity-60 mt-4 ml-3'>Write circle</p>
               </div>
           </div>
        </div>
        {/* __________line______ */}
        <div className='flex'>
            <div className='border-b-2 w-[450px] mt-3  border-[#969090]  '></div>
            <p className='relative top-2 left-14px text-[13px] ml-2 '>sort by : </p><span className='text-[13px] font-semibold relative top-2 left-2 '>Top</span>
        </div> 

        {/* ______content____ */}  
       
       <div>
         <div className='h-auto w-[540px] bg-white mt-3 pt-2 pl-3'>
          <div className='text-[13px] flex cursor-pointer  '>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="" className="h-[25px] w-[25px] object-cover rounded-full "/>
            <span className=" hoc ml-1 font-semibold "  onMouseOver={()=>(setUserinfo("flex"))} onMouseLeave={()=>(setUserinfo("hidden"))}>Nathale Ingabire</span><span className="ml-1 opacity-70">celebrated this</span><FaEllipsisH className="text-[18px] ml-[55%] mt-1 opacity-75  "/>
            {/* _____________hover_________ */}
            <div className={`${userinfo}  h-[140px] w-[300px] bg-white ml-[-50%] rounded-[10px] absolute  border-black shadow-lg mt-[-10%]`}>

            <div className={`  flex  `}>
              <div className={` `} >

            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500  "alt='' className=" rounded-full w-[50px] h-[50px] object-cover ml-10 mt-4"  />
            </div>
            <div className="text-[15px] mt-3 ml-2 ">
              <span className="font-semibold">Irakoze charite</span>
                 <span className=" text-[14px] opacity-70 ">.1st</span>
                 <p className=" text-[14px] opacity-70 ">student at Rwanda Coding</p>
                 <p className=" text-[14px] opacity-70 ">Academy</p>
            </div>
            </div>
            <div className="absolute top-[60%] ">
                <button className="h-[40px] w-[260px] bg-blue-500 ml-4 mt-2 rounded-[10px] text-white text-[17px]  "> Message</button>
                <FaLocationArrow className="relative mt-[-9%] ml-[29%] text-[17px] text-white "/>  
              </div>

          </div>
              </div>
          <div className="flex mt-7 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500  "alt='' className=" rounded-full w-[50px] h-[50px] object-cover" />
            <div className="ml-1 -mt-1">
              <span className="text-[14px] font-semibold ">Irakoze charite .</span> <span className="text-[13.4px]  opacity-70 ">following</span>
              <p className="text-[13.4px]  opacity-70 ">helping software  Companies  Hire Greate Developers <br></br> 1d.</p>
            </div>
            </div>
            <div className="text-[13.4px] ">
                <p >Was Rejected by Brandies university in 2012</p>
                <p className="mt-[8%] relative top-5 opacity-70  ">10 years ago rejected by brandies </p>
                <div className="flex ml-[85%] ">
                <FaEllipsisH className="mt-[5px] relative left-[-4px] opacity-70  " />
                <p className="opacity-70 ">see more</p>
                </div>
                <img src="https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="" className="h-[560px] w-[600px] object-cover relative left-[-5px] mt-1 " />
              </div>

         </div>
         {/* ___________content2_______ */}
         <div className='h-auto w-[540px] bg-white mt-3 pt-2 pl-3'>
          <div className='text-[13px] flex cursor-pointer  '>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="" className="h-[25px] w-[25px] object-cover rounded-full "/>
            <span className=" hoc ml-1 font-semibold "  onMouseOver={()=>(setUserinfo("flex"))} onMouseLeave={()=>(setUserinfo("hidden"))}>Nathale Ingabire</span><span className="ml-1 opacity-70">celebrated this</span><FaEllipsisH className="text-[18px] ml-[55%] mt-1 opacity-75  "/>
            {/* _____________hover_________ */}
            <div className={`${userinfo}  h-[140px] w-[300px] bg-white ml-[-50%] rounded-[10px] absolute  border-black shadow-lg mt-[-10%]`}>

            <div className={`  flex  `}>
              <div className={` `} >

            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500  "alt='' className=" rounded-full w-[50px] h-[50px] object-cover ml-10 mt-4"  />
            </div>
            <div className="text-[15px] mt-3 ml-2 ">
              <span className="font-semibold">Irakoze charite</span>
                 <span className=" text-[14px] opacity-70 ">.1st</span>
                 <p className=" text-[14px] opacity-70 ">student at Rwanda Coding</p>
                 <p className=" text-[14px] opacity-70 ">Academy</p>
            </div>
            </div>
            <div className="absolute top-[60%] ">
                <button className="h-[40px] w-[260px] bg-blue-500 ml-4 mt-2 rounded-[10px] text-white text-[17px]  "> Message</button>
                <FaLocationArrow className="relative mt-[-9%] ml-[29%] text-[17px] text-white "/>  
              </div>

          </div>
              </div>
          <div className="flex mt-7 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500  "alt='' className=" rounded-full w-[50px] h-[50px] object-cover" />
            <div className="ml-1 -mt-1">
              <span className="text-[14px] font-semibold ">Irakoze charite .</span> <span className="text-[13.4px]  opacity-70 ">following</span>
              <p className="text-[13.4px]  opacity-70 ">helping software  Companies  Hire Greate Developers <br></br> 1d.</p>
            </div>
            </div>
            <div className="text-[13.4px] ">
                <p >Was Rejected by Brandies university in 2012</p>
                <p className="mt-[8%] relative top-5 opacity-70  ">10 years ago rejected by brandies </p>
                <div className="flex ml-[85%] ">
                <FaEllipsisH className="mt-[5px] relative left-[-4px] opacity-70  " />
                <p className="opacity-70 ">see more</p>
                </div>
                <imgy src="https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="" className="h-[560px] w-[600px] object-cover relative left-[-5px] mt-1 " />
              </div>

         </div>
       </div>
    </div>
  )
}

export default Feed 