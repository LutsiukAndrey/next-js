import type { AuthOptions, User } from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';

import Credentials from 'next-auth/providers/credentials';
import { users } from '@/data/users';

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          required: true,
        },
        password: {
          label: 'Password',
          required: true,
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(
          user => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithotPassword } = currentUser;

          return userWithotPassword as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
