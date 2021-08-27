import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const MagicEightBallResponse = ({ question }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [result, setResult] = useState(null)

	useEffect(() => {
		console.log("🎱 Rolling 8-ball...")

		// remove previous result (if any)
		setResult(null)

		// set loading to true
		setIsLoading(true)

		// fetch result from API
		fetch('https://yesno.wtf/api')
			.then(res => res.json())
			.then(res => {
				console.log("Ball has stopped rollin'...", res)
				setTimeout(() => {
					// clear any previous error
					setError(false)

					// set response as result
					setResult(res)

					// set loading finished
					setIsLoading(false)
				}, 1500)
			})
			.catch(err => {
				// set error
				console.log("WE HAS ERROR 😱: ", err)
				setError(err.message)

				// set loading finished
				setIsLoading(false)
			})
	}, [question])

	if (isLoading) {
		return (<p>Loading...</p>)
	}

	if (error) {
		return (<Alert variant="danger">{error}</Alert>)
	}

	if (!result) {
		return null
	}

	return (
		<>
			<p className="display-1"><strong>{result.answer.toUpperCase()}!</strong></p>
			<img src={result.image} />
		</>
	)
}

export default MagicEightBallResponse
