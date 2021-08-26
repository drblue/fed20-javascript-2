import React, { useState, useEffect, useRef } from 'react'

const slowMultiplier = (a) => {
	console.log("Running slow operation for:", a);
	let j;
	for (let i = 0; i < 800000000; i++) {
		j = i + 1;
	}
	return a * 2;
}

const Multiplier = () => {
	const [num, setNum] = useState("")
	const [counter, setCounter] = useState(0)
	const inputRef = useRef()

	useEffect(() => {
		// focus on input field
		inputRef.current.focus()
		console.log(inputRef)
	}, [])

	const handleFormSubmit = (e) => {
		e.preventDefault()
		console.log("Form was submitted")
		setNum(inputRef.current.value)
	}

	const multipliedNum = slowMultiplier(num)

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<input
					type="number"
					ref={inputRef}
				/>

				<button type="submit">Multiply</button>

				<p>Sum is {multipliedNum}</p>
			</div>

			<div>
				<button onClick={() => setCounter(prevCount => prevCount + 1)}>Increment counter</button>
				<p>Counter is {counter}</p>
			</div>

		</form>
	)
}

export default Multiplier;
