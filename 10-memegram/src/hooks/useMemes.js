import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'

const useMemes = (params = {}) => {
	const { currentUser } = useAuthContext()

	// create ref to collection 'memes'
	const colMemesRef = collection(db, 'memes')

	const queryKey = params.fetchOnlyCurrentUser
		? ['memes', currentUser.uid]
		: ['memes']

	// create query for colMemesRef, order result in reverse cronological order
	const queryRef = params.fetchOnlyCurrentUser
		? query(colMemesRef, where('owner', '==', currentUser.uid), orderBy('created', 'desc'))
		: query(colMemesRef, orderBy('created', 'desc'))

	const memesQuery = useFirestoreQueryData(['memes'], queryRef, {
		idField: '_id',
	})

	return memesQuery
}

export default useMemes
