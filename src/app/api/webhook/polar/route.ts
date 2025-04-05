import { env } from '@/lib/env';
import { Webhooks } from '@polar-sh/nextjs';

export const POST = Webhooks({
  webhookSecret: env.POLAR_WEBHOOK_SECRET,
  onSubscriptionActive: async (payload) => {
    console.log(payload);
  },
  onSubscriptionRevoked: async (payload) => {
    console.log(payload);
  },
});
