// import { setupServer } from 'msw/node';
// import { authHandlers } from './handlers/auth.handlers';
// import { test as base, expect } from '@playwright/test';
// import type { MockServiceWorker } from 'playwright-msw';
// import { createWorkerFixture } from 'playwright-msw';
// import { http } from 'msw';
// // /**
// //  * Provides a fake api server that interjects outgoing fetch calls and acts
// //  * as a backend during tests. For more information, see: https://github.com/mswjs/msw
// //  */
// // const server = setupServer(...authHandlers);
// // export { server };

// const testWithMsw = base.extend<{
// 	worker: MockServiceWorker;
// 	http: typeof http;
// }>({
// 	worker: createWorkerFixture([...authHandlers]),
// 	http
// });

// export { expect, testWithMsw };
