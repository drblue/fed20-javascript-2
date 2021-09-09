import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useUrlSearchParams } from 'use-url-search-params'
import { useQuery } from 'react-query'
import { getBooks } from '../services/API'
import BooksList from '../components/BooksList'
import Pagination from '../components/Pagination'
import SearchForm from '../components/SearchForm'

const BooksPage = () => {
	const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1, q: '' }, { page: Number })
	const [page, setPage] = useState(searchParams.page)
	const [searchQuery, setSearchQuery] = useState('')

	const { data, error, isError, isLoading, isPreviousData } = useQuery(['books', searchParams], () => {
		return getBooks(searchParams)
	})

	const handleSearchFormSubmit = (data) => {
		console.log("Got search query", data)
		setPage(1)
		setSearchQuery(data.searchQuery)
	}

	const handleSearchFormReset = () => {
		console.log("Reset search query")
		setPage(1)
		setSearchQuery('')
	}

	useEffect(() => {
		setSearchParams({ ...searchParams, page, q: searchQuery })
	}, [page, searchQuery])

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

			<SearchForm
				onFormSubmit={handleSearchFormSubmit}
				onFormReset={handleSearchFormReset}
				isLoading={isLoading}
				defaultValues={{ searchQuery: searchParams.q }}
			/>

			{data?.results && (
				<>
					<BooksList books={data.results} />

					<Pagination
						page={page}
						setPage={setPage}
						isPreviousData={isPreviousData}
						hasMore={data?.next}
					/>
				</>
			)}

		</Container>
	)
}

export default BooksPage
