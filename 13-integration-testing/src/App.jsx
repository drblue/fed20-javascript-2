import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import TodosPage from './pages/TodosPage'

function App() {
	return (
		<>
			<Navigation />

			<Container id="App" className="py-3">
				<Routes>
					{/* Guest routes */}
					<Route path="/" element={<HomePage />} />

					<Route path="/todos" element={<TodosPage />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
