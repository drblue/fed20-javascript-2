import ACTIONS from '../actions/countActions'

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return {
				...state,
				count: state.count + action.payload.amount
			}
		case ACTIONS.INCREMENT:
			return {
				...state,
				count: state.count + 1
			}
		case ACTIONS.DECREMENT:
			return {
				...state,
				count: state.count - 1
			}
		case ACTIONS.RESET:
			return {
				...state,
				count: 0
			}
		case ACTIONS.SUBTRACT:
			return {
				...state,
				count: state.count - action.payload.amount
			}
		default:
			throw new Error('Unkown action type: ' + action.type)
	}
}

export default reducer
