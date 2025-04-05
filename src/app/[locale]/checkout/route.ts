import { env } from '@/lib/env';
import { Checkout } from '@polar-sh/nextjs';

export const GET = Checkout({
  accessToken: env.POLAR_ACCESS_TOKEN,
  successUrl: 'http://localhost:3000/checkout/success',
  server: env.POLAR_SERVER,
});
