import { render, screen } from '@testing-library/react'
import LoginForm from '../LoginForm'

describe("LoginForm rendering", () => {
	it('renders input fields', () => {
		// Render the LoginForm component
		render(<LoginForm />)

		// Find all the elements
		const emailInputEl = screen.getByRole('textbox', { name: /^email/i })
		const emailConfirmInputEl = screen.getByRole('textbox', { name: /confirm email/i })
		const passwordInputEl = screen.getByLabelText(/^password/i)
		const passwordConfirmInputEl = screen.getByLabelText(/confirm password/i)

		// Assert that all the element's values are empty
		expect(emailInputEl).toBeInTheDocument()
		expect(emailConfirmInputEl).toBeInTheDocument()
		expect(passwordInputEl).toBeInTheDocument()
		expect(passwordConfirmInputEl).toBeInTheDocument()
	})

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
})

describe("LoginForm functionality", () => {
	it('does not allow a invalid user to log in', () => {})
	it('does allows a valid user to log in', () => {})
})
