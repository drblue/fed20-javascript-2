import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ThemeContextProvider from './contexts/ThemeContextProvider'
import './App.scss'

ReactDOM.render(
	<React.StrictMode>

		<BrowserRouter>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</BrowserRouter>

	</React.StrictMode>,
	document.getElementById('root')
)
