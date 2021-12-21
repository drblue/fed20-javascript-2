import React, { useCallback } from 'react'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDropzone } from 'react-dropzone'

const UploadPage = () => {
	const onDrop = useCallback(acceptedFiles => {
		// got me some files
		console.log("got me some files", acceptedFiles)

		if (!acceptedFiles.length) {
			console.log("Not a valid file")
			return
		}

		console.log("mmmm, file!")

		// trigger upload of the first file
	}, [])

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
		accept: 'image/gif, image/jpeg, image/png, image/webp',
		maxFiles: 1,
		onDrop,
	})

	return (
		<div>
			<h1>Upload a New Meme</h1>

			{/* Dropzone */}
			<div
				{...getRootProps()}
				id="dropzone-wrapper"
				className={`${isDragAccept ? 'drag-accept' : ''}${isDragReject ? 'drag-reject' : ''}`}
			>
				<input {...getInputProps()} />

				<div className="indicator">
					{
						isDragActive
							? (
								isDragAccept
									? <p>😋</p>
									: <p>✋🏻</p>
							)
							: <p>🎤</p>
					}
				</div>
			</div>
		</div>
	)
}

export default UploadPage
