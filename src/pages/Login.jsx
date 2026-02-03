import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient.js';
import { useNavigate } from 'react-router-dom';

export function Login({ setUser, setName, setCorrect, setIncorrect }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loginName, setLoginName] = useState('');
  const navigate = useNavigate();

  async function getData(e){
    e.preventDefault();
    if(!loginName){
      return alert('Please enter your name');
    }

    setIsLoading(true);
    const { data, error } = await supabase.from('user').select('*').eq('name', name).single();

    if (data){
      console.log(data)
    } else {
      const { data, error } = await supabase.from('user').insert({name: name}).select().single();
      console.log(data)
      if(error){
        return console.log(error);
      }

      console.log('new user created')
    }

    let userId = data.id;
    let correct = data.correct;
    let incorrect = data.incorrect;

    setUser(userId);
    setName(loginName);
    setCorrect(correct);
    setIncorrect(incorrect);

    navigate('/home');

  }

  return(
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-ctp-base ">
      <h1 className="text-4xl font-bold text-ctp-blue -mt-40">Login Sek</h1>
      <form onSubmit={getData} className="flex flex-col gap-5 w-80 mt-10 text-poppins ">
          <label htmlFor="name" className="text-ctp-text font-medium text-xl">Name</label>
          <input type="text" name="name" placeholder="Your name" onChange={(e) => setLoginName(e.target.value)}
          className="-mt-3 text-xl bg-ctp-text text-ctp-base py-2 pl-2 focus:outline-none placeholder:text-base  rounded" />
          <button type="submit"  className="p-2 text-xl bg-ctp-lavender cursor-pointer hover:bg-ctp-blue rounded">
          {isLoading ? <span>Loading...</span> : <span>Login</span>}</button>
      </form>
    </div>
  );
}
