const initialState = {
	balance: 0,
}

const accountReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'deposit':
			return {
				...state,
				balance: state.balance + action.payload.amount,
			}
		case 'withdraw':
			return {
				...state,
				balance: state.balance - action.payload.amount,
			}
		default:
			return state
	}
}

export default accountReducer
