import ACTIONS from '../actions/countActions'

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return {
				count: state.count + action.payload.amount
			}
		case ACTIONS.INCREMENT:
			return {
				count: state.count + 1
			}
		case ACTIONS.DECREMENT:
			return {
				count: state.count - 1
			}
		case ACTIONS.RESET:
			return {
				count: 0
			}
		case ACTIONS.SUBTRACT:
			return {
				count: state.count - action.payload.amount
			}
		default:
			throw new Error('Unkown action type: ' + action.type)
	}
}

export default reducer
