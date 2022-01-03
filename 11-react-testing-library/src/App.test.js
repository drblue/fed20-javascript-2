import { render, screen } from '@testing-library/react'
import App from './App'

it('renders learn testing link', () => {
	// 1) Render the component we want to test
	render(<App />)

	// 2) Find the elements we want to interact with
	const linkElement = screen.getByText(/learn testing/i)

	// 3) Interact with the elements

	// 4) Assert that the results are what we expect them to be
	expect(linkElement).toBeInTheDocument()
});

it('does not render learn react link', () => {
	// Render App component
	render(<App />)

	// Find element with text "Learn React" (WILL FAIL HERE)
	const learnReactElement = screen.getByText(/learn react/i)

	// Assert that the element does not exist in the document
	expect(learnReactElement).not.toBeInTheDocument()
})
