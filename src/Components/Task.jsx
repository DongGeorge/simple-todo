import Icon from "@mdi/react"
import { useState } from "react";
import { mdiCheckboxBlankCircleOutline } from "@mdi/js"
import { mdiCheckboxMarkedCircle } from '@mdi/js';
import './Task.css'

export default function Task(props) {
	const [completed, setCompleted] = useState(false)
	const crossOut = completed ? "line-through" : null
	const styling = {
		"display": "flex",
		"align-items": "center",
		"gap": '10px'
	}

	function deleteTask() {
		if (confirm('Are you sure you want to remove this task?')) {
			props.setTasks(prev => [...prev].filter(task => task !== props.content))
		}
	}

	return (
		<>
			<div className="taskItem">
				<div style={styling} onClick={() => setCompleted(prev => !prev)}>
					<Icon 
						path={completed ? mdiCheckboxMarkedCircle : mdiCheckboxBlankCircleOutline}
						size={1}
					/>

					<p style={{'width': '300px', "text-decoration-line": crossOut}}>{props.content}</p>
				</div>

				<button onClick={deleteTask}>Delete</button>
			</div>
		</>
	)
}