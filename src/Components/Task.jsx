import Icon from "@mdi/react"
import { useState } from "react";
import { mdiCheckboxBlankCircleOutline } from "@mdi/js"
import { mdiCheckboxMarkedCircle } from '@mdi/js';

export default function Task(props) {
	const [completed, setCompleted] = useState(false)
	const crossOut = completed ? "line-through" : null
	const styling = {
		"display": "flex",
		"align-items": "center",
		"text-decoration-line": crossOut
	}

	return (
		<>
			<div style={styling} onClick={() => setCompleted(prev => !prev)}>
				{
					completed ?
					<Icon path={mdiCheckboxMarkedCircle} size={1}/>
					:
					<Icon path={mdiCheckboxBlankCircleOutline} size={1}/>
				}

				<p>HI</p>

				<button>Delete</button>
			</div>
		</>
	)
}