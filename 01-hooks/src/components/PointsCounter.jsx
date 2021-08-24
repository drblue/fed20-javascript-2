import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const PointsCounter = () => {
	const [points, setPoints] = useState(0)

	const decreasePoints = () => {
		setPoints(prevPoints => prevPoints - 1)
	}

	const increasePoints = () => {
		setPoints(prevPoints => prevPoints + 1)
	}

	return (
		<div className="d-flex">
			<Button variant="warning" onClick={decreasePoints}>-</Button>

			<span className="points">{points}</span>

			<Button variant="success" onClick={increasePoints}>+</Button>
		</div>
	)
}

export default PointsCounter;
