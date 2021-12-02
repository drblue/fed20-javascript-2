import React, { useEffect, useState } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const TodosPage = () => {
	const [todos, setTodos] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(async () => {
		// get reference to collection 'todos'
		const ref = collection(db, 'todos')
		const snapshot = await getDocs(ref)

		// console.log("got that snapshot 📸", snapshot)
		const data = snapshot.docs.map(doc => {
			return {
				id: doc.id,
				...doc.data() // title, completed
			}
		})

		console.log(data)
		setTodos(data)
		setLoading(false)
	}, [])

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
								<ListGroup.Item action href={`/todos/${todo.id}`} key={index}>
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
