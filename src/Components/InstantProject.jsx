import React from 'react'

const InstantProject = () => {
  return (
    <article className='flex flex-col justify-center items-center gap-5 mt-10 relative w-full'>
      <h1 className="text-4xl text-center font-bold text-[#7AF298]">INSTANT PROJECTS <br /> OVERVIEW</h1>

      <div className='absolute h-50 w-50 md:h-150 md:w-150 bg-blue-500/50  left-[50%] top-[20%] rounded-full blur-3xl'>

      </div>
       
      {/* Grid hata kar CSS Columns (Pinterest Style) lagaya hai */}
      <div className="projectGrid z-2 columns-1 sm:columns-2 md:columns-2 lg:columns-4 md:p-20 p-10 max-w-7xl w-full mx-auto [column-fill:_balance]">

        <img src="Music.webp" alt="" className='w-full h-30 object-cover hover:scale-103  transition-all duration-300  rounded-lg mb-4 break-inside-avoid block'/>
        <img src="./Photos/PhotoGen.jpg" alt="" className='w-full h-auto hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <img src="./Photos/Weather.jpg" alt="" className='w-full h-auto  hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <img src="./Photos/Ai.jpg" alt="" className='w-full h-auto       hover:scale-103  transition-all duration-300 object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <img src="./Photos/Login.jpg" alt="" className='w-full h-107     hover:scale-103  transition-all duration-300 object-cover rounded-lg mb-4 break-inside-avoid block '/>
        <img src="./Photos/enh.jpg" alt="" className='w-100 h-auto       hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block '/>
        <img src="./Photos/vk.jfif" alt="" className='w-full h-50        hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <img src="./Photos/Weather.jpg" alt="" className='w-full         hover:scale-103  transition-all duration-300  h-auto object-cover rounded-lg mb-4 break-inside-avoid block'/>
        
      </div>
    </article>
  )
}

export default InstantProject
