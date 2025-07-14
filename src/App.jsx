import { useState } from 'react'
import Task from './Components/Task'
import { mdiPlusCircle } from '@mdi/js'
import Icon from '@mdi/react'

function App() {
  const addButtonStyle = {
    "display": "flex",
    "align-items": "center",
    'height': '60px',
    'gap': '10px'
  }

  const inputStyle = {
    'height':'60%',
    'width': '200px'
  }

  const [tasks, setTasks] = useState(['Drink water', 'Stand up'])

  function addToList(formData) {
    const newTask = formData.get('task')
    if (newTask && !tasks.includes(newTask)) {
      setTasks(prev => [...prev, newTask])
    }
  }

  const taskElements = tasks.map(task => <Task content={task} setTasks={setTasks}></Task>)

  return (
    <>
      <form style={addButtonStyle} action={addToList}>
        <input type="text" name='task' style={inputStyle}/>
        <button style={addButtonStyle}>
          <Icon path={mdiPlusCircle} size={1}></Icon>
          <p>Add Task</p>
        </button>
      </form>

      {
        taskElements
      }
    </>
  )
}

export default App
