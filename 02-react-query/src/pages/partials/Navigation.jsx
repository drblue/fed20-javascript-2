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
					<span role="img" aria-label="A person holding up a hand">🙋🏽</span> React Query
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">

							<NavLink to="/random-dad-joke" className="nav-link">
								<span role="img" aria-label="a laughing face with tears">😂</span> Random Dad Joke
							</NavLink>

							<NavLink to="/random-doggo" className="nav-link">
								<span role="img" aria-label="a dog">🐶</span> Random doggo
							</NavLink>

						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
