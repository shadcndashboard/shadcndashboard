import { setupWorker } from 'msw/browser';
import { mockHandlers } from './handlers/mock-handlers';


export const worker = setupWorker(...mockHandlers);
