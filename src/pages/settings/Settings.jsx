import { useState, useEffect } from 'react'
import { Icon } from '../../components/Icon.jsx'

export function Settings({ data, updateData, isSetting, closeSetting }) {
  const [isAutoResume, setIsAutoResume] = useState(false);

  useEffect(() => {
    updateData('autoResume', isAutoResume)

  }, [isAutoResume])

  const handleChange = (e) => {
    const {name, value} = e.target;
    updateData(name, value);
  }

  const handleAutoResume = (e) => {
    e.preventDefault();
    setIsAutoResume(!isAutoResume);
  }
  
  return (
    <div className={`${isSetting ? '' : 'hidden' }
    absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform w-90 h-60 rounded-xl border 
    border-ctp-lavender bg-ctp-mantle/95 flex justify-center items-center font-poppins text-ctp-text `}>
      <button onClick={closeSetting}
      className="absolute top-3 right-3">
      <Icon name="XMarkIcon"  
      className="size-7 border p-1 bg-center text-ctp-lavender rounded-full hover:border-ctp-lavender hover:text-ctp-base hover:bg-ctp-lavender" />
      </button>
      <form className="flex flex-col gap-2">
        <h1 className="text-xl">Focus Time</h1>
        <div className="flex justify-between gap-5">
          <label htmlFor="focusMin">Minutes</label>
          <input type="number" name="focusMin" defaultValue={data.focusMin} max={30} min={0} onChange={handleChange}
          className="w-12 bg-ctp-lavender rounded text-ctp-base px-1 py-[0.5px]" />
          <label htmlFor="focusSec">Seconds</label>
          <input type="number" name="focusSec" defaultValue={data.focusSec} max={59} min={0} onChange={handleChange}
          className="w-12 bg-ctp-lavender rounded text-ctp-base px-1 py-[0.5px]" />
        </div>
        <h1 className="text-xl">Break Time</h1>
        <div className="flex justify-between">
        <label htmlFor="breakMin">Minutes</label>
        <input type="number" name="breakMin" defaultValue={data.breakMin} max={15} min={5} onChange={handleChange}
          className="w-12 bg-ctp-lavender rounded text-ctp-base px-1 py-[0.5px]" />
        <label htmlFor="breakSec">Seconds</label>
        <input type="number" name="breakSec" defaultValue={data.breakSec} max={59} min={0} onChange={handleChange}
          className="w-12 bg-ctp-lavender rounded text-ctp-base px-1 py-[0.5px]" />
        </div>
        <div>
        <div className="flex justify-between mt-1">
          <label htmlFor="autoResume">Auto resume</label>
          <button type="button" role="switch" onClick={handleAutoResume}
          className={`relative w-10 h-5 rounded-full outline transition
            ${isAutoResume
              ? 'bg-ctp-lavender outline-[#313244] ring-[#313244]'
              : 'bg-neutral-quaternary '
              }
              focus:outline-none focus:ring-1 outline-ctp-lavender ring-ctp-lavender`}>
          <span className={`bg-ctp-base absolute top-[2px] left-[2px] h-4 w-4 rounded-full transition-transform
            ${isAutoResume ? 'translate-x-5 ' : 'bg-ctp-lavender translate-x-0 '}`}/>
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}
