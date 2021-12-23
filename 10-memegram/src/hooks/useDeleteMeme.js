import { useState } from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import { db, storage } from '../firebase'

const useDeleteMeme = (meme) => {
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(null)
	const [isMutating, setIsMutating] = useState(null)

	const mutate = async () => {
		// reset internal state
		setError(null)
		setIsError(false)
		setIsMutating(true)

		try {
			// delete meme from storage
			await deleteObject(ref(storage, meme.path))

			// delete meme from db
			await deleteDoc(doc(db, 'memes', meme._id))

		} catch (e) {
			setError(e.message)
			setIsError(true)

		} finally {
			setIsMutating(false)
		}
	}

	return {
		error,
		isError,
		isMutating,
		mutate,
	}
}

export default useDeleteMeme
