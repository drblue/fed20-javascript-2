import React from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useGetTodos from '../hooks/useGetTodos'

const TodosPage = () => {
	const { loading, todos } = useGetTodos()

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Todos</h1>
				<Button onClick={() => {}}>Refresh</Button>
			</div>

			{loading && <p>Loading...</p>}

			{todos && <>
				{todos.length
					?
						<ListGroup>
							{todos.map((todo, index) => (
								<ListGroup.Item as={Link} action to={`/todos/${todo.id}`} key={index}>
									{todo.title}
								</ListGroup.Item>
							))}
						</ListGroup>
					: <p>Yay, you have NO todos 🥳!</p>
				}
			</>}

		</Container>
	)
}

export default TodosPage
