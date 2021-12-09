import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const contextValues = {
		// here be everything the children needs/should be able to use
		signup,
	}

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	)
}

export { useAuthContext, AuthContextProvider as default }
