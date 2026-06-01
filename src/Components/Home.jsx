import React from 'react'
import Hero from './Hero';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Lable from './Tools/Lable';
import Footer from './Tools/Footer';
import Procedes from './Procedes';
import { Code2, Sparkles, Terminal, Cpu } from 'lucide-react'
const Home = () => {
  const serviceItems = [
    { text: "Web Developer", icon: <Cpu className="w-16 h-16 md:w-20 md:h-20 text-black stroke-[1.5]" /> },
    { text: "UI/UX Designer", icon: <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-black stroke-[1.5]" /> }
  ];
  return (      
    <main className='overflow-hidden bg-black w-full'>

      <section>
        <Hero/>
      </section>

      <section>
        <About/>
      </section>

      <section>
          <Procedes/>
      </section>

      <section>
        <Works/>
      </section>

      <section>
        <Lable baseItems={serviceItems} text="lg:text-9xl  text-6xl" />
      </section>


      <section>
        <Footer />
      </section>

      <section>
        <Contact/>
      </section>

    </main>
  )
}

export default Home