import { Link } from 'react-router-dom'

export function Card({ link, title, description }) {
  
  return(
    <Link to={`/${link}`} className="font-poppins transition duration-200 ease-in-out bg-ctp-lavender shadow-lg shadow-ctp-crust hover:bg-ctp-blue w-60 sm:w-100 min-h-30 mx-10 rounded-xl p-3 ">
    <h1 className="font-semibold text-lg md:text-xl">{title}</h1> 
    <p className="font-normal text-sm md:text-base">{description}</p>
    </Link>
  );
}
