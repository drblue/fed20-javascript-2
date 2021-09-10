import React, { useReducer, useState } from 'react'
import Button from 'react-bootstrap/Button'

const initialState = {
	count: 0,
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {
				count: state.count + 1
			}
		case 'decrement':
			return {
				count: state.count - 1
			}
		default:
			throw new Error('Unkown action type: ' + action.type)
	}
}

const ReducerCounter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className="d-flex">
			<Button variant="warning" onClick={() => dispatch({ type: 'decrement' })}>-</Button>

			<span className="points">{state.count}</span>

			<Button variant="success" onClick={() => dispatch({ type: 'increment' })}>+</Button>
		</div>
	)
}

export default ReducerCounter;
