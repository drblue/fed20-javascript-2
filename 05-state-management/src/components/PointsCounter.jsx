import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const PointsCounter = () => {
	const [points, setPoints] = useState(0)
	console.log("Points:", points)

	const modifyPoints = (amount) => {
		setPoints(prevPoints => prevPoints + amount)
	}

	console.log("Rendering...")

	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	// Class Lifecycle: componentDidMount
	useEffect(() => {
		console.log("I'm a newly mounted component 👶🏻")

		return () => {
			// Class Lifecycle: componentWillUnmount
			console.log("🧹 I'm being unmounted, cleaning up after myself")
		}
	}, [])

	// This will only be executed if `points` have changed,
	// and only AFTER the component has been rendered
	// Class Lifecycle: componentDidUpdate
	useEffect(() => {
		console.log(`Points have changed to ${points}`)
	}, [points])

	return (
		<div className="d-flex">
			<Button variant="warning" onClick={() => modifyPoints(-1)}>-</Button>

			<span className="points">{points}</span>

			<Button variant="success" onClick={() => modifyPoints(+1)}>+</Button>
		</div>
	)
}

export default PointsCounter;
