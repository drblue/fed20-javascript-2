import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { accountActionCreators } from '../state/action-creators'

const AccountButtons = () => {
	const dispatch = useDispatch()
	const { depositMoney, withdrawMoney } = bindActionCreators(accountActionCreators, dispatch)

	return (
		<div>
			<Button variant="success" onClick={() => depositMoney(500)}>Deposit</Button>
			<Button variant="warning" onClick={() => withdrawMoney(100)}>Withdraw</Button>
		</div>
	)
}

export default AccountButtons
