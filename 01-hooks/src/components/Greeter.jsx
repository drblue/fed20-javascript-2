import React, { useState, useEffect, useRef } from 'react'

const Greeter = () => {
	const [name, setName] = useState(null)
	const inputRef = useRef()
	const prevNameRef = useRef()

	useEffect(() => {
		// focus on input name field
		inputRef.current.focus()
		console.log(inputRef)
	}, [])

	useEffect(() => {
		prevNameRef.current = name
	}, [name])

	const handleFormSubmit = (e) => {
		e.preventDefault()
		console.log("Form was submitted")
		setName(inputRef.current.value)
	}

	const getGreeting = () => {
		if (!name) {
			return false
		}

		if (prevNameRef.current) {
			return (<p>Your name is {name} and the previous human was called {prevNameRef.current}.</p>)
		}

		return (<p>Your name is {name}.</p>)
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				ref={inputRef}
				placeholder="Enter your name"
			/>

			<button type="submit">Say hi</button>

			{getGreeting()}
		</form>
	)
}

export default Greeter;
