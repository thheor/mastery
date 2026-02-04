import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Settings } from './settings/Settings.jsx';
import { Tasks } from './tasks/Tasks.jsx'
import { TimerDisplay } from '../components/TimerDisplay.jsx';
import { Icon } from '../components/Icon.jsx';

export function Pomodoro({user}) {
  const [data, setData] = useState({
    focusMin: 20,
    focusSec: 0,
    breakMin: 5,
    breakSec: 0,
    autoResume: false,
  })
  const [isRunning, setIsRunning] = useState(false);
  const [elapsetime, setElapsetime] = useState(data.focusMin * 60 + data.focusSec );
  const [isFocus, setIsFocus] = useState(true);
  const [isSetting, setIsSetting] = useState(false);
  
  const focusTime = data.focusMin * 60 + data.focusSec % 60;
  const breakTime = data.breakMin * 60 + data.breakSec % 60;

  useEffect(() => {
    let timer;

    if(isRunning){
      timer = setInterval(() => {
        console.log(timer)
        return setElapsetime(elapsetime - 1);
      }, 1000);
    }

    if(elapsetime === 0 && isRunning){
      forward();
    }

    return () => clearInterval(timer);
  }, [isRunning, elapsetime])
  
  useEffect(() => {
    setElapsetime(() => {
      return isFocus ? focusTime : breakTime;
    })
    
  }, [data])

  const toggle = () => {
    setIsRunning(!isRunning);
  }

  const reset = () => {
    setIsRunning(data.autoResume);
    setElapsetime(isFocus ? focusTime : breakTime);

  }

  const forward = () => {
    setIsRunning(data.autoResume);
    setElapsetime(isFocus ? breakTime : focusTime);
    setIsFocus(!isFocus);
  }

  const setting = () => {
    setIsSetting(true);
  }

  function updateData(name, value){
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCloseSetting = (e) => {
    e.preventDefault();
    setIsSetting(false);
  }

  return(
  <div className="min-h-screen bg-ctp-base font-roboto-flex flex flex-col justify-center items-center overflow-x-hidden">
      <div className="flex flex-row items-center justify-between mt-20 px-1 pr-2 border border-ctp-lavender rounded-xl">
      {isFocus ? 
        <>
        <Icon type="outline" name="AcademicCapIcon"
        className="size-10 p-1 text-ctp-lavender"/><p className="text-xl text-ctp-lavender font-roboto-flex font-medium">Focus</p>
        </> :
        <>
        <Icon type="outline" name="RocketLaunchIcon"
        className="size-10 p-1.5 text-ctp-lavender"/><p className="text-xl text-ctp-lavender font-roboto-flex font-medium">Break</p>
        </>
      }
        </div>
    <TimerDisplay time={elapsetime}
    className="text-[300px] text-ctp-text font-roboto-flex font-bold -mt-20" />
    <div className="flex flex-row justify-between items-center gap-5 -mt-20">
      {isRunning ?
          <>
          <button type="button" onClick={reset} className="flex justify-center items-center bg-ctp-blue transition duration-200 ease-in-out cursor-pointer hover:bg-ctp-green rounded-xl">
          <Icon type="solid" name="ArrowPathIcon" className="size-15 md:size-20 p-3 md:p-3 text-ctp-crust" />
          </button>
          <button type="button" onClick={toggle} className="flex justify-center items-center bg-ctp-blue text-ctp-crust transition duration-200 ease-in-out cursor-pointer hover:bg-ctp-green rounded-xl">
          <Icon type="solid" name="PauseIcon" className="size-15 md:size-20 p-2 md:p-3 text-ctp-crust" />
          </button>
          <button type="button" onClick={forward} className="flex justify-center items-center bg-ctp-blue text-ctp-crust transition duration-200 ease-in-out cursor-pointer hover:bg-ctp-green rounded-xl">
          <Icon type="solid" name="ForwardIcon" className="size-15 md:size-20 p-2 md:p-3 text-ctp-crust" />
          </button>
          </>
        :
          <>
          <button type="button" onClick={setting} className="flex justify-center items-center bg-ctp-blue text-ctp-crust transition duration-200 ease-in-out cursor-pointer hover:bg-ctp-green rounded-xl">
          <Icon type="solid" name="EllipsisHorizontalIcon" className="size-15 md:size-20 p-1 md:p-3 text-ctp-crust" />
          </button>
          <button type="button" onClick={toggle} className="flex justify-center items-center bg-ctp-blue text-ctp-crust transition duration-200 ease-in-out cursor-pointer hover:bg-ctp-green rounded-xl">
          <Icon type="solid" name="PlayIcon" className="size-15 md:size-20 p-2 md:p-3 text-ctp-crust" />
          </button>
          <button type="button" onClick={forward} className="flex justify-center items-center bg-ctp-blue text-ctp-crust transition duration-200 ease-in-out cursor-pointer hover:bg-ctp-green rounded-xl">
          <Icon type="solid" name="ForwardIcon" className="size-15 md:size-20 p-2 md:p-3 text-ctp-crust" />
          </button>
          </>
      }
      <Settings isSetting={isSetting} data={data} updateData={updateData} closeSetting={handleCloseSetting} />
    </div>
    <Tasks user={user} />
  </div>
  );
}
