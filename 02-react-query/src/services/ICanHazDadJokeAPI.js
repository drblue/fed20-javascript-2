
export const getRandomJoke = async () => {
	const response = await fetch(`https://icanhazdadjoke.com/`, {
			headers: {
				'Accept': 'application/json'
			}
		})

	if (!response.ok) {
		throw new Error("API responded that it was not feeling so good.")
	}

	return response.json()
}

export default {
	getRandomJoke,
}
