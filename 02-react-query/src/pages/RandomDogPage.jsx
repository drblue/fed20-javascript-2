import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useQuery, useQueryClient } from 'react-query'
import { getRandomDog } from '../services/DogAPI'

const RandomDogPage = () => {
	const { data, error, isError, isLoading } = useQuery('random-dog', getRandomDog)
	const queryClient = useQueryClient()

	const getAnotherRandomDog = () => {
		queryClient.invalidateQueries('random-dog')
	}

	return (
		<Container className="py-3">
			<h1>Random Doggo</h1>

			<div className="text-center">
				{isLoading && (<p className="my-3">Loading 🐶...</p>)}

				{isError && (<p className="my-3">Sorry, tried to get 🐶 but API returned 🐱 ({error})</p>)}

				{data && (
					<div className="my-3">
						<img src={data.message} className="img-fluid" />
					</div>
				)}

				<Button onClick={getAnotherRandomDog} variant="primary" className="my-3">🐶 Moar doggos!</Button>
			</div>
		</Container>
	)
}

export default RandomDogPage
