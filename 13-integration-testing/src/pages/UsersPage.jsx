import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import UserList from '../components/UserList'
import { getRandomUsers } from '../services/RandomUser'

const UsersPage = () => {
	const [users, setUsers] = useState([])

	const getUsers = async() => {
		const res = await getRandomUsers()
		setUsers(res.results)
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<Container className="py-3">
			<h1>Users</h1>

			<UserList users={users} />
		</Container>
	)
}

export default UsersPage
