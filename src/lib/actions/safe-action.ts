import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from 'next-safe-action';
import { z } from 'zod';

export class ActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    console.error('Action error:', e.message);

    if (e instanceof ActionError) {
      return e.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
  defineMetadataSchema() {
    return z.object({
      name: z.string(),
    });
  },
}).use(async ({ next, clientInput, metadata }) => {
  const result = await next();

  if (process.env.NODE_ENV === 'development') {
    console.log(`Input -> ${JSON.stringify(clientInput)}`);
    console.log(`Result -> ${JSON.stringify(result.data)}`);
    console.log(`Metadata -> ${JSON.stringify(metadata)}`);
  }

  return result;
});
