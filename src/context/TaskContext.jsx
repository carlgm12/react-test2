import { createContext, useState, useEffect } from "react";
import { tasks as data, tasks } from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //let x = 20;
  
  const [tasks, setTasks] = useState([]);

  function createTask(tasktitulo) {
    setTasks([...tasks, {
      titulo: tasktitulo.titulo,
      id: tasks.length
    }])
  }

  function deleteTask(tasksId) {
    //console.log(tasks)
    //console.log(tasksId)
    setTasks(tasks.filter(task => task.id !== tasksId))
  }

  useEffect(() => {
    setTasks(data)
  }, []);


  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>{props.children}</TaskContext.Provider>
  );
}
