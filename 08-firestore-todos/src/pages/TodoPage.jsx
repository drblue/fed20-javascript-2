import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import useGetTodo from '../hooks/useGetTodo'
import { db } from '../firebase'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

const TodoPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { getData, loading, data: todo } = useGetTodo(id)

	const deleteTodo = async () => {
		const ref = doc(db, 'todos', id)
		await deleteDoc(ref)

		// redirect user to todos list
		navigate('/todos', { replace: true })
	}

	const toggleTodo = async () => {
		const ref = doc(db, 'todos', id)
		await updateDoc(ref, {
			completed: !todo.completed,
		})

		getData()
	}

	return (
		<Container className="py-3">

			{loading && <p>Loading...</p>}

			{todo && <>
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h1>{todo.title}</h1>

					<Button onClick={getData}>Refresh</Button>
				</div>

				<p className="display-1">
					{todo.completed ? '🥳' : '🥵'}
				</p>

				<ButtonGroup className="todo-actions">
					<Button variant="primary" onClick={toggleTodo}>Toggle</Button>
					<Button variant="danger" onClick={deleteTodo}>Delete</Button>
				</ButtonGroup>
			</>}
		</Container>
	)
}

export default TodoPage
