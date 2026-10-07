import '@/styles/globals.css';
import Layout from '@/components/Layout';

// _app wraps every page. Pages can set `title` / `description` through
// their props (pageProps) so each tab gets its own title.
export default function App({ Component, pageProps }) {
  return (
    <Layout title={pageProps.title} description={pageProps.description}>
      <Component {...pageProps} />
    </Layout>
  );
}