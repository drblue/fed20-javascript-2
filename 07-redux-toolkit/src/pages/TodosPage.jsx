import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddEmployeeForm from '../features/employees/AddEmployeeForm'
import EmployeeList from '../features/employees/EmployeeList'
import { addEmployee } from '../features/employees/employeesSlice'
import TodosList from '../features/todos/TodosList'

const TodosPage = () => {
	const dispatch = useDispatch()
	const employees = useSelector(state => state.employees.value)
	const todos = useSelector(state => state.todos.value)

	const handleAddEmployee = (employeeName) => {
		dispatch(addEmployee(employeeName))
	}

	return (
		<Container className="py-3">
			<h1>Todos</h1>

			<Row>

				<Col md={4}>
					<h2 className="h3">Employees</h2>

					<EmployeeList employees={employees} />

					<hr className="my-3" />

					<h2 className="h4">Add New Employee</h2>
					<AddEmployeeForm onAddEmployee={handleAddEmployee} />
				</Col>

				<Col md={8}>
					<h2 className="h3">Todos</h2>

					{/* <p className="text-muted">Please select employee in the list to view their todos.</p> */}

					<TodosList todos={todos} />
				</Col>

			</Row>

		</Container>
	)
}

export default TodosPage
