import React from 'react'
import Container from 'react-bootstrap/Container'
import AccountButtons from '../components/AccountButtons'

const AccountPage = () => {
	return (
		<Container className="py-3">
			<h1>Account</h1>

			<div className="text-center my-5">
				<p className="h3">Balance</p>
				<code className="display-4">${}</code>
			</div>

			<div className="d-flex justify-content-between">
				<div className="text-center">
					<p>AccountButtons 1</p>
					<AccountButtons />
				</div>

				<div className="text-center">
					<p>AccountButtons 2</p>
					<AccountButtons />
				</div>
			</div>
		</Container>
	)
}

export default AccountPage
