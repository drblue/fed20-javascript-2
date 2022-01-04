import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TodoList = ({ todos, onToggleTodo }) => {
	return (
		<>
			<ListGroup role="list">
				{todos.map(todo => {
					const statusClass = todo.completed ? 'completed' : 'not-completed'

					return (
						<ListGroup.Item
							action
							onClick={() => { onToggleTodo(todo) }}
							className={`${statusClass} d-flex justify-content-between align-items-center`}
							key={todo.id}
							role="listitem"
						>
							<span>{todo.title}</span>
						</ListGroup.Item>
					)
				})}
			</ListGroup>
		</>
	)
}

export default TodoList
