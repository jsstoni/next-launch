// src/env.mjs
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    POLAR_ACCESS_TOKEN: z.string(),
    POLAR_WEBHOOK_SECRET: z.string(),
    POLAR_SERVER: z.enum(['sandbox', 'production']),
  },
  client: {
    NEXT_PUBLIC_HOME_PAGE: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_HOME_PAGE: process.env.NEXT_PUBLIC_HOME_PAGE,
  },
});
