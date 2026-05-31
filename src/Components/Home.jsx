import React from 'react'
import Hero from './Hero';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Lable from './Tools/Lable';
import Footer from './Tools/Footer';
const Home = () => {
  return (      
    <main className='overflow-hidden bg-black w-full h-bg-red-500'>
      <section>
        <Hero/>
      </section>

      <section>
        <About/>
      </section>


      <section>
        <Works/>
      </section>

      <section>
        <Lable/>
      </section>

      <section>
        <Contact/>
      </section>



      <section>
        <Footer/>
      </section>



    </main>
  )
}

export default Home