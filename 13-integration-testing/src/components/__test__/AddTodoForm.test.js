import { render, screen } from '@testing-library/react'
import AddTodoForm from '../AddTodoForm'

it("renders input field initally empty", () => {
	render(<AddTodoForm />)

	const inputEl = screen.getByRole("textbox")

	expect(inputEl.value).toBe("")
})
