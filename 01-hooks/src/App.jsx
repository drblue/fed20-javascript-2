import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import PointsCounter from './components/PointsCounter'

function App() {

	return (
		<div className="App">
			<Container>
				<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

				<div className="my-3">
					<h2>Home</h2>

					<PointsCounter />
				</div>

				<div className="my-3">
					<h2>Away</h2>

					<PointsCounter />
				</div>
			</Container>
		</div>
	)
}

export default App
