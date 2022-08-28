import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [titulo, setTitle] = useState("");
  const value = useContext(TaskContext);
  const { createTask } = useContext(TaskContext);
  //console.log(valor)
  //console.log(value)

  const handleSubmit = (e) => {
    e.preventDefault(); // desactiva la recarga
    createTask({
      titulo,
    });
    /* const newtask = {
      titulo,
      id: 4
    } */
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">

      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4">
        <h1 className="text-2xl text-white mb-3">Crear Tarea</h1>
        <input
          placeholder="ponte"
          onChange={(e) => setTitle(e.target.value)}
          value={titulo}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <button className=" bg-indigo-400 px-2 px-1  text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
