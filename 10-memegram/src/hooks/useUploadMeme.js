import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
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

		try {
			// create a reference in storage to upload image to
			const storageRef = ref(storage, storageFullPath)

			// start upload of image
			const uploadTask = uploadBytesResumable(storageRef, image)

			// attach upload observer
			uploadTask.on('state_changed', (uploadTaskSnapshot) => {
				// update progress
				setProgress(
					Math.round(
						(uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 1000
					) / 10
				)
			})

			// wait for upload to be completed
			await uploadTask.then()

			// get download url to uploaded image
			const url = await getDownloadURL(storageRef)

			// create reference to db-collection 'memes'
			const collectionRef = collection(db, 'memes')

			// create document in db for the uploaded image
			await addDoc(collectionRef, {
				created: serverTimestamp(),
				name: image.name,
				owner: currentUser.uid,
				path: storageRef.fullPath,
				size: image.size,
				type: image.type,
				url,
			})

			// profit! 💰
			setProgress(null)
			setIsSuccess(true)
			setIsMutating(false)

		} catch (e) {
			console.log("ERROR! DANGER WILL ROBINSON!", e)

			setError(e.message)
			setIsError(true)
			setIsMutating(false)
			setIsSuccess(false)
		}
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
