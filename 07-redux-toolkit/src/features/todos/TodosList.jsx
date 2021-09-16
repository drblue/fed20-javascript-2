import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TodoListItem from './TodoListItem'

const TodosList = ({ todos }) => {
	return (
		<ListGroup>
			{todos.map((todo, index) => (
				<TodoListItem todo={todo} key={index} />
			))}
		</ListGroup>
	)
}

export default TodosList
