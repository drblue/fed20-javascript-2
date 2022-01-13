import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { Todo } from '../shared/interfaces'
import { v4 as uuid } from 'uuid'

interface Props {
	onNewTodo: (todo: Todo) => void
}

const AddTodoForm: React.FC<Props> = ({ onNewTodo }) => {
	const inputTitle = useRef<HTMLInputElement>(null)

	const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()

		if (!inputTitle.current?.value.length) {
			return
		}

		// make todo, plz
		const todo: Todo = {
			id: uuid(),
			title: inputTitle.current.value,
			completed: false,
		}

		// pass `todo` to parent handler via props
		await onNewTodo(todo)

		// clear input field
		inputTitle.current.value = ''
	}

	return (
		<Form onSubmit={handleFormSubmit}>
			<InputGroup className="mb-3">
				<FormControl
					type="text"
					ref={inputTitle}
					placeholder="Enter the new todo here..."
					aria-label="New todo title"
					required
				/>
				<Button type="submit" variant="success">Add</Button>
			</InputGroup>
		</Form>
	)
}

export default AddTodoForm
