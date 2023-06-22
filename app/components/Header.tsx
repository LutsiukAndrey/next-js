import Link from 'next/link';
import { Navigation } from './Navigation';

const navItems = [
  { lable: 'Home', href: '/' },
  { lable: 'Blog', href: '/blog' },
  { lable: 'About', href: '/about' },
];

const Header = () => {
  return (
    <header className="header">
      <Navigation navLinks={navItems}></Navigation>
      {/* <Link href="/" className="header_link">
        Home
      </Link>
      <Link href="/blog" className="header_link">
        Blog
      </Link>
      <Link href="/about" className="header_link">
        About
      </Link> */}
    </header>
  );
};

export { Header };
