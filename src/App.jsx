import { useState } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import LightBox from './components/LightBox'



function App() {
  const [LightBoxDisplay, setLightBoxDisplay ] = useState(true)

  return (
    <div className='w-screen min-h-max mb-40'>
      {
        LightBoxDisplay && <LightBox />
      }

      <Header />

      <div className='w-[45%] h-fit bg-transparent z-30 overflow-visible absolute top-1/3 left-1/2 -translate-x-1/2 pb-10 flex flex-col gap-5'>
        <Hero />
        <Stats />
        <About />
      </div>



    </div>
  )
}

export default App
