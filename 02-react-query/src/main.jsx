import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import ThemeContextProvider from './contexts/ThemeContextProvider'
import './App.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 10, // 10 seconds
		},
	},
})

ReactDOM.render(
	<React.StrictMode>

		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</BrowserRouter>
		</QueryClientProvider>

	</React.StrictMode>,
	document.getElementById('root')
)
