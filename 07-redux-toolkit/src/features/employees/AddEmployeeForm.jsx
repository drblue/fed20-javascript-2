import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddEmployeeForm = ({ onAddEmployee }) => {
	const [newEmployeeNameInput, setNewEmployeeNameInput] = useState("")

	const handleFormSubmit = (e) => {
		e.preventDefault()

		onAddEmployee(newEmployeeNameInput)

		setNewEmployeeNameInput("")
	}

	return (
		<Form onSubmit={handleFormSubmit}>
			<Form.Group className="mb-3" controlId="newEmployee" aria-label="New Employee Name">
				<Form.Control type="text" placeholder="Name of employee to add" onChange={(e) => setNewEmployeeNameInput(e.target.value)} value={newEmployeeNameInput} />
			</Form.Group>

			<Button variant="primary" type="submit" disabled={!newEmployeeNameInput}>
				Submit
			</Button>
		</Form>
	)
}

export default AddEmployeeForm
