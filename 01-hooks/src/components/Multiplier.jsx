import React, { useState, useEffect, useRef, useMemo } from 'react'

const slowMultiplier = (a) => {
	if (!a) {
		return;
	}

	console.log("Running slow operation for:", a);
	let j;
	for (let i = 0; i < 1400000000; i++) {
		j = i + 1;
	}
	console.log("Done running bogus operation");
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

	useEffect(() => console.log(`Num changed to ${num}`), [num])

	const multipliedNum = useMemo(() => {
		return slowMultiplier(num)
	}, [num])

	// Would work, but would trigger two re-renders as we change a state two times
	/*
	useEffect(() => {
		const multipliedNum = slowMultiplier(num)
		setSum(multipliedNum)
	}, [num])
	*/

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<div>
					<input
						type="number"
						ref={inputRef}
					/>

					<button type="submit">Multiply</button>

					<p>Sum is {multipliedNum}</p>
				</div>

			</form>

			<div>
				<button onClick={() => setCounter(prevCount => prevCount + 1)}>Increment counter</button>
				<p>Counter is {counter}</p>
			</div>
		</>
	)
}

export default Multiplier;
