import React from 'react'
import Navbar from './Components/Navbar'
import { ReactLenis } from 'lenis/react';
import Home from './Components/Home'
import Works from './Components/Works'
import Sidebar from './Components/Tools/Sidebar';
const App = () => {
  return (
    <>
 <ReactLenis root>
  <Navbar/> 
  <Sidebar/>
  <Home/>
 </ReactLenis>
   </>
  )
}

export default App 