import { useState, useEffect } from "react";
import { Card } from '../components/Card.jsx'

export function Dashboard({ user }) {
  
  return(
    <>
      {console.log(window.innerWidth)}
      <div className="text-roboto-flex bg-ctp-base min-h-screen flex flex-col justify-center items-center"> 
      <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl  font-extrabold -mt-20 bg-gradient-to-l from-ctp-green to-ctp-blue-400 bg-linear bg-clip-text text-transparent">
        Turn Your</h1> 
      <h1 className="text-6xl sm:text-6xl sm:hidden lg:text-8xl font-extrabold  bg-gradient-to-l from-ctp-green to-ctp-blue-400 bg-linear bg-clip-text text-transparent">
        Dreams</h1> 
      <h1 className="text-6xl sm:text-7xl lg:text-8xl  font-bold bg-gradient-to-l from-ctp-green to-ctp-blue-400 bg-linear bg-clip-text text-transparent">
       <span className="max-sm:hidden">Dreams</span> to Reality</h1>
      <p className="text-ctp-text max-sm:text-lg px-4 text-center sm:text-xl md:text-2xl lg:text-3xl font-medium mt-5">Everything you need to know before get into your dream college</p>
      <a href="#link">
        <button type="button"
          className="max-sm:text-lg text-lg font-medium bg-gradient-to-r from-ctp-green to-ctp-green focus:to-ctp-blue hover:to-ctp-blue max-sm:px-2 max-sm:py-1 sm:px-4 sm:py-2 md:px-4 lg:px-5 md:py-2 lg:py-3 rounded mt-5 cursor-pointer duration-300 transition ease-in-out hover:scale-105">
          Get Started
        </button>
      </a>
      </div>
      <section id="link" className="min-h-screen bg-ctp-base flex flex-col gap-5 justify-center items-center">
        <Card link={'card'} title={'Flashcards'} description={'This course covers the basic of knowledge'} />
        <Card link={'practice'} title={'Learn by Practice'} description={'Knowledge is of no value unless you put into practice.'} />
        <Card link={'pomodoro'} title={'Pomodoro'} description={'Start doing now. One page with customizable timer and organize your tasks with todo list.'} />
      </section>
  </>
  );
}
