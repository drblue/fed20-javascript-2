import { render, screen } from '@testing-library/react'
import UsersPage from '../UsersPage'

test("can get at least one user", async () => {
	render(<UsersPage />)

	// find any listitem elements
	const listitemEls = await screen.findAllByRole("listitem")

	// assert that there are at least one user/listitem
	expect(listitemEls.length).toBeGreaterThan(0)
})
