import React, { useState } from 'react'

const useCounter = (initialValue = 0) => {
	const [counter, setCounter] = useState(initialValue)

	const add = (amount = 1) => {
		if (amount > 0) {
			modifyCounter(amount)
		}
	}

	const subtract = (amount = -1) => {
		if (amount < 0) {
			modifyCounter(amount)
		}
	}

	const modifyCounter = (amount) => {
		setCounter(prevCounter => prevCounter + amount)
	}

	return {
		counter,
		add,
		subtract,
	}
}

export default useCounter
