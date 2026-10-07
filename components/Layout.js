import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '@/styles/Layout.module.css';

// Wraps every page: sets the browser tab title and shows the navbar and footer.
export default function Layout({ title, description, children }) {
  const fullTitle = title ? `${title} | Johnnymax` : 'Johnnymax | Web Developer';

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description ?? 'Portfolio of Johnnymax, web developer.'} />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}