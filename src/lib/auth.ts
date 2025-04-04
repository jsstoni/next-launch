import { env } from '@/lib/env';
import { betterAuth } from 'better-auth';
import { headers } from 'next/headers';
import { cache } from 'react';

export const auth = betterAuth({
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
});

export const getSession = cache(async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
});
