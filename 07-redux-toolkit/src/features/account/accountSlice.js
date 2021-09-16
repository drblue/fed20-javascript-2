import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	balance: 0,
}

export const accountSlice = createSlice({
	name: 'account',
	initialState,			// initialState: initialState
	reducers: {
		deposit: (state, action) => {
			state.balance += action.payload
			return state
		},
		withdraw: (state, action) => {
			state.balance -= action.payload
			return state
		},
	},
})

// Action creators are generated for each reducer function
export const { profit, withdraw } = accountSlice.actions

// Export the reducer
export default accountSlice.reducer
