import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BeatLoader from 'react-spinners/BeatLoader'

const ImageGrid = ({ query }) => {
	if (query.isError) {
		return (
			<Alert variant="warning">
				<strong>Error!</strong> {query.error}
			</Alert>
		)
	}

	if (query.isLoading) {
		return <BeatLoader color={'#888'} />
	}

	return (
		<Row xs={1} sm={2} md={3} lg={4}>
			{query.data && query.data.map(image => (
				<Col key={image._id} className="d-flex">
					<Card className="image-card">
						<Card.Header>{image._id}</Card.Header>
						<a href={image.url} target="_blank">
							<Card.Img variant="top" src={image.url} />
						</a>
						<Card.Body>
							<Card.Text>{image.name} ({image.size} b)</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default ImageGrid
