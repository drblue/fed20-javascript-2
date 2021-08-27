import React, { useEffect, useState } from 'react'

const useFetch = (initialUrl = null) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [url, setUrl] = useState(initialUrl)

	useEffect(() => {
		if (!url) {
			return;
		}

		// remove previous result (if any)
		setData(null)

		// set loading to true
		setIsLoading(true)

		// fetch data from API
		fetch(url)
			.then(res => res.json())
			.then(res => {
				setTimeout(() => {
					// clear any previous error
					setError(false)

					// set response as data
					setData(res)

					// set loading finished
					setIsLoading(false)
				}, 1500)
			})
			.catch(err => {
				// set error
				setError(err.message)

				// set loading finished
				setIsLoading(false)
			})
	}, [url])

	return {
		data,
		error,
		isLoading,
		url,
		setUrl,
	}
}

export default useFetch
