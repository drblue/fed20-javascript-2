/**
 * Dog API service
 *
 * <https://dog.ceo/dog-api/>
 */

const baseURL = 'https://dog.ceo/api'

/**
 * Get a random dog image
 *
 * @returns Promise
 */
export const getRandomDog = async () => {
	const response = await fetch(baseURL + '/breeds/image/random')

	if (!response.ok) {
		throw new Error("API responded that it was not feeling so good.")
	}

	return response.json()
}

export default {
	getRandomDog,
}
