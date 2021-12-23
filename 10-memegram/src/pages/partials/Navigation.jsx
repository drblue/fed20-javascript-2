import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useAuthContext } from '../../contexts/AuthContext'

const Navigation = () => {
	const { currentUser } = useAuthContext()

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Link to="/" className="navbar-brand">
					<span role="img" aria-label="A laughing crying face">😂</span> memegram
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">

						<NavLink to="/" className="nav-link">All memes</NavLink>

						{
							currentUser ? (
								<>
									<NavLink to="/my-memes" className="nav-link">My memes</NavLink>
									<NavLink to="/upload" className="nav-link">Upload</NavLink>

									<NavDropdown title={currentUser.displayName || currentUser.email} id="basic-nav-dropdown">
										<NavLink to="/update-profile" className="dropdown-item">Update Profile</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/logout" className="dropdown-item">Log Out</NavLink>
									</NavDropdown>
								</>
							) : (
								<>
									<NavLink to="/login" className="nav-link">Login</NavLink>
									<NavLink to="/signup" className="nav-link">Signup</NavLink>
								</>
							)
						}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
