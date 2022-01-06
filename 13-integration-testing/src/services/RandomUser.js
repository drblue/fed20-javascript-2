import axios from 'axios'

const BASE_URL = 'https://randomuser.me/api/'

const get = async (endpoint) => {
	const res = await axios.get(BASE_URL + endpoint)
	return res.data
}

const getRandomUsers = (count = 5) => {
	return get(`?results=${count}`)
}

export {
	getRandomUsers,
}
