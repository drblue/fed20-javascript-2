import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getFilm } from '../../services/SWAPI'
import FilmDetailsCard from '../cards/FilmDetailsCard'

const FilmPage = () => {
	const { id } = useParams();

	const { data, error, isError, isLoading } = useQuery(
		['film', id],
		() => getFilm(id),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		}
	)

	return (
		<Container className="py-3">
			<div>
				{isLoading && (<p className="my-3">Loading film...</p>)}

				{isError && (<p className="my-3">Sorry, tried to get film but could not find them ({error.message})</p>)}

				{data && (
					<FilmDetailsCard film={data} />
				)}
			</div>
		</Container>
	)
}

export default FilmPage
