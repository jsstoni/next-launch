'use client';

import { signIn } from '@/lib/auth-client';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const AuthClient = () => {
  const githubSignIn = async () => {
    await signIn.social({ provider: 'github' });
  };

  return (
    <Button
      className="bg-zinc-800 hover:bg-zinc-700 text-white self-center w-[160px] py-6 rounded-full text-lg font-medium shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-105"
      onClick={githubSignIn}
    >
      <span>Login</span>
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
};
