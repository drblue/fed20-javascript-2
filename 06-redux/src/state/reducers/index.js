import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
	account: accountReducer,
	user: userReducer,
})

export default reducers
