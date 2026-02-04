import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient.js'
import { Icon } from '../../components/Icon.jsx'

export function Tasks({user}) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [desc, setDesc] = useState('');
  const [crudComplete, setCrudComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [createTask, setCreateTask] = useState(false);

  useEffect(() => {
    getTask();
    setCrudComplete(false);
  }, [crudComplete])

  async function getTask(){
    const {data, error} = await supabase.from('tasks').select('*').eq('user_id', user);
    setTasks(data);
    setLoading(false);
    console.log(data);
  }

  async function handleSubmit(e){
    e.preventDefault();

    const list = {user_id: user, title: input, ...(desc && {description: desc})};
    const {error} = await supabase.from('tasks').insert(list); 
    if(error){
      console.log(error);
      return
    }

    setCreateTask(false);
    setCrudComplete(true);
  }

  return(
    <div className="flex justify-center items-center mb-20">
      {loading ? <p className="text-ctp-text mt-5 text-2xl font-poppins font-semibold">Loading...</p> : 
      <div className="flex flex-col ">
      <h1 className="p-1 w-70 md:w-100 max-sm:mt-5 border-b border-ctp-text text-ctp-text text-xl md:text-2xl font-poppins">Tasks</h1>
      <ul className="mt-2">
        {tasks.map(item => {

          async function handleDone(e){
            e.preventDefault();
            const itemUpdate = item.isDone ? {isDone: false} : {isDone: true};
            const {data, error} = await supabase.from('tasks').update(itemUpdate).eq('id', item.id).select();
            if(error){
              console.log(error);
              return
            }
            setCrudComplete(true);
          }

          async function handleDelete(e){
            e.preventDefault();
            const {data, error} = await supabase.from('tasks').delete().eq('id', item.id).select();
            if(error){
              console.log(error)
            }
            setCrudComplete(true);
          }

          return (
            <li key={item.id} className={`${item.isDone ? 'brightness-60' : '' } relative flex flex-col bg-ctp-blue p-2 rounded my-2 `}>
              <button onClick={handleDone} className="absolute left-2 border rounded-full cursor-pointer hover:bg-ctp-lavender ">
              <Icon name="CheckIcon" className=" p-1 size-6 text-ctp-base" />
              </button>
              <p className={`${item.isDone ? 'line-through ' : '' } text-ctp-base ml-8 font-poppins font-medium text-base`}>{item.title}</p>
              {item.description && <p className={`${item.isDone ? 'hidden ' : '' } text-ctp-base bg-ctp-text p-1 ml-7 mr-7 font-poppins font-normal  text-sm md:text-base rounded `}>{item.description}</p>}
              <button onClick={handleDelete} className="absolute right-2 cursor-pointer hover:bg-ctp-lavender rounded-full">
              <Icon name="TrashIcon" />
              </button>
              </li>);})}
      </ul>
        <CreateTask setInput={setInput} setDesc={setDesc} handleSubmit={handleSubmit} createTask={createTask} setCreateTask={setCreateTask} />
        </div>}
    </div>
  );
}

function CreateTask({setInput, setDesc, handleSubmit, createTask, setCreateTask}){
    return(
    <>
      {createTask ? 
      <form onSubmit={handleSubmit} className="font-poppins flex flex-col justify-center gap-2 w-70 md:w-100 mb-20 bg-ctp-text rounded ">
        <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Add new task..."
        className="focus:outline-none mt-2 md:mt-5 mx-2 md:mx-auto font-semibold text-lg md:text-xl text-ctp-base/90 w-95 h-10 rounded" />
        <label htmlFor="description" className="text-sm md:text-base ml-2">Description (optional)</label>
        <textarea cols="30" onChange={(e) => setDesc(e.target.value)} placeholder="Add description..." 
        className="w-65 md:w-95 border border-ctp-base/80 mx-auto text-ctp-base p-2 font-normal text-sm md:text-base focus:outline-none rounded"></textarea>
        <button type="button" onClick={() => setCreateTask(false)} className="mx-auto border border-ctp-base/80 w-65 md:w-95 p-1 mt-2 cursor-pointer hover:bg-ctp-blue/30 rounded">Cancel</button>
        <button type="submit" className="mx-auto bg-ctp-blue/70 border border-ctp-base/80 rounded w-65 md:w-95 p-1 mb-2 hover:bg-ctp-blue cursor-pointer">Save</button>
      </form>
      : 
      <button type="button" onClick={() => setCreateTask(true)} className="bg-ctp-blue/50 hover:bg-ctp-blue/70 cursor-pointer text-base text-ctp-text border p-1 md:p-2 border-ctp-text border-dashed rounded ">Add task</button>
      }
    </>
    );
}

