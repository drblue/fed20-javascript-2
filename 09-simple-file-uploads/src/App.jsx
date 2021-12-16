import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'

function App() {
	return (
		<>
			<Navigation />

			<Container id="App" className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
