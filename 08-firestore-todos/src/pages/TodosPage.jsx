import React from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreateNewTodoForm from '../components/CreateNewTodoForm'
import useGetTodos from '../hooks/useGetTodos'
import { firebaseTimestampToString } from '../helpers/time'

const TodosPage = () => {
	const { data, loading } = useGetTodos()
	console.log(data)

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Todos</h1>
			</div>

			{loading && <p>Loading...</p>}

			{data && <>
				{data.length
					?
						<ListGroup>
							{data.map((todo, index) => {
								const timestamp = firebaseTimestampToString(todo.timestamp)
								const statusClass = todo.completed ? 'completed' : 'not-completed'

								return (
									<ListGroup.Item as={Link} action to={`/todos/${todo.id}`} className={`${statusClass} d-flex justify-content-between align-items-center`} key={index}>
										<span>{todo.title}</span>
										<div className="timestamp">
											{timestamp ?? '-'}
										</div>
									</ListGroup.Item>
								)
							})}
						</ListGroup>
					: <p>Yay, you have NO todos 🥳!</p>
				}
			</>}

			<hr className="my-4" />

			<h2>Got moar to do? 😭</h2>
			<CreateNewTodoForm />

		</Container>
	)
}

export default TodosPage
