import React, { useCallback } from 'react'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDropzone } from 'react-dropzone'

const UploadPage = () => {
	const onDrop = useCallback(acceptedFiles => {
		// got me some files
		console.log("got me some files", acceptedFiles)

		if (!acceptedFiles.length) {
			return
		}

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
				<input {...getInputProps()} id="dropzone" />
				{
					isDragActive
						? (
							isDragAccept
								? <p>Drop it like it's funny!</p>
								: <p>That's no meme we want here!</p>
						)
						: <p>Drop a funny meme here</p>
				}
			</div>
		</div>
	)
}

export default UploadPage
