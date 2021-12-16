import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { useAuthContext } from '../contexts/AuthContext'

const CreateNewTodoForm = () => {
	const inputTitle = useRef()
	const dueDate = useRef()
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
			dueDate: Timestamp.fromDate(new Date(dueDate.current.value)),
		})

		inputTitle.current.value = ''
		dueDate.current.value = ''
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-2" controlId="title">
				<Form.Label>Todo title</Form.Label>
				<Form.Control type="text" ref={inputTitle} required />
			</Form.Group>

			<Form.Group className="mb-2" controlId="due-date">
				<Form.Label>Due Date</Form.Label>
				<Form.Control type="date" ref={dueDate} required />
			</Form.Group>

			<Button type="submit" variant="success">Create</Button>
		</Form>
	)
}

export default CreateNewTodoForm
