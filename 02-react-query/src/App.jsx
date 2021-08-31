import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './pages/partials/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import RandomDadJokePage from './pages/RandomDadJokePage'

function App() {
	return (
		<>
			<Navigation />

			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>

				<Route path="/random-dad-joke">
					<RandomDadJokePage />
				</Route>

				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</>
	)
}

export default App
