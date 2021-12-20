import React from 'react'
import ImageGrid from '../components/ImageGrid'
import UploadImageDropzone from '../components/UploadImageDropzone'
import useImages from '../hooks/useImages'

const HomePage = () => {
	const imagesQuery = useImages()

	return (
		<>
			<h1>Images</h1>

			<ImageGrid query={imagesQuery} />

			<hr className="my-3" />

			<UploadImageDropzone />
		</>
	)
}

export default HomePage
