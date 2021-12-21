import React from 'react'
import Container from 'react-bootstrap/Container'
import { useAuthContext } from '../contexts/AuthContext'

const HomePage = () => {
	const { currentUser } = useAuthContext()

	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
			{
				currentUser
					? <p>You are logged in as {currentUser.email} 🥳!</p>
					: <p>Anomymous haxxer</p>
			}
		</Container>
	)
}

export default HomePage
