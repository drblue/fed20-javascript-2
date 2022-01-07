import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import UsersPage from '../UsersPage'

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
