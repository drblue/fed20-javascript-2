import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import TodoPage from './pages/TodoPage'
import TodosPage from './pages/TodosPage'

function App() {
	return (
		<>
			<Navigation />

			<Container id="App" className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/logout" element={<LogoutPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/todos" element={<TodosPage />} />
					<Route path="/todos/:id" element={<TodoPage />} />
					<Route element={<PageNotFound />} />
				</Routes>
			</Container>

			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</>
	)
}

export default App
