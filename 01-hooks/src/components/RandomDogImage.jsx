import React from 'react'
import useFetch from '../hooks/useFetch'
import Button from 'react-bootstrap/Button'

const RandomDogImage = () => {
	const { data, error, isLoading, runQuery } = useFetch('https://dog.ceo/api/breeds/image/random')

	const getAnotherDoggo = () => {
		runQuery()
	}

	return (
		<div>
			{isLoading && (<p>Loading doggo...</p>)}

			{error && (<p>Error getting 🐶, got a 🐱 instead</p>)}

			{data && (
				<>
					<div className="mb-3 text-center">
						<img src={data.message} className="img-fluid" title="Random doggo of the moment" />
					</div>

					<Button variant="success" onClick={getAnotherDoggo}>Moar doggos!</Button>
				</>
			)}
		</div>
	)
}

export default RandomDogImage
