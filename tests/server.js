import { handler } from '../build/handler.js';
import express from 'express';
import { server } from './msw/index.js';

const app = express();

// Start MSW
server.listen({ onUnhandledRequest: 'error' });

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(4173);
console.log('Test Server is listening on port 4173.');
