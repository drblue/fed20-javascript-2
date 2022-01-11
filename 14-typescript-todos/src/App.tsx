import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Todos } from './shared/types'

const initialTodos: Todos = [
	// { id: 'e154b842-7d4a-4218-8ef3-c1eeb9ebcbda', title: 'Learn JavaScript', completed: true, desc: 'cutekitten.cat' },
	// { id: '58969d9d-be66-4cdc-b3e9-dfaaf73b8b77', title: 'Learn TypeScript', completed: false },
	// { id: 'c022c0f7-6c7a-492c-aeb9-e1f0d4a90bb7', title: 'Profit!', completed: false },
]

const App = () => {
	const [todos, setTodos] = useState(initialTodos)

	return (
		<Container id="App" className="py-3">
			<h1>Todos</h1>

			<ul>
				{todos.map(todo => (
					<li>
						{todo.title}
						{todo.desc}
					</li>
				))}
			</ul>
		</Container>
	)
}

export default App