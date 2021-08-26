import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Multiplier from './components/Multiplier'

function App() {

	return (
		<div className="App">
			<Container>
				<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

				<Multiplier />
			</Container>
		</div>
	)
}

export default App
