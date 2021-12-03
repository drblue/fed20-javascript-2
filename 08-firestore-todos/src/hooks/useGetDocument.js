import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const useGetDocument = (col, id) => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState()

	useEffect(async () => {
		setLoading(true)

		// get document reference
		const ref = doc(db, col, id)
		const snapshot = await getDoc(ref)

		if (!snapshot.exists()) {
			setData(false)
			setLoading(false)
			return
		}

		setData(snapshot.data())
		setLoading(false)
	}, [id])

	return {
		loading,
		data,
	}
}

export default useGetDocument
