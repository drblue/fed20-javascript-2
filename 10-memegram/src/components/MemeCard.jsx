import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../contexts/AuthContext'
import useDeleteMeme from '../hooks/useDeleteMeme'

const MemeCard = ({ meme, onDelete }) => {
	const { currentUser } = useAuthContext()
	const deleteMeme = useDeleteMeme(meme)

	const handleDeleteMemeClick = async () => {
		// run mutation but wait for it to be completed
		await deleteMeme.mutate()

		// invalidate query
		onDelete()
	}

	return (
		<Card className={`meme-card ${deleteMeme.isMutating ? 'mutating' : ''}`}>
			<Card.Header>
				<span className="meme-filename" title={meme.name}>
					{meme.name}
				</span>
				<div className="card-actions">
					{meme.owner === currentUser.uid && (
						<Button
							variant="danger"
							size="sm"
							disabled={deleteMeme.isMutating}
							onClick={handleDeleteMemeClick}
						>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
					)}
				</div>
			</Card.Header>

			<a href={meme.url}>
				<Card.Img variant="top" src={meme.url} title={meme._id} />
			</a>

			<Card.Footer>{meme.owner}</Card.Footer>
		</Card>
	)
}

export default MemeCard
