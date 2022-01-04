import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodosPage from '../TodosPage'

const addTodos = (todos) => {
	// find input elements

	// loop over todos, type into input field and click button for each todo
}

test("todo list is initally empty", () => {
	render(<TodosPage />)

	// find any listitem elements
	const listitemEls = screen.queryAllByRole("listitem")

	// expect list to be empty
	expect(listitemEls.length).toBe(0)
})

test("can add a new todo", () => {
	render(<TodosPage />)

	// find elements
	const inputNewTodoTitle = screen.getByPlaceholderText(/enter the new todo here/i)
	const btnAddNewTodo = screen.getByRole("button", { name: /add/i })

	// type into the form and click the add-button
	userEvent.type(inputNewTodoTitle, "A new todo")
	userEvent.click(btnAddNewTodo)

	// assert that the new todo has been added to the list
	const newTodoEl = screen.getByText("A new todo")
	expect(newTodoEl).toBeInTheDocument()
})

test("should render multiple todos", () => {
	// fix me

	// bonus-points if test has support for existing todos
})

test("counter is updated when a new todo is added", () => {
	// fix me also
})
