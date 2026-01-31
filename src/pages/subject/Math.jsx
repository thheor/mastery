import { useState } from "react";
import { data } from "../../data/math.json"; 

export function Math({user}) {
  const [current, setCurrent] = useState(0);
  
  return(
  <div className="min-h-screen bg-ctp-base font-poppins text-ctp-text flex flex-col items-center">
    <h1 className="mt-30 text-4xl font-semibold">Pengetahuan Kuantitatif</h1>
    <div className="mt-10 w-200 ">
      <p className="text-2xl font-medium">Soal {current}</p>
      <div className="flex">
        <p className="text-xl ">Apakah bumi itu bulat?</p>
        <input type="text" name="answer" className="px-2 text-lg bg-ctp-text text-ctp-base focus:outline-none ml-2 rounded" />
      </div>
    </div>
  </div>
  );
}

