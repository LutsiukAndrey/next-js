'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export const GoogleBtn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <div>
      <button onClick={() => signIn('google', { callbackUrl })}>
        Sign In with Google
      </button>
    </div>
  );
};
