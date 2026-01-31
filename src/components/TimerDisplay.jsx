
export function TimerDisplay({time, className = ""}) {
  
  let minutes = Math.floor(time / 60 % 60);
  let second = Math. floor(time % 60);

  minutes = String(minutes).padStart(2, "0");
  second = String(second).padStart(2, "0");

  if(window.innerWidth <= 600){
    return(
    <div className="flex flex-col">
      <p className={className}>{minutes}</p>
      <p className={className}>{second}</p>
    </div>
    );
  }

  return(
    <div>
    <p className={className}>{minutes}:{second}</p>
    </div>
  ); 
}
