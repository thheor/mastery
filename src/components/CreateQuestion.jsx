import reactStringReplace from "react-string-replace";

export function CreateQuestion({question, keyword, handleSubmit, setAnswer, answer}){

  function submit(e){
    e.preventDefault();
    handleSubmit(e);
    setAnswer('');
  }

  if(!question.includes(keyword)){
    return(
      <div className="mt-5 font-normal font-poppins text-2xl">
        <p>{question}</p>
      </div>
    )
  }

  return(
    <div className="">
      {/*{parts.map((part, index) => (
          //<p key={index}>
          {part}
          {index !== parts.length - 1 && (
          <input  type="text" className="text-ctp-base text-xl px-2 w-30 bg-ctp-text focus:outline-none rounded" />
          )}</p>
        ))}*/}
      <form  onSubmit={submit} className="mt-5 font-poppins font-normal text-2xl">
      {reactStringReplace(question, keyword, (i) => (
          <input key={i} type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="text-ctp-base text-xl px-2 w-30 bg-ctp-text focus:outline-none rounded" />
      ))}
      </form>
    </div>
  );
}
