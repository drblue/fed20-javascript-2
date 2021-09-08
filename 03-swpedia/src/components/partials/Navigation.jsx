import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Link to="/" className="navbar-brand">
					<span role="img" aria-label="A (space) rocket">🚀</span> SWPedia
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">

							<NavLink to="/films" className="nav-link">
								Films
							</NavLink>

							<NavLink to="/people" className="nav-link">
								People
							</NavLink>

						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
