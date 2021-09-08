import React from 'react'
import Container from 'react-bootstrap/Container'

const HomePage = () => {
	return (
		<Container className="py-3">
			<h1>Welcome!</h1>

			<p>SWAPI base URL: {import.meta.env.VITE_SWAPI_BASE_URL}</p>
		</Container>
	)
}

export default HomePage
