import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const HomePage = () => {
	const [image, setImage] = useState(null)

	const handleFileChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0])
		}
		console.log("File changed!", e.target.files[0])
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleReset = () => {
		setImage(null)
	}

	return (
		<Container className="py-3">
			<h1>Upload an image</h1>

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
		</Container>
	)
}

export default HomePage
