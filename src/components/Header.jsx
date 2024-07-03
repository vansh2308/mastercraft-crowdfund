import imgHero from "../assets/image-hero-desktop.jpg"
import logo from "../assets/logo.svg"

export default function Header(){
  return(
    <div className="w-full h-fit bg-red-400 relative">
      <img src={imgHero} alt="img-hero" className="w-screen h-auto relative top-0 left-0" />
      <div className="absolute top-0 left-0 w-screen h-full z-10 black-grad" />      
      <div className="w-full absolute top-0 left-0 z-20 h-fit px-24 py-7 flex justify-between items-center">
        <img src={logo} />
        <ul className="flex gap-14 text-white font-light text-sm cursor-pointer">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul> 
      </div>

    </div>
  )
}