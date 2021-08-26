import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContextProvider'
import Button from 'react-bootstrap/Button'

const ThemeSwitcher = () => {
	const { toggleTheme } = useContext(ThemeContext)

	return (
		<Button variant="danger" onClick={toggleTheme}>Switch theme</Button>
	)
}

export default ThemeSwitcher
