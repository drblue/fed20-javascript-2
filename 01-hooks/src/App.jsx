import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Greeter from './components/Greeter'

function App() {

	return (
		<div className="App">
			<Container>
				<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

				<Greeter />
			</Container>
		</div>
	)
}

export default App
