import React, { createContext, useContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { PacmanLoader } from 'react-spinners'
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
		return signOut(auth)
	}

	// add auth-state-observer here (somehow... 😈)
	useEffect(() => {
		// listen for auth-state changes
		onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setLoading(false)
		})
	}, [])

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
			{loading && (
				<div id="spinner">
					<PacmanLoader color={"#888"} size={50} />
				</div>
			)}
			{!loading && children}
		</AuthContext.Provider>
	)
}

export { useAuthContext, AuthContextProvider as default }
