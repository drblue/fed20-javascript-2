import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { db } from '../firebase'
import { collection, addDoc, doc, serverTimestamp } from 'firebase/firestore'
import { useAuthContext } from '../contexts/AuthContext'

const CreateNewTodoForm = () => {
	const inputTitle = useRef()
	const { currentUser } = useAuthContext()

	const handleSubmit = async e => {
		e.preventDefault()

		if (!inputTitle.current.value.length) {
			return
		}

		// make firestore doc, plz
		await addDoc(collection(db, 'todos'), {
			title: inputTitle.current.value,
			completed: false,
			timestamp: serverTimestamp(),
			owner: currentUser.uid,
		})

		inputTitle.current.value = ''
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-2" controlId="title">
				<Form.Label>Todo title</Form.Label>
				<Form.Control type="text" ref={inputTitle} />
			</Form.Group>

			<Button type="submit" variant="success">Create</Button>
		</Form>
	)
}

export default CreateNewTodoForm
