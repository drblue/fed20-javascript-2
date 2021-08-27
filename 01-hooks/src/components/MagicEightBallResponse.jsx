import React, { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import useFetch from '../hooks/useFetch'

const MagicEightBallResponse = ({ question }) => {
	const { data, error, isLoading, setUrl } = useFetch()

	useEffect(() => {
		setUrl('https://yesno.wtf/api?q=' + encodeURI(question))
	}, [question])

	if (isLoading) {
		return (<p>Loading...</p>)
	}

	if (error) {
		return (<Alert variant="danger">{error}</Alert>)
	}

	if (!data) {
		return null
	}

	return (
		<>
			<p className="display-1"><strong>{data.answer.toUpperCase()}!</strong></p>
			<img src={data.image} />
		</>
	)
}

export default MagicEightBallResponse
