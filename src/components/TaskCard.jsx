import { useContext } from "react";
import {TaskContext} from '../context/TaskContext';

function TaskCard({task}) {
  
  const {deleteTask} = useContext(TaskContext);
  //console.log(valor)

  return  (
    <div className="bg-gray-800 text-white p-4 rounded-md">
          <h1 className="text-xl font-bold capitalize">{task.titulo}</h1>          
          <button 
          className=" bg-red-500 px-2 px-1 hover:bg-slate-400" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );    
}

export default TaskCard;