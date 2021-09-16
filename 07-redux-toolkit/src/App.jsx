import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AccountPage from './pages/AccountPage'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import TodosPage from './pages/TodosPage'

function App() {
	return (
		<>
			<Navigation />

			<div id="App">
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route path="/account">
						<AccountPage />
					</Route>

					<Route path="/todos">
						<TodosPage />
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
