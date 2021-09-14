const initialState = {
	isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'login':
			return {
				...state,
				isLoggedIn: true,
			}
		case 'logout':
			return {
				...state,
				isLoggedIn: false,
			}
		case 'toggle':
			return {
				...state,
				isLoggedIn: !state.isLoggedIn,
			}
		default:
			return state
	}
}

export default userReducer
