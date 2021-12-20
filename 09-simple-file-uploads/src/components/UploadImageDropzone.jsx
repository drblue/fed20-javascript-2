import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const UploadImageDropzone = () => {
	const onDrop = useCallback(acceptedFiles => {
		console.log("Got me zum files 😊", acceptedFiles)
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />

			{
				isDragActive
					? <p>Drop it like its hot 🔥!</p>
					: <p>Give me some files 😋!</p>
			}
		</div>
	)
}

export default UploadImageDropzone
