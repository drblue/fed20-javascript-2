import React, { useState, useEffect, useRef } from 'react'

const Greeter = () => {
	const [name, setName] = useState("")
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
		console.log("Form has been submitted")
		alert(`Hello ${name}`)
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				ref={inputRef}
				onChange={e => setName(e.target.value)}
				value={name}
				placeholder="Enter your name"
			/>

			<button type="submit">Say hi</button>

			<p>Your name is {name} and it was {prevNameRef.current}.</p>
		</form>
	)
}

export default Greeter;
