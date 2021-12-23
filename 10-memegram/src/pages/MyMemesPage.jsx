import React from 'react'
import Container from 'react-bootstrap/Container'
import MemesGrid from '../components/MemesGrid'
import useMemes from '../hooks/useMemes'

const MyMemesPage = () => {
	const memesQuery = useMemes({
		fetchOnlyCurrentUser: true,
	})

	return (
		<Container className="py-3">
			<h1>My memes</h1>

			<MemesGrid query={memesQuery} />
		</Container>
	)
}

export default MyMemesPage
