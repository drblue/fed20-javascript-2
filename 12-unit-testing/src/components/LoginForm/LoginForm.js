import { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function LoginForm() {
	const [loading, setLoading] = useState(false)
	const emailRef = useRef()
	const emailConfirmRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()

	if (loading) {
		return (<p>Loading...</p>)
	}

	return (
		<Form>
			<Form.Group controlId="email" className="mb-3">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" ref={emailRef} required />
				<Form.Text>Please enter a valid email where we can reach you.</Form.Text>
			</Form.Group>

			<Form.Group controlId="email-confirm" className="mb-3">
				<Form.Label>Confirm Email</Form.Label>
				<Form.Control type="email" ref={emailConfirmRef} required />
			</Form.Group>

			<Form.Group controlId="password" className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" ref={passwordRef} autoComplete="new-password" />
			</Form.Group>

			<Form.Group controlId="password-confirm" className="mb-3">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control type="password" ref={passwordConfirmRef} autoComplete="new-password" />
			</Form.Group>

			<Button type="submit">Update</Button>
		</Form>
	);
}

export default LoginForm;
