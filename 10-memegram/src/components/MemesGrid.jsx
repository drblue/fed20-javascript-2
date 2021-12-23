import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Masonry from 'react-masonry-css'
import BeatLoader from 'react-spinners/BeatLoader'

const masonryBreakpoints = {
	default: 4,
	576: 2,
	768: 3,
	992: 4,
}

const MemesGrid = ({ query }) => {
	if (query.isError) {
		return <Alert variant="warning">{query.error}</Alert>
	}

	if (query.isLoading) {
		return <BeatLoader color="#888" />
	}

	return query.data && (
		<Masonry
			breakpointCols={masonryBreakpoints}
			className="memes-masonry"
			columnClassName="memes-masonry-column"
		>
			{query.data.map(meme => (
				<Card key={meme._id}>
					<Card.Header>{meme.name}</Card.Header>
					<Card.Img variant="top" src={meme.url} title={meme._id} />
					<Card.Footer>{meme.owner}</Card.Footer>
				</Card>
			))}
		</Masonry>
	)
}

export default MemesGrid
