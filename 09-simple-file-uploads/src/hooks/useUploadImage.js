import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import { db, storage } from '../firebase'

const useUploadImage = () => {
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(false)
	const [isMutating, setIsMutating] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [uploadProgress, setUploadProgress] = useState(null)

	const mutate = async (image) => {
		// reset internal state
		setIsMutating(true)
		setIsError(false)
		setIsSuccess(false)
		setError(null)

		if (!image) {
			return
		}

		// generate a uuid for the file
		const uuid = uuidv4()

		// find file extension
		const ext = image.name.substring(image.name.lastIndexOf('.') + 1)

		// create a reference to upload the file to
		const fileRef = ref(storage, `images/${uuid}.${ext}`)

		// upload image to fileRef
		const uploadTask = uploadBytesResumable(fileRef, image)

		// attach upload observer
		uploadTask.on('state_changed', (uploadTaskSnapshot) => {
			setUploadProgress(Math.round((uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 100))

		}, (e) => {
			console.log("NOT so great success, fail!", e)

			setError(`Image failed to upload due to the following error: ${e.message}`)
			setIsError(true)
			setIsMutating(false)

		}, async () => {
			// get download url to uploaded file
			const url = await getDownloadURL(fileRef)

			// get reference to collection 'images'
			const collectionRef = collection(db, 'images')

			// create document in db for the uploaded file
			await addDoc(collectionRef, {
				name: image.name,
				path: fileRef.fullPath,
				size: image.size,
				type: image.type,
				ext,
				url,
				uuid,
			})

			// we're done
			setIsMutating(false)
			setIsSuccess(true)
			setUploadProgress(null)
		})
	}

	return {
		error,
		isError,
		isMutating,
		isSuccess,
		mutate,
		uploadProgress,
	}
}

export default useUploadImage
