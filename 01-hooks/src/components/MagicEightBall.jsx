import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import useLocalStorage from '../hooks/useLocalStorage'
import MagicEightBallResponse from './MagicEightBallResponse'

function MagicEightBall() {
	const [savedQuestion, setSavedQuestion] = useLocalStorage('magic8ball_question', '')
	const [formQuestion, setFormQuestion] = useState("")
	const [question, setQuestion] = useState("")
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	// set form question to whatever is stored in localStorage
	useEffect(() => {
		setFormQuestion(savedQuestion)
	}, [savedQuestion])

	const handleFormSubmit = (e) => {
		e.preventDefault()

		if (formQuestion.length < 3) {
			console.log(`The question submitted is too short`)
			return;
		}

		console.log(`A question has been submitted: "Should I ${formQuestion}?"`)
		setQuestion(formQuestion)
		setSavedQuestion(formQuestion)
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

			<div className="magic-eight-ball-response mt-5">
				{question && (<MagicEightBallResponse question={question} />)}
			</div>
		</>
	)
}

export default MagicEightBall
