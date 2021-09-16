import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../features/account/accountSlice'
import employeesReducer from '../features/employees/employeesSlice'
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
	reducer: {
		account: accountReducer,
		employees: employeesReducer,
		todos: todosReducer,
	},
})
