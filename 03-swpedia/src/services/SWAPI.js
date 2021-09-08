/**
 * The Star Wars API service
 *
 * <https://swapi.dev>
 * API: <https://swapi.dev/api>
 * Reference: <https://swapi.dev/documentation>
 */

import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_SWAPI_BASE_URL

const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	return response.data
}

/**
 * Get films
 *
 * @param {number} page Page of films to get
 * @returns Promise
 */
export const getFilms = async (page = null) => {
	return get(`/films/?page=${page}`)
}

/**
 * Get a single film
 *
 * @param {number} id Film ID
 * @returns Promise
 */
export const getFilm = async (id = null) => {
	return get(`/films/${id}/`)
}

/**
 * Get people
 *
 * @param {number} page Page of people to get
 * @returns Promise
 */
export const getPeople = async (page = null) => {
	return get(`/people/?page=${page}`)
}

/**
 * Get a single person
 *
 * @param {number} id Person ID
 * @returns Promise
 */
export const getPerson = async (id = null) => {
	return get(`/people/${id}/`)
}

export default {
	getFilms,
	getFilm,
	getPeople,
	getPerson,
}
