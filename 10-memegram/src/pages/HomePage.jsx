import React from 'react'
import Container from 'react-bootstrap/Container'
import MemesGrid from '../components/MemesGrid'
import useMemes from '../hooks/useMemes'

const HomePage = () => {
	const memesQuery = useMemes()

	return (
		<Container className="py-3">
			<h1>Latest memes</h1>

			<MemesGrid query={memesQuery} />
		</Container>
	)
}

export default HomePage
