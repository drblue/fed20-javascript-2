import { render, screen } from '@testing-library/react'
import TodoCounter from '../TodoCounter'

// test correctly counts 0 todos
it("correctly counts 0 todos", () => {
	// render
	render(<TodoCounter count={0} />)

	// find element that matches text "0 todos"
	const counterEl = screen.getByText(/0 todos/i)

	// assert that the element exists in the document
	expect(counterEl).toBeInTheDocument()
})

// test correctly counts 1 todo
it("correctly counts 1 todo", () => {
	// render
	render(<TodoCounter count={1} />)

	// find element that matches text "1 thing left"
	const counterEl = screen.getByText(/1 thing left/i)

	// assert that the element exists in the document
	expect(counterEl).toBeInTheDocument()
})

// test correctly counts multiple todos
it("correctly counts multiple todos", () => {
	// render
	render(<TodoCounter count={3} />)

	// find element that matches text "3 todos left"
	const counterEl = screen.getByText(/3 todos left/i)

	// assert that the element exists in the document
	expect(counterEl).toBeInTheDocument()
})
