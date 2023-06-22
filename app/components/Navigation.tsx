'use client';
import Link from 'next/link';
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
    </>
  );
};
