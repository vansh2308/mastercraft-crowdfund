import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'


function App() {

  return (
    <div className='w-screen min-h-max mb-40'>
      <Header />

      <div className='w-[45%] h-fit bg-transparent z-30 overflow-visible absolute top-1/3 left-1/2 -translate-x-1/2 pb-10 flex flex-col gap-5'>
        <Hero />
        <Stats />
      </div>



    </div>
  )
}

export default App
