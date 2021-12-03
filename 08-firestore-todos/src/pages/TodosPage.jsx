import React from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreateNewTodoForm from '../components/CreateNewTodoForm'
import useGetTodos from '../hooks/useGetTodos'

const TodosPage = () => {
	const { getData, data, loading } = useGetTodos()

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Todos</h1>
				<Button onClick={() => { getData() }}>Refresh</Button>
			</div>

			{loading && <p>Loading...</p>}

			{data && <>
				{data.length
					?
						<ListGroup>
							{data.map((todo, index) => (
								<ListGroup.Item as={Link} action to={`/todos/${todo.id}`} key={index}>
									{todo.title}
								</ListGroup.Item>
							))}
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
