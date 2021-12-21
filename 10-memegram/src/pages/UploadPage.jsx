import React, { useCallback } from 'react'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDropzone } from 'react-dropzone'
import useUploadMeme from '../hooks/useUploadMeme'

const UploadPage = () => {
	const uploadMeme = useUploadMeme()

	const onDrop = useCallback(acceptedFiles => {
		if (!acceptedFiles.length) {
			return
		}

		// trigger upload of the first file
		uploadMeme.mutate(acceptedFiles[0])
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
