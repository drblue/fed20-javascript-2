import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import useCounter from '../hooks/useCounter'

const FiveCountsCounter = () => {
	const { counter, add } = useCounter(5)

	return (
		<div className="d-flex justify-content-center">
			<div className="points display-1" onClick={() => add(5)}>{counter}</div>
		</div>
	)
}

export default FiveCountsCounter;
