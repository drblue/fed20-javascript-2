import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import TodoPage from './pages/TodoPage'
import TodosPage from './pages/TodosPage'

function App() {
	return (
		<>
			<Navigation />

			<div id="App">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/todos" element={<TodosPage />} />
					<Route path="/todos/:id" element={<TodoPage />} />
					<Route element={<PageNotFound />} />
				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</>
	)
}

export default App
