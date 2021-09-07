import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'

const BookForm = ({
	onFormSubmit,
	defaultValues
}) => {

	const { handleSubmit, register, formState: { errors } } = useForm({
		defaultValues,
	})

	return (
		<Form onSubmit={handleSubmit(onFormSubmit)}>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" {...register('title', { required: true })} placeholder="Enter book title" />
				{errors.title && <p>This field is required.</p>}
			</Form.Group>

			<Form.Group className="mb-3" controlId="author">
				<Form.Label>Author</Form.Label>
				<Form.Control type="text" {...register('author')} placeholder="Enter the author's name" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="published">
				<Form.Label>Published</Form.Label>
				<Form.Control type="text" {...register('published')} placeholder="Enter year the book was published" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="pages">
				<Form.Label>Pages</Form.Label>
				<Form.Control type="number" {...register('pages')} min="0" placeholder="Enter the number of pages in the book" />
			</Form.Group>

			<Button variant="success" type="submit">Submit</Button>
		</Form>
	)
}

export default BookForm
