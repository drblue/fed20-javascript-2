import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Link to="/" className="navbar-brand">
					<span role="img" aria-label="A note with a pen">📝</span> Firestore Todos
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">

						<NavLink to="/todos" className="nav-link">Todos</NavLink>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
