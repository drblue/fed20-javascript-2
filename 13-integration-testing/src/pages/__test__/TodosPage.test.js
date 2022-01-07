import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodosPage from '../TodosPage'

const addTodos = (todos) => {
	// find input elements
	const inputNewTodoTitle = screen.getByPlaceholderText(/enter the new todo here/i)
	const btnAddNewTodo = screen.getByRole("button", { name: /add/i })

	// loop over todos, type into input field and click button for each todo
	todos.forEach(todo_title => {
		userEvent.type(inputNewTodoTitle, todo_title)
		userEvent.click(btnAddNewTodo)
	})
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

	// create a new todo
	addTodos(["A new todo"])

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
