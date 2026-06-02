import React from 'react'
import Text from './Tools/Text'
import { useRef  , useEffect  } from 'react'
import Cursor from './Tools/Cursor'
const Hero = () => {
useEffect(() => {
  vRef.current.autoPlay;
}, [])

 const vRef = useRef(null)
  return (
  <section className=' md:mt-30 mt-20  relative py-10 px-2 md:px-5' id='Hero'>


<Cursor/>

   <video
    autoPlay muted loop playsInline 
    ref={vRef}
    className="absolute -bottom-20 left-[25%] md:left-[50%] md:-top-[20%] lg:-top-[10] mt-[25%] w-50 md:w-1/2 md:z-1 z-3 pointer-events-none h-full md:object-bottom"
  >
    <source src="video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <div className="text  py-5 gap-5 md:p-10  flex-col flex">
        <hr  className='h-1 md:w-40 w-20 absolute md:top-19 bg-black z-9 top-10 text-white'/>
        <Text bg={" sign text-white md:text-2xl text-sm antialiased"} delay={400} Name={"vikas naira"} top={"w-40 h-20" } move={"-translate-y-10"}/>
        <div className='flex md:gap-3 '>
        <Text bg={"text-white vk md:text-7xl text-4xl antialiased h-20 z-2"} delay={700} Name={"Web"} top={"md:w-47  w-35  md:h-20 h-13" } move={"-translate-y-24"}/>
        <Text bg={"text-white vk md:text-7xl text-4xl  antialiased h-20 z-2"} delay={1000} Name={"Developer"} top={" md:w-120 w-[90vw] md:h-20 h-10" } move={" -translate-y-24"}/>
        </div>
        <div className="sep flex h-20   md:w-1/2">
        <Text bg={"text-white vk md:text-7xl text-4xl antialiased h-20 z-2"} delay={900} Name={"&"} top={"md:w-18 w-9 h-25" } move={"-translate-y-28"}/>
        <Text bg={"text-black vk md:text-7xl text-4xl antialiased h-20 [-webkit-text-stroke:.5px_white] text-extrabold  z-2"} delay={700} Name={"Designer"} top={"md:w-100 w-50 h-10 md:h-20"} move={" -translate-y-28"}/>
        </div>
        <div className='w-fit h-fit top-80 z-9 px-2 absolute '>

          <a href="#Contact">
          <button className='connect bg-white text-black p-2 hover:bg-black hover:text-white rounded-3xl px-5'>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Connect </span>
          </button>
          </a>
           <p className='text-white w-full vk text-xs md:w-100 py-2 md:text-sm'>I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation.  You’ll find me building side projects, diving into new tech stacks, or simply exploring what’s next in the world of web development.</p>
        </div>
       </div>
    </section>
  )
} 
export default Hero