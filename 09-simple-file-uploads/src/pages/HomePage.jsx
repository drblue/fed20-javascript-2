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

			<Row>
				{data && data.map(image => (
					<Col sm={6} md={4} lg={3} key={image._id}>
						<Card>
							<a href={image.url} target="_blank">
								<Card.Img variant="top" src={image.url} />
							</a>
							<Card.Body>
								<Card.Text>
									<p>{image.name} ({image.size} b)</p>
									<p>{image._id}</p>
								</Card.Text>
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
