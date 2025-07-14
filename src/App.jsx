import { useState } from 'react'
import Task from './Components/Task'
import { mdiPlusCircle } from '@mdi/js'
import Icon from '@mdi/react'

function App() {
  const addButtonStyle = {
    "display": "flex",
    "align-items": "center"
  }
  return (
    <>
      <div>
        <button style={addButtonStyle}>
          <Icon path={mdiPlusCircle} size={1}></Icon>
          <p style={{"margin-left": "10px"}}>Add Task</p>
        </button>
      </div>
    </>
  )
}

export default App
