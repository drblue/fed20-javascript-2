import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const useGetTodo = id => {
	const [loading, setLoading] = useState(true)
	const [todo, setTodo] = useState()

	useEffect(async () => {
		setLoading(true)

		// get document reference
		const ref = doc(db, 'todos', id)
		const snapshot = await getDoc(ref)
		console.log("mmm, data 😋", snapshot.data())

		if (!snapshot.exists()) {
			setTodo(false)
			setLoading(false)
			return
		}

		setTodo(snapshot.data())
		setLoading(false)
	}, [id])

	return {
		loading,
		todo,
	}
}

export default useGetTodo
