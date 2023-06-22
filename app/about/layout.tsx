import Link from 'next/link';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>About us</h2>
      <ul>
        <li>
          {' '}
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          {' '}
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
