import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState('dark')

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	const isDarkTheme = () => theme === 'dark'
	const isLightTheme = () => theme === 'light'

	const setDarkTheme = () => setTheme('dark')
	const setLightTheme = () => setTheme('light')

	const values = {
		theme,
		isDarkTheme,
		isLightTheme,
		toggleTheme,
		setDarkTheme,
		setLightTheme,
	}

	return (
		<ThemeContext.Provider value={values}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
