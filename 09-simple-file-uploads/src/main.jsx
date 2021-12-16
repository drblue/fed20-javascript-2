import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import './App.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 2, // 2 minutes
			cacheTime: 1000 * 60 * 60 * 4, // 4 hours
		},
	},
})

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>

				<App />

			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
