import { useNavigate } from 'react-router-dom';

export function ToLogin({title, className = ""}) {
  const navigate = useNavigate();

  const gotoLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }
  
  return(
  <div className={className}>
    <h1 className="px-2 text-center text-xl sm:text-2xl text-ctp-text font-normal font-poppins">{title}</h1>
    <button type="button" onClick={gotoLogin}
      className="max-sm:text-lg text-lg sm:text-2xl font-roboto-flex bg-gradient-to-r from-ctp-green to-ctp-green focus:to-ctp-blue hover:to-ctp-blue max-sm:px-2 max-sm:py-1 px-5 py-1  rounded mt-2 sm:mt-3 cursor-pointer duration-300 transition ease-in-out hover:scale-105">
      Login
    </button>
  </div>
  );
}
