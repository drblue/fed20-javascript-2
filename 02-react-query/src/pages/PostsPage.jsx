import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getPosts } from '../services/WPAPI'

const PostsPage = () => {
	const [page, setPage] = useState(1)
	const { data, error, isError, isFetching, isLoading, isPreviousData } = useQuery(
		['posts', page],
		() => getPosts(page),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
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

				{data?.results && (
					<ul className="my-3">
						{data.results.map((post, i) => (
							<li key={i}>
								<a href={post.link} rel="noopener noreferrer" target="_blank">
									{post.title.rendered.replace('&#8211;', '-')}
								</a>
							</li>
						))}
					</ul>
				)}

				<div className="pagination d-flex justify-content-between align-items-center mt-4">
					<Button
						onClick={() => setPage(currentPage => Math.max(currentPage - 1, 1))}
						disabled={page === 1}
					>
						Previous Page
					</Button>

					<span>Current Page: {page}</span>

					<Button
						onClick={() => {
							if (!isPreviousData && data.next) {
								setPage(currentPage => currentPage + 1)
							}
						}}
						// Disable the Next Page button until we know a next page is available
						disabled={isPreviousData || !data?.next}
					>
						Next Page
					</Button>
				</div>
			</div>
		</Container>
	)
}

export default PostsPage
