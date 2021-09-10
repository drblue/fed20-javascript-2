import React, { useReducer, useState } from 'react'
import Button from 'react-bootstrap/Button'

const ACTIONS = {
	ADD: 'add',
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
	RESET: 'reset',
	SUBTRACT: 'subtract',
}

const initialState = {
	count: 0,
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return {
				count: state.count + action.payload.amount
			}
		case ACTIONS.INCREMENT:
			return {
				count: state.count + 1
			}
		case ACTIONS.DECREMENT:
			return {
				count: state.count - 1
			}
		case ACTIONS.RESET:
			return {
				count: 0
			}
		case ACTIONS.SUBTRACT:
			return {
				count: state.count - action.payload.amount
			}
		default:
			throw new Error('Unkown action type: ' + action.type)
	}
}

const ReducerCounter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className="d-flex">
			<Button variant="warning" onClick={() => dispatch({ type: ACTIONS.SUBTRACT, payload: { amount: 5 } })}>-5</Button>
			<Button variant="warning" onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</Button>

			<span className="points">{state.count}</span>

			<Button variant="success" onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</Button>
			<Button variant="success" onClick={() => dispatch({ type: ACTIONS.ADD, payload: { amount: 5 } })}>+5</Button>

			<Button variant="danger" onClick={() => dispatch({ type: ACTIONS.RESET })} className="ms-5">Reset</Button>
		</div>
	)
}

export default ReducerCounter;
