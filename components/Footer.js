import styles from '@/styles/Layout.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p suppressHydrationWarning>© {year} Johnnymax. Built with Next.js.</p>
    </footer>
  );
}