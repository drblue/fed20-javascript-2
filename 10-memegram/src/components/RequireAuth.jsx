import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const RequireAuth = ({ children, redirectTo }) => {
	const { currentUser } = useAuthContext()

	return (
		currentUser
			? children
			: <Navigate to={redirectTo} />
	)
}

export default RequireAuth
