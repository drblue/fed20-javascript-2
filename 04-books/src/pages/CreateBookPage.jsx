import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom'
import BookForm from '../components/BookForm'
import { useMutation } from 'react-query'
import { createBook } from '../services/API'

const CreateBookPage = () => {
	const history = useHistory()
	const { mutateAsync, isLoading } = useMutation(createBook)

	const handleFormSubmit = async (data) => {
		console.log("Got me data, sending to servah!", data)

		await mutateAsync(data)
		history.push('/books')
	}

	return (
		<Container className="py-3">
			<h1>Create a new book</h1>

			<BookForm onFormSubmit={handleFormSubmit} isLoading={isLoading} />

			<div className="mt-5">
				<Button variant="secondary" onClick={() => history.goBack()}>&laquo; Go back</Button>
			</div>
		</Container>
	)
}

export default CreateBookPage
