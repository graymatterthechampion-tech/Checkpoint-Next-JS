import styles from '@/styles/Page.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <h1>About me</h1>
      <p>
        I&apos;m a web developer learning and building through the GoMyCode program. I enjoy
        turning ideas into working products, from the user interface to the API behind it.
      </p>
      <p>
        On the front end I build with React, Redux and Next.js. On the back end I write
        REST APIs with Node.js, Express and MongoDB. I care about readable code, good error
        handling and testing what I ship.
      </p>

      <h2>What I&apos;m working on</h2>
      <ul className={styles.list}>
        <li>Building full-stack projects with Next.js and Node.js</li>
        <li>Writing stricter, safer code with TypeScript</li>
        <li>Improving accessibility and performance in my apps</li>
      </ul>
    </section>
  );
}

// Static props: gives this page its own browser tab title (read by _app).
export function getStaticProps() {
  return { props: { title: 'About' } };
}