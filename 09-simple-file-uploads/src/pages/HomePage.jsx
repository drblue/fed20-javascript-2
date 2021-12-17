import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase'

const HomePage = () => {
	const [image, setImage] = useState(null)
	const [message, setMessage] = useState()
	const [uploadedImageUrl, setUploadedImageUrl] = useState()
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

		// create a reference to upload the file to
		const fileRef = ref(storage, image.name)

		// upload image to fileRef
		const uploadTask = uploadBytesResumable(fileRef, image)

		// attach upload observer
		uploadTask.on('state_changed', (uploadTaskSnapshot) => {
			setUploadProgress(Math.round((uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 100))

		}, (error) => {
			console.log("NOT so great success, fail!", e)

			setMessage({
				type: "warning",
				msg: `Image failed to upload due to the following error: ${e.message}`,
			})
		}, async () => {
			setMessage({
				type: "success",
				msg: "Image successfully uploaded 🤩",
			})

			// get download url to uploaded file
			const url = await getDownloadURL(fileRef)

			// set uploadedImageUrl to the url
			setUploadedImageUrl(url)
		})
	}

	const handleReset = () => {
		setImage(null)
		setMessage(null)
		setUploadProgress(null)
	}

	return (
		<Container className="py-3">
			<h1>Upload an image</h1>

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

			{uploadProgress && (<p>Uploading... {uploadProgress} %</p>)}

			{uploadedImageUrl && <img src={uploadedImageUrl} className="img-fluid" />}
		</Container>
	)
}

export default HomePage
