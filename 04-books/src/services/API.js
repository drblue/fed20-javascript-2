/**
 * API service
 *
 */

import axios from 'axios'
import li from 'li'

const fakeSlowApi = false
const fakeSlowApiDelay = 1500

axios.defaults.baseURL = 'http://localhost:4000'

const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	if (!Array.isArray(response.data)) {
		// return content without wrapping it
		return response.data
	}

	// extract link header and wrap content in a object
	const { prev, next } = li.parse(response.headers['link'])

	return {
		prev,
		next,
		results: response.data,
	}
}

const post = async (endpoint, data) => {
	const response = await axios.post(endpoint, data)

	// fake slow api *zzz*
	fakeSlowApi && await new Promise(r => setTimeout(r, fakeSlowApiDelay))

	// return content
	return response.data
}

const put = async (endpoint, data) => {
	const response = await axios.put(endpoint, data)

	// fake slow api *zzz*
	fakeSlowApi && await new Promise(r => setTimeout(r, fakeSlowApiDelay))

	// return content
	return response.data
}

const destroy = async (endpoint) => {
	const response = await axios.delete(endpoint)

	// fake slow api *zzz*
	fakeSlowApi && await new Promise(r => setTimeout(r, fakeSlowApiDelay))

	// return content
	return response.data
}

/**
 * Get all books
 * @returns Promise
 */
export const getBooks = async ({ page, q }) => {
	return await get(`/books?q=${q}&_page=${page}`)
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

/**
 * Update a book
 * @param {number} id Book ID
 * @param {object} data Book details
 * @returns Promise
 */
export const updateBook = async ({ id, data }) => {
	return await put(`/books/${id}`, data)
}

/**
 * Delete a book
 * @param {number} id Book ID
 * @returns Promise
 */
export const deleteBook = async (id) => {
	return await destroy(`/books/${id}`)
}

export default {
	getBooks,
	getBook,
	createBook,
	updateBook,
	deleteBook,
}
