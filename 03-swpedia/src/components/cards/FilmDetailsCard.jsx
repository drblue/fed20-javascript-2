import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link, useHistory } from 'react-router-dom'
import { getIdFromUrl } from '../../helpers'

const FilmDetailsCard = ({ film }) => {
	const history = useHistory()

	return (
		<Card>
			<Card.Header>{film.title}</Card.Header>
			<Card.Body>
				<Card.Title>Attributes</Card.Title>
				<dl className="row">
					<dt className="col-sm-3">Episode</dt>
					<dd className="col-sm-9">{film.episode_id}</dd>

					<dt className="col-sm-3">Director</dt>
					<dd className="col-sm-9">{film.director}</dd>

					<dt className="col-sm-3">Producer</dt>
					<dd className="col-sm-9">{film.producer}</dd>

					<dt className="col-sm-3">Release date</dt>
					<dd className="col-sm-9">{film.release_date}</dd>
				</dl>

				<Card.Title>Links</Card.Title>
				<dl className="row">
					<dt className="col-sm-3">Characters</dt>
					<dd className="col-sm-9">
						<ul className="list-group">
							{film.characters.map(url => {
								const id = getIdFromUrl(url);
								return (
									<li className="list-group-item" key={id}>
										<Link to={`/characters/${id}`}>Character {id} &raquo;</Link>
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

export default FilmDetailsCard
