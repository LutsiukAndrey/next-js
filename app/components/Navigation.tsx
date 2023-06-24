'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type NavLink = {
  lable: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();
  console.log(session);

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.lable}
            href={link.href}
            className={isActive ? 'active header_link' : 'header_link'}
          >
            {link.lable}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
          Sing Out
        </Link>
      ) : (
        <Link href="/signin">SingIn</Link>
      )}
    </>
  );
};
