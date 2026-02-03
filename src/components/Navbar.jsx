import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Icon } from "./Icon.jsx";

export function Navbar({name}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  
  return(
    <nav className={`fixed min-w-screen transition-transform transform duration-300 bg-ctp-base border-ctp-lavender text-ctp-text`}>
      <button type="button" onClick={(e) => setIsOpen(!isOpen)} className="absolute right-10 top-3">
        <Icon name="Bars3Icon" className="hidden bg-auto size-8 p-1/2 rounded cursor-pointer max-sm:block  hover:bg-ctp-lavender hover:text-ctp-base transition duration-200 ease-in-out"/>
      </button>
      <div className={`${isOpen ? 'block mt-8' : ''} ${isMobile && isOpen == false ? 'hidden' : ''}`}>
        <ul className={`${isMobile ? 'block text-center' : 'flex flex-wrap justify-center items-center gap-10'}  max-w-screen p-3 text-base font-medium font-poppins`}>
          <li className="">
            <NavLink to="/home" className={({isActive}) => isActive ? `${isMobile ? 'after:scale-x-50' : 'after:scale-x-100' } text-ctp-green  after:block after:content-[""] after:border-b after:transition` :
              `${isMobile ? 'hover:after:scale-x-50' : 'hover:after:scale-x-100'} after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded`}>
              Home</NavLink> 
          </li>
          <li className="">
            <NavLink to="/course" className={({isActive}) => isActive ? `${isMobile ? 'after:scale-x-50' : 'after:scale-x-100' } text-ctp-green  after:block after:content-[""] after:border-b after:transition` :
              `${isMobile ? 'hover:after:scale-x-50' : 'hover:after:scale-x-100'} after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded`}>
              Course</NavLink> 
          </li >
          <li className="">
            <NavLink to="/practice" className={({isActive}) => isActive ? `${isMobile ? 'after:scale-x-50' : 'after:scale-x-100' } text-ctp-green  after:block after:content-[""] after:border-b after:transition` :
              `${isMobile ? 'hover:after:scale-x-50' : 'hover:after:scale-x-100'} after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded`}>
              Practice</NavLink> 
          </li>
          <li className="">
            <NavLink to="/pomodoro" className={({isActive}) => isActive ? `${isMobile ? 'after:scale-x-50' : 'after:scale-x-100' } text-ctp-green  after:block after:content-[""] after:border-b after:transition` :
              `${isMobile ? 'hover:after:scale-x-50' : 'hover:after:scale-x-100'} after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded`}>
              Pomodoro</NavLink> 
          </li>
          <li className={`${isMobile ? '' : 'hidden'}`}>
            <NavLink to="/profile" className={({isActive}) => isActive ? `${isMobile ? 'after:scale-x-50' : 'after:scale-x-100' } text-ctp-green  after:block after:content-[""] after:border-b after:transition` :
              `${isMobile ? 'hover:after:scale-x-50' : 'hover:after:scale-x-100'} after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded`}>
              Profile</NavLink> 
          </li>
        </ul>
        <NavLink to="/profile" className={`${isOpen ? 'block' : ''} ${isMobile && isOpen == false ? 'hidden' : ''} fixed flex gap-3 top-3 right-15`}>
          <p className={`${isMobile ? 'hidden' : ''} font-poppins font-medium`}>{name}</p>
          <Icon name="UserIcon" className={`${isMobile ? 'hidden size-6' : 'size-6'}`} />
        </NavLink>
      </div>
    </nav>
  );
}
