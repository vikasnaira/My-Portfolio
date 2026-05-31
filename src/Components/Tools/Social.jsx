import React from 'react'

const Social = () => {
  return (
    <article className="relative h-fit">
        <h1 className='text-3xl text-[#7AF298] font-bold ' >Social Links</h1>
        <div className="flex  justify-between gap-20 ">
        <ul className=' mt-10 flex flex-col gap-5 font-medium'>
            <li className='text-sm text-gray-600'>INSTAGRAM</li>
            <li className='text-sm text-gray-600'>TWITTER</li>
            <li className='text-sm text-gray-600'>LINKEDIN</li>
            <li className='text-sm text-gray-600'>GITHUB</li>
        </ul>


     <ul className=' mt-10 flex flex-col gap-5 font-medium'>
            <li className='text-sm text-gray-600'>INSTAGRAM</li>
            <li className='text-sm text-gray-600'>TWITTER</li>
            <li className='text-sm text-gray-600'>LINKEDIN</li>
            <li className='text-sm text-gray-600'>GITHUB</li>
        </ul>

<div className='w-80 h-80 rounded-full hidden bg-blue-500/40 blur-3xl   absolute -right-70  top-20'>

</div>


        </div>
    </article>
  )
}

export default Social