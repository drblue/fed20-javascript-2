import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const useGetTodos = () => {
	const [todos, setTodos] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(async () => {
		// get reference to collection 'todos'
		const ref = collection(db, 'todos')
		const snapshot = await getDocs(ref)

		// console.log("got that snapshot 📸", snapshot)
		const data = snapshot.docs.map(doc => {
			return {
				id: doc.id,
				...doc.data() // title, completed
			}
		})

		console.log(data)
		setTodos(data)
		setLoading(false)
	}, [])

	return {
		loading,
		todos,
	}
}

export default useGetTodos
