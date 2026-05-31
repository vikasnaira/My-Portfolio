import React from 'react'
import Navbar from './Components/Navbar'
import { Route  , Routes} from 'react-router-dom'
import Home from './Components/Home'
import Works from './Components/Works'
const App = () => {
  return (
    <>
  <Navbar/> 
  <Home/>
   </>
  )
}

export default App 