import React from 'react'
import Card from 'react-bootstrap/Card'

const ImageCard = ({ image }) => {
	return (
		<Card className="image-card">
			<Card.Header>{image._id}</Card.Header>
			<a href={image.url} target="_blank">
				<Card.Img variant="top" src={image.url} />
			</a>
			<Card.Body>
				<Card.Text>{image.name} ({image.size} b)</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ImageCard
