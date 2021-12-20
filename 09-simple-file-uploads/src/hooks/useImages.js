import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../firebase'

const useImages = () => {
	// create ref to collection 'images'
	const imagesRef = collection(db, 'images')

	const imagesQuery = useFirestoreQueryData(['images'], imagesRef, {
		idField: '_id',
		subscribe: true,
	}, {
		refetchOnMount: 'always',
	})

	return imagesQuery
}

export default useImages
