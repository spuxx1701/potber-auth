import { setupServer } from 'msw/node';
import { authHandlers } from './handlers/auth.handlers.js';

/*
 * Provides a fake api server that interjects outgoing fetch calls and acts
 * as a backend during tests. For more information, see: https://github.com/mswjs/msw
 */
const server = setupServer(...authHandlers);
export { server };
