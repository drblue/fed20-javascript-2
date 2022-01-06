import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const UserPage = () => {
	const { username } = useParams()

	return (
		<Container className="py-3">
			<h1>{username}</h1>

			<div className="mt-4">
				<Button as={Link} to={`/users`} variant="secondary">&laquo; Back</Button>
			</div>
		</Container>
	)
}

export default UserPage
