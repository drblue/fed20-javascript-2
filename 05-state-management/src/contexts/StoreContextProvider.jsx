import React, { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/countReducer'

const initialState = {
	count: 0,
}

const StoreContext = createContext()

export const useStoreContext = () => {
	return useContext(StoreContext)
}

const StoreContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
