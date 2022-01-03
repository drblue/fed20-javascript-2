import { render, screen } from '@testing-library/react'
import LoginForm from '../LoginForm'

it('renders input fields initally empty', () => {
	// Render the LoginForm component
	render(<LoginForm />)

	// Find all the elements
	const emailInputEl = screen.getByRole('textbox', { name: /^email/i })
	const emailConfirmInputEl = screen.getByRole('textbox', { name: /confirm email/i })
	const passwordInputEl = screen.getByLabelText(/^password/i)
	const passwordConfirmInputEl = screen.getByLabelText(/confirm password/i)

	// Assert that all the element's values are empty
	expect(emailInputEl.value).toBe('')
	expect(emailConfirmInputEl.value).toBe('')
	expect(passwordInputEl.value).toBe('')
	expect(passwordConfirmInputEl.value).toBe('')
})
