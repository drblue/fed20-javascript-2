import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { useStoreContext } from '../contexts/StoreContextProvider'
import ACTIONS from '../actions/countActions'

const ReducerContextCounter = () => {
	const { state, dispatch } = useStoreContext()

	return (
		<div className="reducer-counter">
			<Button variant="warning" onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</Button>

			<span className="points">{state.count}</span>

			<Button variant="success" onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</Button>
		</div>
	)
}

export default ReducerContextCounter
