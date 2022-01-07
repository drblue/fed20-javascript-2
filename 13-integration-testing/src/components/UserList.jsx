import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

const UserList = ({ users }) => {
	return (
		<>
			<ListGroup role="list" className="user-list">
				{users.map(user => {
					return (
						<ListGroup.Item
							action
							// as={Link}
							className={`user-list-item`}
							key={user.login.uuid}
							role="listitem"
							// to={`/users/${user.login.username}`}
						>
							<Image roundedCircle={true} fluid={true} src={user.picture.large} className="user-photo" />
							<div className="user-info">
								<h2 className="h6">{user.login.username}</h2>
								<span>{user.name.first} {user.name.last}</span>
							</div>
						</ListGroup.Item>
					)
				})}
			</ListGroup>
		</>
	)
}

export default UserList
