import { useState } from "react";
import { Icon } from '../components/Icon.jsx';

export function Profile({user, name, correct, incorrect}) {
  console.log(incorrect)
  console.log(correct)
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-ctp-base">
      <div className="mt-20">
        <Icon name="UserIcon" className="size-20 mx-auto text-ctp-text" />
        <h1 className="text-5xl text-ctp-text mt-5">{name}</h1>
        <p className="text-5xl text-ctp-text mt-5">correct: {correct}</p>
        <p className="text-5xl text-ctp-text mt-5">incorrect: {incorrect}</p>
      </div>
    </div>
  );
}
