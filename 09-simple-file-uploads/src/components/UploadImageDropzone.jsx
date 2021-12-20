import React, { useCallback } from 'react'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDropzone } from 'react-dropzone'
import useUploadImage from '../hooks/useUploadImage'

const UploadImageDropzone = () => {
	const uploadImage = useUploadImage()

	const onDrop = useCallback(acceptedFiles => {
		console.log("Got me zum files 😊", acceptedFiles)

		if (!acceptedFiles.length) {
			return
		}

		uploadImage.mutate(acceptedFiles[0])
	}, [])

	const { getRootProps, getInputProps, acceptedFiles, isDragActive, isDragAccept, isDragReject } = useDropzone({
		accept: 'image/gif, image/jpeg, image/png, image/webp',
		onDrop,
		maxFiles: 1,
	})

	return (
		<div {...getRootProps()}
			id="upload-image-dropzone-wrapper"
			className={`${isDragAccept ? 'drag-accept' : ''} ${isDragReject ? 'drag-reject' : ''}`}
		>
			<input {...getInputProps()} />

			{
				isDragActive
					? (isDragAccept ? <p>Drop it like its hot 🔥!</p> : <p>We don't want that file 😡!</p>)
					: <p>Give me a file 😋!</p>
			}

			{acceptedFiles.length > 0 && (
				<div className="accepted-files mt-2">
					<ul className="list-unstyled">
						{acceptedFiles.map(file => (
							<li key={file.name}>{file.name} ({Math.round(file.size / 1024)} kb)</li>
						))}
					</ul>
				</div>
			)}

			{uploadImage.uploadProgress !== null && <ProgressBar variant="success" animated now={uploadImage.uploadProgress} />}

			{uploadImage.isError && <Alert variant="warning">{uploadImage.error}</Alert>}
			{uploadImage.isSuccess && <Alert variant="success">File uploaded successfully ✨!</Alert>}
		</div>
	)
}

export default UploadImageDropzone
