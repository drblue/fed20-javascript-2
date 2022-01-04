import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodoForm from '../AddTodoForm'

it("renders input field initally empty", () => {
	render(<AddTodoForm />)

	const inputEl = screen.getByRole("textbox")

	expect(inputEl.value).toBe("")
})

test("can type into input field", () => {
	render(<AddTodoForm />)

	const inputEl = screen.getByRole("textbox")

	// type into input field
	userEvent.type(inputEl, "A new todo")

	// expect input field value to be what we just typed into it
	expect(inputEl.value).toBe("A new todo")
})

test("input field empties after creating the todo", () => {
	render(
		<AddTodoForm
			onNewTodo={() => {}}
		/>
	)

	const inputEl = screen.getByRole("textbox")
	const btnEl = screen.getByRole("button")

	// type into input field
	userEvent.type(inputEl, "A new todo")

	// click the "Add" button
	userEvent.click(btnEl)

	// expect the input field to be empty
	expect(inputEl.value).toBe("")
})
