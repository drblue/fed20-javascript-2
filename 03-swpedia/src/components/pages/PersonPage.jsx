import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getPerson } from '../../services/SWAPI'
import PersonDetailsCard from '../cards/PersonDetailsCard'

const PersonPage = () => {
	const { id } = useParams();

	const { data, error, isError, isLoading } = useQuery(
		['person', id],
		() => getPerson(id),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		}
	)

	return (
		<Container className="py-3">
			<div>
				{isLoading && (<p className="my-3">Loading person...</p>)}

				{isError && (<p className="my-3">Sorry, tried to get person but could not find them ({error.message})</p>)}

				{data && (
					<PersonDetailsCard person={data} />
				)}
			</div>
		</Container>
	)
}

export default PersonPage
