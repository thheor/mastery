import { useState, useEffect, useRef } from "react";
import data from "../../data/english.json"; 
import { CreateQuestion } from '../../components/CreateQuestion.jsx';
import { InputField } from '../../components/InputField.jsx';
import reactStringReplace from "react-string-replace";
import { useFloatingPanel } from "../../hooks/utils.js";
import { supabase } from "../../supabaseClient.js";

export function English({user}) {
  const [questionIndex, setQuestionIndex] = useState(() => {
    const index = Math.floor(Math.random() * 36); 
    return index;
  });
  const [instruction, setInstruction] = useState(() => {
    return data[questionIndex].instruction;
  });
  const [question, setQuestion] = useState(() => {
    return data[questionIndex].question;
  });
  const [answerKey, setAnswerKey] = useState(() => {
    return data[questionIndex].answer;
  })
  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef();

  useFloatingPanel(panelRef, () => setIsPanelOpen(false));

  useEffect(() => {
    if(!isPanelOpen){
      setUp();
      nextQuestion();
    }
    
  }, [isPanelOpen])

  function nextQuestion(){
    setNumber(prev => prev + 1);
  }

  function normalization(str) {
    return str.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
  }

  function checkAnswer(){
    let key = normalization(answerKey);
    key = key.split("_");
    const ans = normalization(answer);
    // not using (.) or any tanda baca in the end of the line
    // typo max 1 per word

    if(ans === key[0] || ans === key[1]){
      setCorrect(prev => prev + 1);
      const handleDB = async (user) => {
        const { error } = await supabase.rpc('addcorrect', {user_id: user});
        if(error) console.log(error)
      }
      console.log(user)
      handleDB(user);
      setIsCorrect(true);
    } else {
      setIncorrect(prev => prev + 1);
      setIsCorrect(false);
    }

  }

  function handleSubmit(e){
    e.preventDefault();
    if(answer === ''){
      return;
    }
    checkAnswer();
    setIsPanelOpen(true);
    setAnswer('');
  }
  
  function setUp(){
    let index = Math.floor(Math.random() * 36);
    setQuestionIndex(prev => prev === index ? Math.floor(Math.random() * 36) : index);
    setQuestion(data[questionIndex].question)
    setInstruction(data[questionIndex].instruction);
    setAnswerKey(data[questionIndex].answer);
  }
  
  return(
  <div className="min-h-screen bg-ctp-base font-poppins text-ctp-text flex flex-col items-center">
    <h1 className="mt-30 text-4xl font-semibold">English Grammar</h1>
      <div className="flex gap-5 mt-5">
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center bg-ctp-blue text-ctp-base font-semibold rounded-xl w-18 md:w-20 h-18 md:h-20 text-5xl">{correct}</div>
          <p className="text-xl font-semibold ">correct</p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center bg-ctp-blue text-ctp-base font-semibold rounded-xl w-18 md:w-20 h-18 md:h-20 text-5xl">{incorrect}</div>
          <p className="text-xl font-semibold ">incorrect</p>
        </div>
      </div>
    <div className={`mt-10 w-80 sm:w-100 md:w-160 lg:w-200 `}>
      <p className="text-4xl font-medium">Soal {number}</p>
      <h1 className="text-ctp-text text-2xl font-semibold">{instruction}</h1>
      <CreateQuestion question={question} keyword="[blank]" handleSubmit={handleSubmit} setAnswer={setAnswer} answer={answer} />
      <InputField instruction={instruction} setAnswer={setAnswer} answer={answer} handleSubmit={handleSubmit} />
    </div>
    {isPanelOpen && 
    <div ref={panelRef} className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] ">
      <div className="bg-ctp-lavender w-60 sm:w-100 min-h-30 rounded-xl border-2 border-ctp-crust">
        <p className={`text-center text-2xl ${isCorrect ? 'text-green-600' : 'text-red-500'} font-poppins font-semibold text-ctp-crust mt-2`}>
          {isCorrect ? 'Correct' : 'Wrong'}
        </p>
        <p className="text-start px-2 sm:ml-6 text-base md:text-lg font-poppins font-normal  text-ctp-crust ">The Correct Answer is</p>
        <p className="text-start px-2 sm:px-8 pb-4 text-center text-xl md:text-2xl font-poppins font-medium text-ctp-crust ">{answerKey.replace("_", " OR ")
        }</p>
      </div>
      <div className="flex justify-center">
        <p className="bg-ctp-lavender mt-2 rounded-xl border-2 border-ctp-crust px-2 text-sm font-poppins text-center font-normal  text-ctp-crust ">Click everywhere to continue...</p>
      </div>
    </div>}
  </div>
  );
}
