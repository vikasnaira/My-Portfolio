import React from 'react'
import { FaFacebookF , FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";
import MagneticButton from './Tools/Magnetbutton';
import { motion } from 'framer-motion';
import Social from './Tools/Social';
const Contact = () => {
  return (
    <article className='h-screen w-full flex  text-white justify-between  font-bold'>
    <div className="Contact w-1/3  mt-10 flex flex-col items-center j gap-5">
    <MagneticButton children={"Contact Me"} className="text-3xl vk text-[#7AF298]"/>
    <div className=" rounded-full overflow-hidden h-80 z-2 w-80 flex items-center justify-center ">
      <img src="Vikas2.jpeg" alt="" className='h-full object-cover w-full'/>
    </div>
    </div>
      <motion.div 
      initial={{ height:100, opacity: 0, rotate:90 , y:380 , x:-60 }}
      whileInView={{rotate:0 ,y:0 ,opacity:1, x:0}}
      viewport={{ once:false }}
      transition={{ duration: 0.5 }}
      className="icons relative text-4xl right-25  mt-12">
        <ul >
         <li className='p-1 absolute -left-18 top-18 flex  justify-center items-center gap-2'>
        <button className="bg-white text-black p-1 rounded-full"><FaLinkedin/></button>
        <p className='text-sm font-medium text-gray-700'>Linkedin</p>
          </li>

          <li className="rounded-full p-1 absolute flex  -left-10 top-35 justify-center items-center gap-3">
        <button className="rounded-full p-1 bg-white text-black "><FaTwitter/>
        </button>
        <p className='text-sm font-medium text-gray-700'>Twitter</p>
          </li>

          <li  className="  p-1 absolute flex  -left-8 top-55 justify-center items-center gap-3">
        <button className="rounded-full bg-white  text-black  p-1"><FaFacebookF/></button>
        <p className='text-sm font-medium text-gray-700'>Facebook</p>
          </li>

        <li  className="  p-1 absolute flex  -left-17  top-75 justify-center items-center gap-3">
        <button className="rounded-full bg-white  text-black  p-1"><FaInstagram/></button>
        <p className='text-sm font-medium text-gray-700'>Instagram</p>
          </li>
        </ul>
      </motion.div>


      
<section className='w-1/2  mt-10 flex flex-col items-center j gap-5'>
  <Social/>
</section>

    </article>
  )
}

export default Contact