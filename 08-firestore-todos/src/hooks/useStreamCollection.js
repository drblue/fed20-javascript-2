import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const useStreamCollection = (col) => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// get reference to collection
		const ref = collection(db, col)

		const unsubscribe = onSnapshot(ref, (snapshot) => {
			const data = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data() // title, completed
				}
			})

			setData(data)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	return {
		loading,
		data,
	}
}

export default useStreamCollection
