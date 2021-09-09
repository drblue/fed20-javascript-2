import React from 'react'
import Container from 'react-bootstrap/Container'
import ReducerContextCounter from '../components/ReducerContextCounter'

const ReducerContextCounterPage = () => {
	return (
		<Container className="py-3">
			<h1>Reducer Context Counter</h1>

			<div className="mb-5">
				<h2>Home</h2>
				<ReducerContextCounter />
			</div>

			<div className="mb-5">
				<h2>Away</h2>
				<ReducerContextCounter />
			</div>
		</Container>
	)
}

export default ReducerContextCounterPage
