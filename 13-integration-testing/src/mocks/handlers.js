import { rest } from 'msw'

const mockedUsers = [
	{
		login: {
			uuid: '9a3ac112-7de5-41ad-8685-5c76a835b879',
			username: 'sadpanda42',
		},
		name: {
			first: 'Sad',
			last: 'Panda',
		},
		picture: {
			large: 'https://i.pinimg.com/originals/19/56/66/195666855b3b1f25123fd69eca1baa73.jpg',
		},
	},
	{
		login: {
			uuid: '9a3ac112-7de5-42ad-8685-5c76a835b879',
			username: 'happypanda13',
		},
		name: {
			first: 'Happi Happi',
			last: 'Panda',
		},
		picture: {
			large: 'https://images.fineartamerica.com/images-medium-large-5/happy-panda-james-enos.jpg',
		},
	},
]

export const handlers = [
	rest.get('https://randomuser.me/api/', (req, res, ctx) => {
		return res(
			ctx.json({
				results: mockedUsers,
			})
		)
	}),
]
