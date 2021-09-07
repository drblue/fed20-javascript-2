import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom'
import BookForm from '../components/BookForm'

const CreateBookPage = () => {
	const history = useHistory()

	const handleFormSubmit = (data) => {
		console.log("Got me data in parent component!", data)
	}

	return (
		<Container className="py-3">
			<h1>Create a new book</h1>

			<BookForm onFormSubmit={handleFormSubmit} />

			<div className="mt-5">
				<Button variant="secondary" onClick={() => history.goBack()}>&laquo; Go back</Button>
			</div>
		</Container>
	)
}

export default CreateBookPage
