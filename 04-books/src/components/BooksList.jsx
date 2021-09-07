import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

const BooksList = ({ books }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th></th>
				</tr>
			</thead>

			<tbody>
				{books.map((book, index) => (
					<tr key={index}>
						<td>{book.id}</td>
						<td>{book.title}</td>
						<td>
							<Link to={`/books/${book.id}`} className="btn btn-primary btn-sm">Go to book</Link>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default BooksList
