import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue = null) => {
	const [value, setValue] = useState(() => {
		// get value from localStorage
		const jsonValue = localStorage.getItem(key)

		return jsonValue
			? JSON.parse(jsonValue)
			: defaultValue;
	})

	useEffect(() => {
		if (typeof value === 'undefined') {
			return;
		}

		localStorage.setItem(key, JSON.stringify(value))
	}, [value])

	return [
		value,
		setValue
	]
}

export default useLocalStorage
