import React from 'react'
import { FaFacebookF , FaWhatsapp, FaInstagram, FaLinkedinIn} from "react-icons/fa";
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
    className='mt-20 w-full flex-col min-h-screen lg:flex-row  flex items-center lg:items-start text-white justify-between  font-bold'>
    <div className="Contact w-1/3  mt-10 flex flex-col items-center  gap-5">
    <MagneticButton children={"Contact Me"} className="text-3xl vk text-nowrap text-[#7AF298]"/>
    <div className=" rounded-full overflow-hidden md:h-80 z-2 md:w-80 h-40 w-40 flex items-center justify-center ">
      <img src="Vikas2.jpeg" alt="" className='md:h-full object-cover md:w-full  '/>
    </div>
    </div>

      <div className="flex md:hidden mt-6 gap-4">
          <a href="https://www.facebook.com/share/1Go7F6JReN/?mibextid=wwXIfr"  className='bg-blue-600 p-2 rounded-full text-2xl' ><FaFacebookF/></a>
          <a href={WhatsappLink} target="_blank" rel="noopener noreferrer"  className='bg-green-600 p-2 rounded-full text-2xl' ><FaWhatsapp/></a>
          <a href='https://www.instagram.com/vikas_naira?igsh=ZXV3Z2RwN2them1l' className='bg-red-600 p-2 rounded-full text-2xl' ><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/vikas-naira-06229131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  className='bg-sky-600 p-2 rounded-full text-2xl' ><FaLinkedinIn/></a>
        
      </div>

      <motion.div 
          initial={{ opacity: 0, x:-100,y:160, scale:0.2 }}
          whileInView={{opacity:1, scale:1, x:220, y:0}}
          viewport={{ once:false }}
          transition={{ duration: 0.8 }}
          className="icons absolute hidden md:flex text-4x lg:left-55 mt-12">
        <div >
         <a href='https://www.linkedin.com/in/vikas-naira-06229131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='p-1 absolute -left-18 bg-white/20  backdrop-blur-sm border border-gray-400  text-[20px] rounded-full top-18 flex  justify-center items-center gap-2'>
        <button className="bg-sky-600 text-white text-[20px] p-2 rounded-full"><FaLinkedinIn/></button>
        <p className='text-sm font-light vk '>Linkedin</p>
          </a>

          <a href={WhatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full  absolute flex bg-white/20  backdrop-blur-sm border border-gray-400 text-white text-[20px] p-2  -left-10 top-35 justify-center items-center gap-3">
        <button className="rounded-full  bg-green-500 text-white text-[20px] p-2  "><FaWhatsapp/>
        </button>
        <p className='text-sm font-light vk'>Twitter</p>
          </a>

          <a href="https://www.facebook.com/share/1Go7F6JReN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="  p-1 absolute flex bg-white/20  backdrop-blur-sm rounded-full border border-gray-400 -left-8 top-55 justify-center items-center gap-3">
        <button className="rounded-full bg-blue-500  text-[20px] text-white  p-2"><FaFacebookF/></button>
        <p className='text-sm font-light vk '>Facebook</p>
          </a>

        <a href='https://www.instagram.com/vikas_naira?igsh=ZXV3Z2RwN2them1l' className="p-1 absolute flex  -left-17  bg-white/20  backdrop-blur-sm border border-gray-400 rounded-full top-75 justify-center items-center gap-3">
        <button className="rounded-full bg-red-500  text-[20px] text-white p-2"><FaInstagram/></button>
        <p className='text-sm font-light vk '>Instagram</p>
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