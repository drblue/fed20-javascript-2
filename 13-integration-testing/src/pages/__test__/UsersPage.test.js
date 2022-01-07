import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import UsersPage from '../UsersPage'
import { server } from '../../mocks/server'

// 🏎 Boot API mocking
beforeAll(() => server.listen())

// 🧨 Reset handlers (not needed in our app though)
afterEach(() => server.resetHandlers())

// 🧹 Clean up after ourselves
afterAll(() => server.close())

const MockUsersPage = () => {
	return (
		<BrowserRouter>
			<UsersPage />
		</BrowserRouter>
	)
}

test("can get at least one user", async () => {
	render(<MockUsersPage />)

	// find any listitem elements
	const listitemEls = await screen.findAllByRole("listitem")

	// assert that there are at least one user/listitem
	expect(listitemEls.length).toBeGreaterThan(0)
})

test("can get at least two users", async () => {
	render(<MockUsersPage />)

	// find any listitem elements
	const listitemEls = await screen.findAllByRole("listitem")

	// assert that there are at least one user/listitem
	expect(listitemEls.length).toBeGreaterThan(1)
})
