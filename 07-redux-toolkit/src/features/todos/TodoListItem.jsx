import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

const TodoListItem = ({ todo }) => {
	return (
		<ListGroup.Item>
			<div className="d-flex justify-content-between">
				<span className="todo-title">{todo.title}</span>
				<div className="todo-actions">
					<Button variant="primary" onClick={() => {}}>Toggle</Button>
					<Button variant="danger" onClick={() => {}}>Delete</Button>
				</div>
			</div>
		</ListGroup.Item>
	)
}

export default TodoListItem
