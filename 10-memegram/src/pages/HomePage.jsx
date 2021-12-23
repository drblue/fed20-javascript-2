import React from 'react'
import Container from 'react-bootstrap/Container'
import useMemes from '../hooks/useMemes'

const HomePage = () => {
	const memesQuery = useMemes()

	return (
		<Container className="py-3">
			<h1>Latest memes</h1>

			{memesQuery.data && memesQuery.data.map(meme => (
				<div key={meme._id}>
					<img src={meme.url} title={meme._id} />
				</div>
			))}
		</Container>
	)
}

export default HomePage
