import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

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
			<Container>
				<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

				<div className="my-3">
					<h2>Home</h2>

					<div className="d-flex">
						<Button variant="warning" onClick={decreaseHomePoints}>-</Button>
						<span className="points">{homePoints}</span>
						<Button variant="success" onClick={increaseHomePoints}>+</Button>
					</div>
				</div>

				<div className="my-3">
					<h2>Away</h2>

					<div className="d-flex">
						<Button onClick={decreaseAwayPoints}>-</Button>
						<span className="points">{awayPoints}</span>
						<Button onClick={increaseAwayPoints}>+</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default App
