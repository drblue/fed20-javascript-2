import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const BookForm = () => {
	const [data, setData] = useState({
		title: "",
		author: "",
		published: 2021,
		pages: 1
	})

	const handleInputChange = (e) => {
		setData(prevData => {
			return {
				...prevData,
				[e.target.id]: e.target.value
			}
		})
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()

		console.log("Data to send:", data)
	}

	return (
		<Form onSubmit={handleFormSubmit}>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" onChange={handleInputChange} value={data.title} placeholder="Enter book title" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="author">
				<Form.Label>Author</Form.Label>
				<Form.Control type="text" onChange={handleInputChange} value={data.author} placeholder="Enter the author's name" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="published">
				<Form.Label>Published</Form.Label>
				<Form.Control type="text" onChange={handleInputChange} value={data.published} placeholder="Enter year the book was published" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="pages">
				<Form.Label>Pages</Form.Label>
				<Form.Control type="number" onChange={handleInputChange} value={data.pages} min="0" placeholder="Enter the number of pages in the book" />
			</Form.Group>

			<Button variant="success" type="submit">Submit</Button>
		</Form>
	)
}

export default BookForm
