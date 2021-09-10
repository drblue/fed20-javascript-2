import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'
import './App.scss'
import StoreContextProvider from './contexts/StoreContextProvider'

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
				<StoreContextProvider>
					<App />
					<ReactQueryDevtools initialIsOpen={false} />
				</StoreContextProvider>
			</BrowserRouter>
		</QueryClientProvider>

	</React.StrictMode>,
	document.getElementById('root')
)
