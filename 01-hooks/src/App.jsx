import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Clock from './components/Clock'

function App() {
	const [showClock, setShowClock] = useState(false)

	const toggleClock = () => {
		setShowClock(prevState => !prevState)
	}

	return (
		<div className="App">
			<Container>
				<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

				<span id="toggleClock" role="img" aria-label="A clock" onClick={toggleClock} className="display-2">🕰</span>

				{showClock && (
					<div id="clock-wrapper" className="display-1 text-center">
						<Clock />
					</div>
				)}
			</Container>
		</div>
	)
}

export default App
