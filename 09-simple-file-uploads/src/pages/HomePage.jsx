import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import UploadImage from '../components/UploadImage'
import useImages from '../hooks/useImages'

const HomePage = () => {
	const imagesQuery = useImages()

	return (
		<>
			<h1>Images</h1>

			{imagesQuery.isLoading && <p>Loading...</p>}

			<Row xs={1} sm={2} md={3} lg={4}>
				{imagesQuery.data && imagesQuery.data.map(image => (
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

			<hr className="my-3" />

			<UploadImage />
		</>
	)
}

export default HomePage
