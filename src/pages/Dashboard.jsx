import { useState, useEffect } from "react";
import { Card } from '../components/Card.jsx'

export function Dashboard({ user }) {
  
  return(
    <>
  <div className="text-roboto-flex bg-ctp-base min-h-screen flex flex-col justify-center items-center"> 
    <h1 className="text-8xl font-extrabold -mt-20 bg-gradient-to-l from-ctp-green to-ctp-blue-400 bg-linear bg-clip-text text-transparent">
      Turn Your</h1> 
    <h1 className="text-8xl font-bold bg-gradient-to-l from-ctp-green to-ctp-blue-400 bg-linear bg-clip-text text-transparent">
      Dreams to Reality</h1>
    <p className="text-ctp-text text-3xl font-medium mt-5">Everything you need to know before get into your dream college</p>
    <a href="#link">
    <button type="button" className="text-xl font-medium bg-gradient-to-r from-ctp-green to-ctp-green hover:to-ctp-blue px-5 py-3 rounded mt-5 cursor-pointer duration-300 transition ease-in-out hover:scale-105">
      Get Started
    </button>
    </a>
  </div>
      <section id="link" className="min-h-screen bg-ctp-base flex flex-col gap-5 justify-center items-center">
        <Card link={'course'} title={'UTBK Course'} description={'This course covers all you need to know to answer all UTBK\'s questions correctly.'} />
        <Card link={'practice'} title={'Learn by Practice'} description={'Knowledge is of no value unless you put into practice.'} />
        <Card link={'pomodoro'} title={'Pomodoro'} description={'Start doing now. One page with customizable timer and organize your tasks with todo list.'} />
      </section>
  </>
  );
}
