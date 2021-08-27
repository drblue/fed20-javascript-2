import React from 'react'
import Container from 'react-bootstrap/Container'
import MagicEightBall from './components/MagicEightBall'
import ThemeContextProvider from './contexts/ThemeContextProvider'

function App() {
	return (
		<ThemeContextProvider>
			<div className="App">
				<Container>
					<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

					<div className="text-center">
						<MagicEightBall />
					</div>
				</Container>
			</div>
		</ThemeContextProvider>
	)
}

export default App
