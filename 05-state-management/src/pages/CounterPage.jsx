import React from 'react'
import Container from 'react-bootstrap/Container'
import PointsCounter from '../components/PointsCounter'

const CounterPage = () => {
	return (
		<Container className="py-3">
			<h1>Counter</h1>

			<div className="mb-5">
				<h2>Home</h2>
				<PointsCounter />
			</div>

			<div className="mb-5">
				<h2>Away</h2>
				<PointsCounter />
			</div>
		</Container>
	)
}

export default CounterPage
