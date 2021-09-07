import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'

const BookForm = () => {

	const { handleSubmit, register, formState: { errors } } = useForm()

	const onFormSubmit = (data) => {
		console.log("Got me some data!", data)
	}

	return (
		<Form onSubmit={handleSubmit(onFormSubmit)}>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" defaultValue="Banana?" {...register('title', { required: true })} placeholder="Enter book title" />
				{errors.title && <p>This field is required.</p>}
			</Form.Group>

			<Form.Group className="mb-3" controlId="author">
				<Form.Label>Author</Form.Label>
				<Form.Control type="text" defaultValue="" {...register('author')}  placeholder="Enter the author's name" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="published">
				<Form.Label>Published</Form.Label>
				<Form.Control type="text" defaultValue="1970" {...register('published')}  placeholder="Enter year the book was published" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="pages">
				<Form.Label>Pages</Form.Label>
				<Form.Control type="number" defaultValue="42" {...register('pages')}  min="0" placeholder="Enter the number of pages in the book" />
			</Form.Group>

			<Button variant="success" type="submit">Submit</Button>
		</Form>
	)
}

export default BookForm
