import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import { useUrlSearchParams } from 'use-url-search-params'
import { getPeople } from '../../services/SWAPI'
import PersonCard from '../cards/PersonCard'
import Pagination from '../partials/Pagination'

const PeoplePage = () => {
	const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1 }, { page: Number })
	const [page, setPage] = useState(searchParams.page)
	const { data, error, isError, isLoading, isPreviousData } = useQuery(
		['people', page],
		() => getPeople(page),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		}
	)

	useEffect(() => {
		setSearchParams({ ...searchParams, page })
	}, [page])

	return (
		<Container className="py-3">
			<h1 className="mb-3">People</h1>

			<div>
				{isLoading && (<p className="my-3">Loading people...</p>)}

				{isError && (<p className="my-3">Sorry, tried to get people but could not find any ({error.message})</p>)}

				{data?.results && (
					<>
						<Row>
							{data.results.map((person, i) => (
								<Col lg={3} md={4} sm={6} key={i}>
									<PersonCard person={person} />
								</Col>
							))}
						</Row>

						<Pagination
							page={page}
							setPage={setPage}
							isPreviousData={isPreviousData}
							hasMore={data?.next}
						/>
					</>
				)}

			</div>
		</Container>
	)
}

export default PeoplePage
