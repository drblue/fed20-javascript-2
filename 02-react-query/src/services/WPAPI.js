/**
 * WordPress REST API service
 *
 * Reference: <https://developer.wordpress.org/rest-api/reference/>
 * Pagination: <https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/>
 */

const baseURL = 'https://fed20.thehiveresistance.com/wp-json'

const get = async (endpoint) => {
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
