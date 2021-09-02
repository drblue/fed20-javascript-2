import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import HomePage from './pages/HomePage'
import Navigation from './pages/partials/Navigation'
import PageNotFound from './pages/PageNotFound'
import PostsPage from './pages/PostsPage'
import RandomDadJokePage from './pages/RandomDadJokePage'
import RandomDogPage from './pages/RandomDogPage'
import RandomJokePage from './pages/RandomJokePage'

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

					<Route path="/posts">
						<PostsPage />
					</Route>

					<Route path="/random-dad-joke">
						<RandomDadJokePage />
					</Route>

					<Route path="/random-doggo">
						<RandomDogPage />
					</Route>

					<Route path="/random-joke/:type?">
						<RandomJokePage />
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
