import React from 'react'
import Container from 'react-bootstrap/Container'
import FiveCountsCounter from './components/FiveCountsCounter'
import MagicEightBall from './components/MagicEightBall'
import PointsCounter from './components/PointsCounter'
import Posts from './components/Posts'
import ThemeContextProvider from './contexts/ThemeContextProvider'

function App() {
	return (
		<ThemeContextProvider>
			<div className="App">
				<Container>
					<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

					<div className="my-3">
						<h2>Points Counter</h2>
						<PointsCounter />
					</div>

					<div className="my-3">
						<h2>Five Counts Counter</h2>
						<FiveCountsCounter />
					</div>

					<hr className="my-5" />

					<div className="text-center">
						<MagicEightBall />
					</div>

					<div>
						<Posts />
					</div>
				</Container>
			</div>
		</ThemeContextProvider>
	)
}

export default App
