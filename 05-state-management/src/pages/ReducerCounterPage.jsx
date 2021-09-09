import React from 'react'
import Container from 'react-bootstrap/Container'
import ReducerCounter from '../components/ReducerCounter'

const ReducerCounterPage = () => {
	return (
		<Container className="py-3">
			<h1>Reducer Counter</h1>

			<div className="mb-5">
				<h2>Home</h2>
				<ReducerCounter />
			</div>

			<div className="mb-5">
				<h2>Away</h2>
				<ReducerCounter />
			</div>
		</Container>
	)
}

export default ReducerCounterPage
