import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// defaultItems rkhe hain taaki agar aap props na bhi bhejo, toh ye crash na ho
const Label = ({ baseItems = [] , className = "" , text = "" }) => {
  const containerRef = useRef(null);
  const [hoverOffset, setHoverOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const combinedX = useTransform(scrollX, (latestScroll) => latestScroll + hoverOffset);
  const smoothX = useSpring(combinedX, { stiffness: 80, damping: 25 });

  // Marquee smooth chale isliye items ko repeat karna zaroori hota hai
  // Agar kam items hain toh hum unhe 3-4 baar repeat kar dete hain
  const repeatedItems = baseItems.length > 0 
    ? Array(4).fill(baseItems).flat() 
    : [];

  if (repeatedItems.length === 0) return null; // Agar koi data nahi hai toh kuch render nahi hoga

  return (
    <motion.div
    initial={{ opacity: 0 ,y:50}}
    whileInView={{ opacity: 1 ,y:0}}
    transition={{ duration: 0.5 }}
      ref={containerRef} 
      onMouseEnter={() => setHoverOffset(-200)} 
      onMouseLeave={() => setHoverOffset(0)}
      className={` ${className} w-full border-y-2 border-black py-6 z-1 overflow-y-hidden bg-[#7AF298] overflow-x-hidden cursor-pointer select-none relative flex items-center shadow-[0_4px_20px_rgba(122,242,152,0.2)]`}
    >
        <motion.div
          style={{ x: smoothX }}
          className='flex items-center gap-16 whitespace-nowrap will-change-transform'
        > 
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12 group"> {/* group class add ki taaki icon rotate work kare */}
              <h1 className={` ${text} text-black font-extrabold tracking-tighter uppercase`}>
                {item.text}
              </h1>
              {item.icon && (
                <div className="flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
              )}
            </div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Label;