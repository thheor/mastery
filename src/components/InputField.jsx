
export function InputField({handleSubmit, instruction, setAnswer, answer}){

  const agreement = instruction.match('agree or disagree');
  if(agreement){
    return (
      <form onSubmit={handleSubmit} className="absolute bottom-80 flex gap-5 mt-10">
          <button type="submit" onClick={() => setAnswer("Yes")} className="text-ctp-base text-xl font-semibold bg-ctp-blue px-6 py-2 cursor-pointer rounded">Yes</button>
          <button type="submit" onClick={() => setAnswer("No")} className="text-ctp-base text-xl font-semibold bg-ctp-blue px-6 py-2 cursor-pointer rounded">No</button>
        </form>
      );
    }

  const correctSentence = instruction.match('errors in this sentence');
  if(correctSentence){
    return(
      <div className="mt-10">
        <h1 className="text-ctp-text font-semibold text-xl">Write the correct sentence:</h1>
        <form onSubmit={handleSubmit} className="">
          <input type="text" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Type your answer" 
            className="bg-ctp-text text-ctp-base mt-2 text-base md:text-xl p-1 md:p-2 w-60 md:w-80 focus:outline-none rounded" />
          <button type="submit" onClick={handleSubmit} 
            className="bg-ctp-lavender ml-2 md:ml-5 text-ctp-base text-sm md:text-base p-2 md:p-2 cursor-pointer rounded outline-none">Check</button>
        </form>
      </div>
    )
  }
}
