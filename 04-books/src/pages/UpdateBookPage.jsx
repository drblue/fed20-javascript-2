import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useHistory, useParams } from 'react-router-dom'
import BookForm from '../components/BookForm'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getBook, updateBook } from '../services/API'

const UpdateBookPage = () => {
	const history = useHistory()
	const { id } = useParams()
	const queryClient = useQueryClient()
	const { mutateAsync, isLoading: isMutating } = useMutation(updateBook)
	const { data, error, isError, isLoading } = useQuery(['book', id], () => {
		return getBook(id)
	})

	const handleFormSubmit = async (data) => {
		console.log("Got me data, sending to servah!", data)

		await mutateAsync({ id, data })
		queryClient.refetchQueries(['book', id])

		history.push(`/books/${id}`)
	}

	return (
		<Container className="py-3">
			<h1>Update book {id}</h1>

			{isLoading && (
				<p className="my-3">Loading...</p>
			)}

			{isError && (
				<Alert variant="warning" className="my-3">
					<strong>Error:</strong> {error.message}
				</Alert>
			)}

			{data && (
				<BookForm defaultValues={data} onFormSubmit={handleFormSubmit} isLoading={isMutating} />
			)}

			<div className="mt-5">
				<Button variant="secondary" onClick={() => history.goBack()}>&laquo; Go back</Button>
			</div>
		</Container>
	)
}

export default UpdateBookPage
