import React from 'react'
import { ListGroup } from 'react-bootstrap'

const EmployeeList = ({ employees }) => {
	return (
		<ListGroup>
			{employees.map((employee, i) => (
				<ListGroup.Item key={i}>
					{employee.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default EmployeeList
