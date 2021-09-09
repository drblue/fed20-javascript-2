import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useForm } from 'react-hook-form'

const SearchForm = ({
	onFormSubmit,
	onFormReset,
	isLoading,
	defaultValues
}) => {

	const { handleSubmit, register, setFocus, formState: { errors } } = useForm({
		defaultValues,
	})

	useEffect(() => {
		setFocus('searchQuery')
	}, [setFocus])

	return (
		<Form onSubmit={handleSubmit(onFormSubmit)} onReset={onFormReset} className="mb-3">
			<Row className="align-items-center">
				<Col>
					<Form.Control type="text" {...register('searchQuery')} placeholder="Enter search query" aria-label="Search query" />
				</Col>

				<Col xs="auto">
					<Button variant="primary" type="submit" disabled={isLoading}>
						{isLoading ? 'Searching...' : 'Search'}
					</Button>
					<Button variant="secondary" type="reset" disabled={isLoading}>
						Reset
					</Button>
				</Col>
			</Row>
		</Form>
	)
}

export default SearchForm
