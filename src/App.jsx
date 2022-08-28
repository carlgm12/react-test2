import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  //const [tasks, setTasks] = useState([]);

  return (
    <main className='bg-zinc 900 h-screen'>
      <div className='container mx-auto bg-slate-200'>
        <TaskForm/>
        <TaskList/>
      </div>      
    </main>
  )
}

export default App