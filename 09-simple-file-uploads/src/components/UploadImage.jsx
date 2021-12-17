import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { v4 as uuidv4 } from 'uuid'
import { collection, addDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../firebase'

const UploadImage = () => {
	const [image, setImage] = useState(null)
	const [message, setMessage] = useState()
	const [uploadProgress, setUploadProgress] = useState(null)

	const handleFileChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0])
		}
		console.log("File changed!", e.target.files[0])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		setUploadProgress(null)

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

			setMessage({
				type: "warning",
				msg: `Image failed to upload due to the following error: ${e.message}`,
			})
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

			setMessage({
				type: "success",
				msg: "Image successfully uploaded 🤩",
			})
		})
	}

	const handleReset = () => {
		setImage(null)
		setMessage(null)
		setUploadProgress(null)
	}

	return (
		<>
			{message && <Alert variant={message.type}>{message.msg}</Alert>}

			<Form onSubmit={handleSubmit} onReset={handleReset}>
				<Form.Group controlId="formImage" className="mb-3">
					<Form.Label>Choose image to upload</Form.Label>
					<Form.Control type="file" onChange={handleFileChange} />

					<Form.Text className="text-muted">
						{
							image
								? `${image.name} (${Math.round(image.size/1024)} kB)`
								: 'No image selected'
						}
					</Form.Text>
				</Form.Group>

				<Button type="submit" variant="primary">Upload</Button>
				<Button type="reset" variant="danger">Reset</Button>
			</Form>

			{uploadProgress && (
				<ProgressBar
					now={uploadProgress}
					label={`${uploadProgress}%`}
					className="my-3"
					animated
					striped
					variant="success"
				/>
			)}
		</>
	)
}

export default UploadImage
