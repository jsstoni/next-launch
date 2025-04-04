// src/env.mjs
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_HOME_PAGE: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_HOME_PAGE: process.env.NEXT_PUBLIC_HOME_PAGE,
  },
});
