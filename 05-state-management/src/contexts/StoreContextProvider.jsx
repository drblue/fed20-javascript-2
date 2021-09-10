import React, { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/countReducer'

const initialState = {
	count: 0,
	todos: [],
	user: false,
}

const DispatchContext = createContext()
const StateContext = createContext()

export const useDispatchContext = () => {
	return useContext(DispatchContext)
}

export const useStateContext = () => {
	return useContext(StateContext)
}

const StoreContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<DispatchContext.Provider value={dispatch}>
			<StateContext.Provider value={state}>
				{children}
			</StateContext.Provider>
		</DispatchContext.Provider>
	)
}

export default StoreContextProvider
