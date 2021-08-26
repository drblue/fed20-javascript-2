import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Clock from './components/Clock'
import ThemeSwitcher from './components/ThemeSwitcher'
import ThemeContextProvider from './contexts/ThemeContextProvider'

function App() {
	const [theme, setTheme] = useState('dark')

	return (
		<ThemeContextProvider>
			<div className="App">
				<Container>
					<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

					<div className="my-5 display-1 d-flex justify-content-center">
						<Clock />
					</div>

					<ThemeSwitcher />
				</Container>
			</div>
		</ThemeContextProvider>
	)
}

export default App
