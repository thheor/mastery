
export function TimerDisplay({time, className = ""}) {
  
  let minutes = Math.floor(time / 60 % 60);
  let second = Math. floor(time % 60);

  minutes = String(minutes).padStart(2, "0");
  second = String(second).padStart(2, "0");

  if(window.innerWidth <= 600){
    return(
    <div className="flex flex-col">
      <p className="text-[250px] text-ctp-blue font-roboto-flex font-bold -mt-15">{minutes}</p>
      <p className="text-[250px] text-ctp-blue font-roboto-flex font-bold -mt-40">{second}</p>
    </div>
    );
  }

  return(
    <div>
    <p className={className}>{minutes}:{second}</p>
    </div>
  ); 
}
