import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function NotFound() {
  return (
    <section className={styles.section}>
      <h1>404: Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className={styles.homeLink}>
        ← Back to home
      </Link>
    </section>
  );
}

export function getStaticProps() {
  return { props: { title: 'Page not found' } };
}