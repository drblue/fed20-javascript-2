/**
 * WordPress REST API service
 *
 * Reference: <https://developer.wordpress.org/rest-api/reference/>
 * Pagination: <https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/>
 */

import axios from 'axios'

axios.defaults.baseURL = 'https://fed20.thehiveresistance.com/wp-json'

const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	// parse link header for pagination
	const prev = null
	const next = "https://fed20.thehiveresistance.com/wp-json/wp/v2/posts?page=2"

	// get total num of items
	const count = parseInt(response.headers['x-wp-total'])

	// get total num of pages
	const pages = parseInt(response.headers['x-wp-totalpages'])

	// transform data into something nicer
	return {
		count,
		prev,
		next,
		pages,
		results: response.data
	}
}

const getFetch = async (endpoint) => {
	const response = await fetch(baseURL + endpoint)

	if (!response.ok) {
		throw new Error("Something went wrong with the request.")
	}

	return response.json()
}

/**
 * Get posts
 *
 * @returns Promise
 */
export const getPosts = async (page = null) => {
	return get(`/wp/v2/posts?page=${page}`)
}

export default {
	getPosts,
}
