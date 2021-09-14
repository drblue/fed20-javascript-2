import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'

const AccountButtons = () => {
	const dispatch = useDispatch()

	return (
		<div>
			<Button variant="success" onClick={() => dispatch({ type: 'deposit' })}>Deposit</Button>
			<Button variant="warning" onClick={() => dispatch({ type: 'withdraw' })}>Withdraw</Button>
		</div>
	)
}

export default AccountButtons
