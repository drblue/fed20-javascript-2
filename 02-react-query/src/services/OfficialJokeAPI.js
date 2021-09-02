/**
 * Official Joke API service
 *
 * <https://github.com/15Dkatz/official_joke_api>
 */

const baseURL = 'https://official-joke-api.appspot.com'

/**
 * Get endpoint from API
 *
 * @returns Promise
 */
const get = async (endpoint) => {
	const response = await fetch(baseURL + endpoint)

	if (!response.ok) {
		throw new Error("API responded that it was not feeling so good.")
	}

	return response.json()
}

/**
 * Get a random joke
 *
 * @returns Promise
 */
export const getRandomJoke = async (type) => {
	if (type) {
		const data = await get(`/jokes/${type}/random`) // will return array with object inside
		return data[0]
	}

	return get('/jokes/random') // will return object
}

export default {
	getRandomJoke,
}
