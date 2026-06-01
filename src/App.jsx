import React from 'react'
import Navbar from './Components/Navbar'
import { ReactLenis } from 'lenis/react';
import { Route  , Routes} from 'react-router-dom'
import Home from './Components/Home'
import Works from './Components/Works'
const App = () => {
  return (
    <>
 <ReactLenis root>
  <Navbar/> 
  <Home/>
 </ReactLenis>
   </>
  )
}

export default App 