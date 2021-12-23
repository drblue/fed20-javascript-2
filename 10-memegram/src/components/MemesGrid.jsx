import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Masonry from 'react-masonry-css'
import BeatLoader from 'react-spinners/BeatLoader'
import MemeCard from './MemeCard'

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

	const refetchQuery = () => {
		query.refetch()
	}

	return query.data && (
		<Masonry
			breakpointCols={masonryBreakpoints}
			className="memes-masonry"
			columnClassName="memes-masonry-column"
		>
			{query.data.map(meme => (
				<MemeCard meme={meme} key={meme._id} onDelete={refetchQuery} />
			))}
		</Masonry>
	)
}

export default MemesGrid
