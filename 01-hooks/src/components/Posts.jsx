import React from 'react'
import useFetch from '../hooks/useFetch'

const Posts = () => {
	const { isLoading, data, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

	if (isLoading) {
		return (<p>Loading posts...</p>)
	}

	if (error) {
		return (<p>Oh no, couldn't fetch posts</p>)
	}

	if (!data) {
		return null
	}

	return (
		<ul>
			{data.map((post, i) => (<li key={i}>{post.title}</li>))}
		</ul>
	)
}

export default Posts
