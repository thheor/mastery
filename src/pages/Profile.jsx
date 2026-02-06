import { useState, useEffect } from "react";
import { Icon } from '../components/Icon.jsx';
import { ToLogin } from '../components/ToLogin.jsx';
import { supabase } from '../supabaseClient.js';

export function Profile({user, name}) {
  const [correct, setCorrect] = useState('loading');
  const [incorrect, setIncorrect] = useState('loading');

  useEffect(() => {
    if(user){
      getCorrect(user);
    }

  }, [])

  const getCorrect = async (user) => {
    const { data, error } = await supabase.from("user").select("*").eq("id", user).single();

    if(error){
      console.log(error);
    } else {
      setCorrect(data.correct);
      setIncorrect(data.incorrect);
    }
  }
  
  return (
    <>
    {user && <div className="min-h-screen flex flex-col items-center bg-ctp-base">
      <div className="mt-20">
        <Icon name="UserIcon" className="size-20 mx-auto text-ctp-text" />
          <table className="text-lg sm:text-2xl w-40 sm:w-60 text-ctp-text mt-10">
            <tbody>
            <tr>
              <td className="w-40">Name</td>
              <td className="w-10">:</td>
              <td className="">{name}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>Correct</td>
              <td>:</td>
              <td>{correct}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>Incorrect</td>
              <td>:</td>
              <td>{incorrect}</td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>} 
    {!user && <ToLogin title="Login to see your profile" className="min-h-screen bg-ctp-base flex flex-col justify-center items-center" />}
    </>
  );
}
