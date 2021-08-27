import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import useCounter from '../hooks/useCounter'

const PointsCounter = () => {
	const { counter, add, subtract } = useCounter(50)

	return (
		<div className="d-flex">
			<Button variant="warning" onClick={() => subtract()}>-</Button>

			<span className="points">{counter}</span>

			<Button variant="success" onClick={() => add()}>+</Button>
		</div>
	)
}

export default PointsCounter;
