import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../../helpers'

const PersonCard = ({ person }) => {
	const personId = getIdFromUrl(person.url)

	return (
		<Card className="mb-3">
			<Card.Header>{person.name}</Card.Header>
			<Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<strong>Gender</strong> {person.gender}
					</ListGroup.Item>
					<ListGroup.Item>
						<strong>Born</strong> {person.birth_year}
					</ListGroup.Item>
					<ListGroup.Item>
						<strong>In</strong> {person.films.length} films
					</ListGroup.Item>
				</ListGroup>

				<div className="mt-3">
					<Link to={`/people/${personId}`} className="btn btn-primary" role="button">Read more</Link>
				</div>
			</Card.Body>
		</Card>
	)
}

export default PersonCard
