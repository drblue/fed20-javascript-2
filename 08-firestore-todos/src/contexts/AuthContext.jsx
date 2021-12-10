import React, { createContext, useContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logout = () => {
	}

	// add auth-state-observer here (somehow... 😈)

	const contextValues = {
		// here be everything the children needs/should be able to use
		currentUser,
		loading,
		login,
		logout,
		signup,
	}

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	)
}

export { useAuthContext, AuthContextProvider as default }
