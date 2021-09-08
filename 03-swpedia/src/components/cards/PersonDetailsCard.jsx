import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link, useHistory } from 'react-router-dom'
import { getIdFromUrl } from '../../helpers'

const PersonDetailsCard = ({ person }) => {
	const history = useHistory()
	const homeworld_id = getIdFromUrl(person.homeworld)

	return (
		<Card>
			<Card.Header>{person.name}</Card.Header>
			<Card.Body>
				<Card.Title>Attributes</Card.Title>
				<dl className="row">
					<dt className="col-sm-3">Gender</dt>
					<dd className="col-sm-9">{person.gender}</dd>

					<dt className="col-sm-3">Birth year</dt>
					<dd className="col-sm-9">{person.birth_year}</dd>

					<dt className="col-sm-3">Height</dt>
					<dd className="col-sm-9">{person.height} cm</dd>

					<dt className="col-sm-3">Mass</dt>
					<dd className="col-sm-9">{person.mass} kg</dd>

					<dt className="col-sm-3">Hair color</dt>
					<dd className="col-sm-9">{person.hair_color}</dd>

					<dt className="col-sm-3">Skin color</dt>
					<dd className="col-sm-9">{person.skin_color}</dd>

					<dt className="col-sm-3">Eye color</dt>
					<dd className="col-sm-9">{person.eye_color}</dd>
				</dl>

				<Card.Title>Links</Card.Title>
				<dl className="row">
					<dt className="col-sm-3">Homeworld</dt>
					<dd className="col-sm-9">
						<Link to={`/planets/${homeworld_id}`}>Planet {homeworld_id} &raquo;</Link>
					</dd>

					<dt className="col-sm-3">Films</dt>
					<dd className="col-sm-9">
						<ul className="list-group">
							{person.films.map(url => {
								const id = getIdFromUrl(url);
								return (
									<li className="list-group-item" key={id}>
										<Link to={`/films/${id}`}>Film {id} &raquo;</Link>
									</li>
								)
							})}
						</ul>
					</dd>

					<dt className="col-sm-3">Starships</dt>
					<dd className="col-sm-9">
						<ul className="list-group">
							{person.starships.map(url => {
								const id = getIdFromUrl(url);
								return (
									<li className="list-group-item" key={id}>
										<Link to={`/starships/${id}`}>Starship {id} &raquo;</Link>
									</li>
								)
							})}
						</ul>
					</dd>
				</dl>

				<Button variant="secondary" onClick={() => history.goBack()}>&laquo; Back</Button>
			</Card.Body>
		</Card>
	)
}

export default PersonDetailsCard
