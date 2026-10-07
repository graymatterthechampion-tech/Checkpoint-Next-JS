import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

// Home is active only on "/", other links are also active on their sub-pages
// (e.g. "Projects" stays highlighted on /projects/movie-app-router).
function isActive(pathname, href) {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <Link href="/" className={styles.brand}>
          Johnnymax
        </Link>
        <ul className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={active ? `${styles.link} ${styles.active}` : styles.link}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}