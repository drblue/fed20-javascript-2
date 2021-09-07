import React from 'react'
import Table from 'react-bootstrap/Table'

const BooksList = ({ books }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
				</tr>
			</thead>

			<tbody>
				{books.map((book, index) => (
					<tr key={index}>
						<td>{book.id}</td>
						<td>{book.title}</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default BooksList
