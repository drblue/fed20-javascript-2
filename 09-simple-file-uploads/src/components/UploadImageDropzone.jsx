import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const UploadImageDropzone = () => {
	const onDrop = useCallback(acceptedFiles => {
		console.log("Got me zum files 😊", acceptedFiles)
	}, [])

	const { getRootProps, getInputProps, acceptedFiles, isDragActive, isDragAccept, isDragReject } = useDropzone({
		accept: 'image/gif, image/jpeg, image/png, image/webp',
		onDrop,
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
					: <p>Give me some files 😋!</p>
			}

			{acceptedFiles && (
				<div className="accepted-files mt-2">
					<ul className="list-unstyled">
						{acceptedFiles.map(file => (
							<li key={file.name}>{file.name} ({Math.round(file.size / 1024)} kb)</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default UploadImageDropzone
