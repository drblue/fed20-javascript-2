import React from 'react'
import Button from 'react-bootstrap/Button'

const ReducerContextCounter = () => {

	return (
		<div className="reducer-counter">
			<Button variant="warning" onClick={() => null}>-</Button>

			<span className="points">{null}</span>

			<Button variant="success" onClick={() => null}>+</Button>
		</div>
	)
}

export default ReducerContextCounter
