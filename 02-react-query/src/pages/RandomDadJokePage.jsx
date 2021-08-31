import React from 'react'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getRandomJoke } from '../services/ICanHazDadJokeAPI'

const RandomDadJokePage = () => {
	const { data, error, isError, isLoading } = useQuery('random-dad-joke', getRandomJoke)

	return (
		<Container className="py-3">
			<h1>Random Dad Joke</h1>

			{isLoading && (<p>Loading dad joke dad</p>)}

			{isError && (<p>An error occurred: {error}</p>)}

			{data && (<div className="display-4 text-center">{data.joke}</div>)}
		</Container>
	)
}

export default RandomDadJokePage
