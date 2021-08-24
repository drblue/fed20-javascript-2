import React, { useState } from 'react'
import './App.scss'

function App() {
	const [homePoints, setHomePoints] = useState(0)
	const [awayPoints, setAwayPoints] = useState(0)

	const decreaseHomePoints = () => {
		setHomePoints(prevPoints => prevPoints - 1)
	}

	const increaseHomePoints = () => {
		setHomePoints(prevPoints => prevPoints + 1)
	}

	const decreaseAwayPoints = () => {
		setAwayPoints(prevPoints => prevPoints - 1)
	}

	const increaseAwayPoints = () => {
		setAwayPoints(prevPoints => prevPoints + 1)
	}

	console.log("App component re-rendered")

	return (
		<div className="App">
			<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

			<div>
				<h2>Home</h2>
				<button onClick={decreaseHomePoints}>-</button>
				<span>{homePoints}</span>
				<button onClick={increaseHomePoints}>+</button>
			</div>

			<div>
				<h2>Away</h2>
				<button onClick={decreaseAwayPoints}>-</button>
				<span>{awayPoints}</span>
				<button onClick={increaseAwayPoints}>+</button>
			</div>
		</div>
	)
}

export default App
