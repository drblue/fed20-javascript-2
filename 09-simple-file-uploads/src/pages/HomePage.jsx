import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../firebase'
import UploadImage from '../components/UploadImage'

const HomePage = () => {
	// create ref to collection 'images'
	const imagesRef = collection(db, 'images')

	const { data, isLoading, isError } = useFirestoreQueryData(['images'], imagesRef, {
		idField: '_id',
		subscribe: true,
	}, {
		refetchOnMount: 'always',
	})

	return (
		<>
			<h1>Images</h1>

			{isLoading && <p>Loading...</p>}

			<Row xs={1} sm={2} md={3} lg={4}>
				{data && data.map(image => (
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
