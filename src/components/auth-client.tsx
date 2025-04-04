'use client';

import { signIn } from '@/lib/auth-client';
import { Github } from 'lucide-react';
import { Button } from './ui/button';

export const AuthClient = () => {
  const githubSignIn = async () => {
    await signIn.social({ provider: 'github' });
  };

  return (
    <Button onClick={githubSignIn}>
      <Github /> Login
    </Button>
  );
};
