import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import useDeleteImage from '../hooks/useDeleteImage'

const ImageCard = ({ image }) => {
	const deleteImageMutation = useDeleteImage(image)

	return (
		<Card className={`image-card ${deleteImageMutation.isMutating ? 'mutating' : ''}`}>
			<Card.Header>
				<div>
					{image.name}
				</div>
				<div className="card-actions">
					<Button
						variant="danger"
						size="sm"
						disabled={deleteImageMutation.isMutating}
						onClick={deleteImageMutation.mutate}
					>
						<FontAwesomeIcon icon={faTrashAlt} />
					</Button>
				</div>
			</Card.Header>

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
