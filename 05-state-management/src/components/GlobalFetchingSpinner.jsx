import React from 'react'
import { useIsFetching } from 'react-query'
import BounceLoader from 'react-spinners/BounceLoader'

const GlobalFetchingSpinner = () => {
	const isFetching = useIsFetching()

	return isFetching ? (
		<div className="fetching-spinner">
			<BounceLoader color={"#888"} size={60} />
		</div>) : null
}

export default GlobalFetchingSpinner
