/**
 * API service
 *
 */

import axios from 'axios'
import li from 'li'

axios.defaults.baseURL = 'http://localhost:4000'

const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	// return content
	return response.data
}

const post = async (endpoint, data) => {
	const response = await axios.post(endpoint, data)

	// fake slow api *zzz*
	await new Promise(r => setTimeout(r, 3000))

	// return content
	return response.data
}

/**
 * Get all books
 * @returns Promise
 */
export const getBooks = async () => {
	return await get(`/books`)
}

/**
 * Get a single book
 * @returns Promise
 */
export const getBook = async (id) => {
	return await get(`/books/${id}`)
}

/**
 * Create a new book
 * @param {object} data Book details
 * @returns Promise
 */
export const createBook = async (data) => {
	return await post(`/books`, data)
}

export default {
	getBooks,
	getBook,
	createBook,
}
