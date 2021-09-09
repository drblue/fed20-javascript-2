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
					<span role="img" aria-label="A brown cardboard box">📦🧑🏼‍💼</span> State Management
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">

							<NavDropdown title={<><span role="img" aria-label="an abacus">🧮</span> Counters</>} id="basic-nav-dropdown">
								<NavLink to="/counter" className="dropdown-item">Counter</NavLink>
								<NavLink to="/reducer-counter" className="dropdown-item">Reducer Counter</NavLink>
								<NavLink to="/reducer-context-counter" className="dropdown-item">Reducer Context Counter</NavLink>
								{/* <NavDropdown.Divider /> */}
							</NavDropdown>

						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
