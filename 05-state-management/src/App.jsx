import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import CounterPage from './pages/CounterPage'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import ReducerCounterPage from './pages/ReducerCounterPage'
import ReducerContextCounterPage from './pages/ReducerContextCounterPage'

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

					<Route path="/counter">
						<CounterPage />
					</Route>

					<Route path="/reducer-counter">
						<ReducerCounterPage />
					</Route>

					<Route path="/reducer-context-counter">
						<ReducerContextCounterPage />
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
