import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

function MagicEightBall() {
	const [formQuestion, setFormQuestion] = useState("")
	const [question, setQuestion] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [result, setResult] = useState(null)
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	useEffect(() => {
		if (question.length < 3) {
			return;
		}
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

	const handleFormSubmit = (e) => {
		e.preventDefault()
		console.log(`A question has been submitted: "Should I ${formQuestion}?"`)

		setQuestion(formQuestion)
	}

	if (isLoading) {
		return (<p>Loading...</p>)
	}

	if (error) {
		return (<p>ERROR! ERROR! DANGER WILL ROBINSON!</p>)
	}

	return (
		<>
			<Form onSubmit={handleFormSubmit}>
				<Form.Label htmlFor="formQuestion" className="display-3">Should I</Form.Label>

				<InputGroup className="mb-3">
					<Form.Control
						type="text"
						size="lg"
						id="formQuestion"
						ref={inputRef}
						onChange={e => setFormQuestion(e.target.value)}
						value={formQuestion}
						placeholder="Enter your question"
					/>
					<InputGroup.Text>?</InputGroup.Text>
				</InputGroup>
				{formQuestion.length < 3 && <p className="text-red">Please ask at least 3 characters.</p>}

				<Button variant="info" type="submit">
					Roll the <span role="img" aria-label="A black ball with the number 8">🎱</span>
				</Button>
			</Form>

			{result && (
				<div className="mt-5">
					<p className="display-1"><strong>{result.answer.toUpperCase()}!</strong></p>
					<img src={result.image} />
				</div>
			)}
		</>
	)
}

export default MagicEightBall
