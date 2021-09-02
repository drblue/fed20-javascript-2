import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import Joke from '../components/Joke'
import { getRandomJoke } from '../services/OfficialJokeAPI'

const RandomJokePage = () => {
	const { type } = useParams()
	const { data, error, isError, isFetching, isLoading } = useQuery(['random-joke', type],
		() => getRandomJoke(type),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
		}
	)

	const queryClient = useQueryClient()

	const getAnotherJoke = () => {
		queryClient.invalidateQueries(['random-joke', type])
	}

	return (
		<Container className="py-3">
			{/* {type ? (<h1>Random {type} Joke</h1>) : (<h1>Random Joke</h1>)} */}
			<h1>Random {type ?? 'any'} Joke</h1>

			<div className="text-center my-5">
				{isLoading && (<p className="my-3">Loading joke...</p>)}

				{isError && (<p className="my-3">Sorry, tried to get joke but API wasn't funny ({error})</p>)}

				{!isFetching && data && (
					<>
						<Joke joke={data} />
						<Button onClick={getAnotherJoke} variant="primary" className="my-3">🥳 Moar jokes!</Button>
					</>
				)}
			</div>
		</Container>
	)
}

export default RandomJokePage
