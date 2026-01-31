import {  } from "";

function ShowTasks({tasks, setInput}){
    if (tasks.length === 0) {
      return(
        <form className="flex justify-center items-center gap-2 mt-5">
          <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Add new task..."
          className="focus:outline-none bg-ctp-lavender text-ctp-base p-2 w-100 h-10 rounded" />
          <button type="submit" className="bg-ctp-lavender h-10 rounded p-2 hover:bg-ctp-blue cursor-pointer">Add task</button>
        </form>
      );
    } else {
      return (<ul>
      tasks.map(item => (
        <li>{item.title}</li>
      ))
      </ul>);
    }
  }
