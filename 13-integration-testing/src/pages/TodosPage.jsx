import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AddTodoForm from '../components/AddTodoForm'
import TodoCounter from '../components/TodoCounter'
import TodoList from '../components/TodoList'

const initialTodos = [
	// {"id": "e154b842-7d4a-4218-8ef3-c1eeb9ebcbda", "title": "Todo 1", "completed": false},
	// {"id": "58969d9d-be66-4cdc-b3e9-dfaaf73b8b77", "title": "Todo 2", "completed": true},
	// {"id": "c022c0f7-6c7a-492c-aeb9-e1f0d4a90bb7", "title": "Todo 3", "completed": false}
]

const TodosPage = () => {
	const [todos, setTodos] = useState(initialTodos)

	const handleNewTodo = (todo) => {
		setTodos([...todos, todo])
	}

	const handleToggleTodo = (todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	return (
		<Container className="py-3">
			<h1>Todos</h1>

			<AddTodoForm onNewTodo={handleNewTodo} />
			<TodoList todos={todos} onToggleTodo={handleToggleTodo} />
			<TodoCounter count={todos.length} />
		</Container>
	)
}

export default TodosPage
