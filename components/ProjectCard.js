import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { slug, title, summary, tech, image } = project;

  return (
    <article className={styles.card}>
      <Link href={`/projects/${slug}`} className={styles.link}>
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          width={600}
          height={375}
          className={styles.image}
        />
        <div className={styles.body}>
          <h3>{title}</h3>
          <p>{summary}</p>
          <ul className={styles.tags} aria-label="Technologies">
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}