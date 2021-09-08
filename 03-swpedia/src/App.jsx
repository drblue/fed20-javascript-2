import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import HomePage from './components/pages/HomePage'
import Navigation from './components/partials/Navigation'
import PageNotFound from './components/pages/PageNotFound'
import FilmsPage from './components/pages/FilmsPage'
import FilmPage from './components/pages/FilmPage'
import PeoplePage from './components/pages/PeoplePage'
import PersonPage from './components/pages/PersonPage'

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

					<Route path="/films/:id">
						<FilmPage />
					</Route>

					<Route path="/films">
						<FilmsPage />
					</Route>

					<Route path="/people/:id">
						<PersonPage />
					</Route>

					<Route path="/people">
						<PeoplePage />
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
