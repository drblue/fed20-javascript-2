/**
 * API service
 *
 */

import axios from 'axios'
import li from 'li'

axios.defaults.baseURL = ''

const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	// parse link header for pagination
	const link = li.parse(response.headers['link'])

	// transform data into something nicer
	return {
		...link,
		count,
		pages,
		results: response.data
	}
}

export default {
}
