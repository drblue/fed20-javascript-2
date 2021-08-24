import React, { useState } from 'react'
import './App.scss'

function App() {
	const [count, setCount] = useState(42)

	const decreaseCount = () => {
		setCount(prevCount => prevCount - 1)
		setCount(prevCount => prevCount - 1)
	}

	const increaseCount = () => {
		setCount(prevCount => prevCount + 1)
		setCount(prevCount => prevCount + 1)
	}

	console.log("App component re-rendered")

	return (
		<div className="App">
			<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

			<div>
				<button onClick={decreaseCount}>-</button>
				<span>{count}</span>
				<button onClick={increaseCount}>+</button>
			</div>
		</div>
	)
}

export default App
