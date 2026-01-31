import { Link } from 'react-router-dom'

export function Card({ link, title, description }) {
  
  return(
  //<div className="font-poppins transition duration-200 ease-in-out bg-ctp-lavender hover:bg-ctp-blue w-100 h-30 rounded-xl p-5 ">
    <Link to={`/${link}`} className="font-poppins transition duration-200 ease-in-out bg-ctp-lavender shadow-lg shadow-ctp-crust hover:bg-ctp-blue w-100 h-30 rounded-xl p-3 ">
    <h1 className="font-semibold text-xl">{title}</h1> 
    <p className="font-base">{description}</p>
    </Link>
  //</div>
  );
}
