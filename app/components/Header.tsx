import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="header_link">
        Home
      </Link>
      <Link href="/blog" className="header_link">
        Blog
      </Link>
      <Link href="/about" className="header_link">
        About
      </Link>
    </header>
  );
};

export { Header };
