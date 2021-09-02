import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getPosts } from '../services/WPAPI'

const PostsPage = () => {
	const [page, setPage] = useState(1)
	const { data, error, isError, isFetching, isLoading } = useQuery(
		['posts', page],
		() => getPosts(page),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
		}
	)

	useEffect(() => {
		console.log("data is:", data)
	}, [data])

	return (
		<Container className="py-3">
			<h1>Posts</h1>

			<div>
				{isLoading && (<p className="my-3">Loading posts...</p>)}

				{isError && (<p className="my-3">Sorry, tried to get posts but no stamps found ({error})</p>)}

				{data && (
					<p className="my-3">Got me some data!</p>
				)}

				<div className="pagination d-flex justify-content-between align-items-center mt-4">
					<Button onClick={() => setPage(currentPage => currentPage - 1)}>
						Previous Page
					</Button>

					<span>Current Page: {page}</span>

					<Button onClick={() => setPage(currentPage => currentPage + 1)}>
						Next Page
					</Button>
				</div>
			</div>
		</Container>
	)
}

export default PostsPage
