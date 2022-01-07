import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Connect server to handlers
export const server = setupServer(...handlers)
