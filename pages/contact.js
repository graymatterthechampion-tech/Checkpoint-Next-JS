import styles from '@/styles/Page.module.css';

// Replace these with your own details.
const CONTACTS = [
  { label: 'Email', value: 'graymatterthechampion@gmail.com', href: 'mailto:you@example.com', external: false },
  { label: 'GitHub', value: 'graymatterthechampion-tech.', href: 'https://github.com/YOUR-USERNAME', external: true },
  { label: 'LinkedIn', value: 'linkedin-profile coming soon.', href: 'https://www.linkedin.com/in/YOUR-USERNAME', external: true },
];

export default function Contact() {
  return (
    <section className={styles.section}>
      <h1>Contact</h1>
      <p>I&apos;m open to internships, freelance work and collaboration. The best way to reach me:</p>
      <ul className={styles.contacts}>
        {CONTACTS.map(({ label, value, href, external }) => (
          <li key={label}>
            <span>{label}</span>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function getStaticProps() {
  return { props: { title: 'Contact' } };
}