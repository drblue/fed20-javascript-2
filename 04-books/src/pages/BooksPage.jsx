import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getBooks } from '../services/API'
import BooksList from '../components/BooksList'

const BooksPage = () => {
	const { data, error, isError, isLoading } = useQuery(['books'], () => {
		return getBooks()
	})

	return (
		<Container className="py-3">
			<h1>Books</h1>

			{isLoading && (
				<p className="my-3">Loading...</p>
			)}

			{isError && (
				<Alert variant="warning" className="my-3">
					<strong>Error:</strong> {error.message}
				</Alert>
			)}

			<div className="d-flex justify-content-end mb-2">
				<Link to="/books/create" className="btn btn-success btn-sm">Create new book</Link>
			</div>

			{data && (
				<BooksList books={data} />
			)}
		</Container>
	)
}

export default BooksPage
