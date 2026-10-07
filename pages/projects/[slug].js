import Image from 'next/image';
import Link from 'next/link';
import { findProjectBySlug } from '@/data/projects';
import styles from '@/styles/Projects.module.css';

export default function ProjectDetails({ project }) {
  const { title, description, tech, image, githubUrl, liveUrl } = project;

  return (
    <article className={styles.details}>
      <Link href="/projects" className={styles.back}>
        ← All projects
      </Link>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        width={1200}
        height={750}
        className={styles.detailsImage}
        preload
      />
      <p className={styles.description}>{description}</p>

      <h2>Built with</h2>
      <ul className={styles.tags}>
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.links}>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            View code on GitHub
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            See it live
          </a>
        )}
      </div>
    </article>
  );
}

// Runs on the server for each request to /projects/<slug>.
// `params.slug` is the part of the URL in place of [slug].
export async function getServerSideProps({ params }) {
  const project = findProjectBySlug(params.slug);

  if (project === null) {
    // Unknown slug: show the 404 page with a real 404 status code.
    return { notFound: true };
  }

  return {
    props: {
      title: project.title,
      description: project.summary,
      project,
    },
  };
}
