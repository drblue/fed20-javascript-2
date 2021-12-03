import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const useGetCollection = (col) => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(true)

	const getData = async () => {
		// get reference to collection
		const ref = collection(db, col)
		const snapshot = await getDocs(ref)

		const data = snapshot.docs.map(doc => {
			return {
				id: doc.id,
				...doc.data() // title, completed
			}
		})

		setData(data)
		setLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return {
		getData,
		loading,
		data,
	}
}

export default useGetCollection
