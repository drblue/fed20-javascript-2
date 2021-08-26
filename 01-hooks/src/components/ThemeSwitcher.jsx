import React from 'react'
import { useThemeContext } from '../contexts/ThemeContextProvider'
import Button from 'react-bootstrap/Button'

const ThemeSwitcher = () => {
	const { toggleTheme } = useThemeContext()

	return (
		<Button variant="danger" onClick={toggleTheme}>Switch theme</Button>
	)
}

export default ThemeSwitcher
