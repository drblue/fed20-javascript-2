import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { useAuthContext } from '../contexts/AuthContext'
import { db, storage } from '../firebase'

const useUploadMeme = () => {
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(null)
	const [isMutating, setIsMutating] = useState(null)
	const [isSuccess, setIsSuccess] = useState(null)
	const [progress, setProgress] = useState(null)

	const { currentUser } = useAuthContext()

	const mutate = async (image) => {
		// reset internal state
		setError(null)
		setIsError(null)
		setIsSuccess(null)
		setIsMutating(true)

		// bail if not an image
		if (!image instanceof File) {
			setError("That is no file")
			setIsError(true)
			setIsMutating(false)
			return
		}

		// construct filename to save image as
		const storageFilename = `${Date.now()}-${image.name}`

		// construct full path in storage to save image as
		const storageFullPath = `memes/${currentUser.uid}/${storageFilename}`

		// create a reference in storage to upload image to
		const storageRef = ref(storage, storageFullPath)

		// start upload of image
		const uploadTask = uploadBytesResumable(storageRef, image)

		// attach upload observer
		uploadTask.on('state_changed', (uploadTaskSnapshot) => {
			// update progress
			setProgress(
				Math.round(
					(uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 100
				)
			)
		})
	}

	return {
		error,
		isError,
		isMutating,
		isSuccess,
		mutate,
		progress,
	}
}

export default useUploadMeme
