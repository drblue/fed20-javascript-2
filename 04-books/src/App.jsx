import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import BookPage from './pages/BookPage'
import BooksPage from './pages/BooksPage'
import CreateBookPage from './pages/CreateBookPage'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import UpdateBookPage from './pages/UpdateBookPage'

function App() {
	return (
		<>
			<Navigation />

			<div id="App">
				<GlobalFetchingSpinner />

				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route path="/books/create">
						<CreateBookPage />
					</Route>

					<Route path="/books/:id/edit">
						<UpdateBookPage />
					</Route>

					<Route path="/books/:id">
						<BookPage />
					</Route>

					<Route path="/books">
						<BooksPage />
					</Route>

					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default App
