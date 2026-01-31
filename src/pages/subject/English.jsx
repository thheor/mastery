import { useState, useEffect, useRef } from "react";
import data from "../../data/english.json"; 
import { CreateQuestion } from '../../components/CreateQuestion.jsx';
import { InputField } from '../../components/InputField.jsx';
import reactStringReplace from "react-string-replace";

export function English({user}) {
  const [questionIndex, setQuestionIndex] = useState(() => {
    const index = Math.floor(Math.random() * 17); 
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
  const [number, setNumber] = useState(1);
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    setUp();
    
  }, [])

  function nextQuestion(e){
    e.preventDefault();
    setNumber(prev => prev + 1);
    setUp();
  }

  function checkAnswer(){
    let key = answerKey?.split("//");

    if(answer === key[0] || answer === key[1]){
      setCorrect(prev => prev + 1);
    } else {
      setIncorrect(prev => prev + 1);
    }

  }

  function handleSubmit(e){
    e.preventDefault();
    checkAnswer();
    nextQuestion(e);
    setAnswer('');
  }
  
  function setUp(){
    let index = Math.floor(Math.random() * 17);
    setQuestionIndex(prev => prev === index ? Math.floor(Math.random() * 17) : index);
    setQuestion(data[questionIndex].question)
    setInstruction(data[questionIndex].instruction);
    setAnswerKey(data[questionIndex].answer);
  }
  
  return(
  <div className="min-h-screen bg-ctp-base font-poppins text-ctp-text flex flex-col items-center">
    <h1 className="mt-30 text-4xl font-semibold">English Grammar</h1>
      <div className="flex gap-5 mt-5">
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center bg-ctp-blue text-ctp-base font-semibold rounded-xl w-20 h-20 text-5xl">{correct}</div>
          <p className="text-xl font-semibold ">correct</p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center bg-ctp-blue text-ctp-base font-semibold rounded-xl w-20 h-20 text-5xl">{incorrect}</div>
          <p className="text-xl font-semibold ">incorrect</p>
        </div>
      </div>
    <div className="mt-10 w-80 sm:w-100 md:w-160 lg:w-200 ">
      <p className="text-4xl font-medium">Soal {number}</p>
      <h1 className="text-ctp-text text-2xl font-semibold">{instruction}</h1>
      <CreateQuestion question={question} keyword="[blank]" handleSubmit={handleSubmit} setAnswer={setAnswer} answer={answer} />
      <InputField instruction={instruction} setAnswer={setAnswer} answer={answer} handleSubmit={handleSubmit} />
    </div>
  </div>
  );
}
