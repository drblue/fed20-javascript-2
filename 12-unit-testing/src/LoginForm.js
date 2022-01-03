import { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './assets/sass/App.scss';

function App() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()

	return (
		<Form>
			<Form.Group controlId="email" className="mb-3">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" ref={emailRef} required />
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

export default App;
