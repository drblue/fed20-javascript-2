import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { deposit, withdraw } from '../features/account/accountSlice'

const AccountButtons = () => {
	const dispatch = useDispatch()

	return (
		<div>
			<Button variant="success" onClick={() => dispatch(deposit(500))}>Deposit</Button>
			<Button variant="warning" onClick={() => dispatch(withdraw(250))}>Withdraw</Button>
		</div>
	)
}

export default AccountButtons
