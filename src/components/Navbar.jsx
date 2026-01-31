import { NavLink } from "react-router-dom";

export function Navbar() {
  
  return(
    <nav className="fixed min-w-screen bg-ctp-base  border-b-[0.1px] border-ctp-lavender text-ctp-text">
      <div className="">
        <ul className="flex flex-wrap justify-center items-center gap-5 max-w-screen p-3 text-base font-medium text-poppins">
          <li className="">
            <NavLink to="/home" className={({isActive}) => isActive ? 'text-ctp-green after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition' :
              'hover:after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded'}>
              Home</NavLink> 
          </li>
          <li className="">
            <NavLink to="/course" className={({isActive}) => isActive ? 'text-ctp-green after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition' :
              'hover:after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded'}>
              Course</NavLink> 
          </li >
          <li className="">
            <NavLink to="/practice" className={({isActive}) => isActive ? 'text-ctp-green after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition' :
              'hover:after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded'}>
              Practice</NavLink> 
          </li>
          <li className="">
            <NavLink to="/pomodoro" className={({isActive}) => isActive ? 'text-ctp-green after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition' :
              'hover:after:scale-x-100 after:block after:content-[""] after:border-b after:scale-x-0 after:transition hover:text-ctp-green transition duration-100 ease-in-out rounded'}>
              Pomodoro</NavLink> 
          </li>
        </ul>
      </div>
    </nav>
  );
}
