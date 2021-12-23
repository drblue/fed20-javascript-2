import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

const useMemes = () => {
	// create ref to collection 'memes'
	const colMemesRef = collection(db, 'memes')

	// create query for colMemesRef, order result in reverse cronological order
	const queryRef = query(colMemesRef, orderBy('created', 'desc'))

	const memesQuery = useFirestoreQueryData(['memes'], queryRef, {
		idField: '_id',
	})

	return memesQuery
}

export default useMemes
