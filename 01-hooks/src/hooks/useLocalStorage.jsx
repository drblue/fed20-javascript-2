import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue = null) => {
	const [value, setValue] = useState(() => {
		console.log(`Getting '${key}' from localStorage'`)

		// get value from localStorage
		const jsonValue = localStorage.getItem(key)

		if (!jsonValue) {
			console.log(`No previous value for '${key}' found in localStorage, returning default value '${defaultValue}'`)
			return defaultValue
		}

		console.log(`Found value '${jsonValue}' for '${key}' in localStorage, returning it'`)
		const value = JSON.parse(jsonValue)

		return value;
	})

	useEffect(() => {
		if (typeof value === 'undefined') {
			return;
		}

		const jsonValue = JSON.stringify(value)
		console.log(`Setting '${key}' to '${jsonValue}'`)
		localStorage.setItem(key, jsonValue)
	}, [value])

	return [
		value,
		setValue
	]
}

export default useLocalStorage
