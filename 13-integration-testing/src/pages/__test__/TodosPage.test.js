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
	render(<TodosPage />)

	// create a new todo
	addTodos(["Todo 1", "Todo 2", "Todo 3"])

	// find all elements with role "listitem"
	const listitemEls = screen.getAllByRole("listitem");

	// assert that there are 3 listitems (one for each todo we created above)
	expect(listitemEls.length).toBe(3)
})

test("should be able to add to existing list of todos", () => {
	render(<TodosPage />)

	// create initial todos
	addTodos(["Todo 1", "Todo 2", "Todo 3"])

	// find all elements with role "listitem"
	const initialTodoEls = screen.getAllByRole("listitem")  // <-- todos before adding more

	// add more todos
	addTodos(["Todo 4", "Todo 5"])

	// assert that 2 new todos has been added
	const todoEls = screen.getAllByRole("listitem")  // <-- todos + the new ones
	expect(todoEls.length).toBe(initialTodoEls.length + 2)
})

test("counter is updated when a new todo is added", () => {
	render(<TodosPage />)

	// create multiple todos
	addTodos(["Todo 1", "Todo 2", "Todo 3"])

	// assert that counter states "3 todos left"
	const counterEl = screen.getByTestId("todo-counter")
	expect(counterEl).toHaveTextContent(/3 todos left/i)

	// const counterEl = screen.getByText(/3 todos left/i)
	// expect(counterEl).toBeInTheDocument()
})
