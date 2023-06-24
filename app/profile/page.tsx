import { authConfig } from '@/configs/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

export const metadata: Metadata = {
  title: 'Profile | Next App',
};

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h3>Hi!{session?.user?.name}</h3>
      {session?.user?.image && <img src={session.user.image} />}
    </div>
  );
}
