import { useNavigate } from 'react-router-dom';

export function ToLogin({title, className = ""}) {
  const navigate = useNavigate();

  const gotoLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }
  
  return(
  <div className={className}>
    <h1 className="text-xl sm:text-4xl md:text-5xl text-ctp-text font-poppins">{title}</h1>
    <button type="button" onClick={gotoLogin}
      className="max-sm:text-lg text-lg  font-roboto-flex bg-gradient-to-r from-ctp-green to-ctp-green focus:to-ctp-blue hover:to-ctp-blue max-sm:px-2 max-sm:py-1 sm:px-4 sm:py-2 md:px-4 lg:px-5 md:py-2 lg:py-3 rounded mt-2 cursor-pointer duration-300 transition ease-in-out hover:scale-105">
      Login
    </button>
  </div>
  );
}
