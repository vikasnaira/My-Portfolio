import React from 'react'
import { FaFacebookF , FaWhatsapp, FaInstagram, FaLinkedin} from "react-icons/fa";
import MagneticButton from './Tools/Magnetbutton';
import { motion } from 'framer-motion';
import Social from './Tools/Social';
const Contact = () => {
  const WhatsappNumber = "8198947026";
  const WhatsappLink = `https://wa.me/${WhatsappNumber}`;

  return (
    <motion.article 
    initial={{ opacity: 0 , y:50 }}
    whileInView={{ opacity: 1 , y:0 }}
    viewport={{ once:false}}
    transition={{ duration:0.5 }}
    className='mt-10 w-full flex md:flex-row flex-col items-center md:items-start text-white justify-between  font-bold'>
    <div className="Contact w-1/3  mt-10 flex flex-col items-center  gap-5">
    <MagneticButton children={"Contact Me"} className="text-3xl vk text-nowrap text-[#7AF298]"/>
    <div className=" rounded-full overflow-hidden md:h-80 z-2 md:w-80 h-40 w-40 flex items-center justify-center ">
      <img src="Vikas2.jpeg" alt="" className='md:h-full object-cover md:w-full  '/>
    </div>
    </div>

      <div className="flex md:hidden mt-5 gap-4">
        <button className='bg-white text-2xl text-black  p-2  rounded-full '><FaFacebookF/></button>
        <button className='bg-white text-2xl text-black  p-2  rounded-full '><FaWhatsapp/></button>
        <button className='bg-white text-2xl text-black  p-2  rounded-full '><FaInstagram/></button>
        <button className='bg-white text-2xl text-black  p-2  rounded-full '><FaLinkedin/></button>
      </div>

      <motion.div 
          initial={{ height:100, opacity: 0, x:-100,y:160, scale:0.2 }}
          whileInView={{opacity:1, scale:1, x:0, y:0}}
          viewport={{ once:false }}
          transition={{ duration: 0.8 }}
          className="icons relative hidden md:flex text-4xl  right-25  mt-12">
        <div >
         <a href='https://www.linkedin.com/in/vikas-naira-06229131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='p-1 absolute -left-18 top-18 flex  justify-center items-center gap-2'>
        <button className="bg-white text-black p-1 rounded-full"><FaLinkedin/></button>
        <p className='text-sm font-medium text-gray-700'>Linkedin</p>
          </a>

          <a href={WhatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full p-1 absolute flex  -left-10 top-35 justify-center items-center gap-3">
        <button className="rounded-full p-1 bg-white text-black "><FaWhatsapp/>
        </button>
        <p className='text-sm font-medium text-gray-700'>Twitter</p>
          </a>

          <a href="https://www.facebook.com/share/1Go7F6JReN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="  p-1 absolute flex  -left-8 top-55 justify-center items-center gap-3">
        <button className="rounded-full bg-white  text-black  p-1"><FaFacebookF/></button>
        <p className='text-sm font-medium text-gray-700'>Facebook</p>
          </a>

        <a href='https://www.instagram.com/vikas_naira?igsh=ZXV3Z2RwN2them1l' className="p-1 absolute flex  -left-17  top-75 justify-center items-center gap-3">
        <button className="rounded-full bg-white  text-black  p-1"><FaInstagram/></button>
        <p className='text-sm font-medium text-gray-700'>Instagram</p>
          </a>
        </div>
      </motion.div>
     
<section className='md:w-1/2 mt-10 flex flex-col items-center w-full  gap-5'>
  <Social/>
</section>

    </motion.article>
  )
}

export default Contact