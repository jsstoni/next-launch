import { env } from '@/lib/env';
import { Polar } from '@polar-sh/sdk';

export const api = new Polar({
  accessToken: env.POLAR_ACCESS_TOKEN,
  server: env.POLAR_SERVER,
});
