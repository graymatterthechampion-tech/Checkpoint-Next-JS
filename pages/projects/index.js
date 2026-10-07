import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';
import styles from '@/styles/Projects.module.css';

export default function Projects({ projects, renderedAt }) {
  return (
    <section>
      <h1>Projects</h1>
      <p className={styles.intro}>A selection of things I&apos;ve built. Click a project for details.</p>

      {projects.length === 0 ? (
        <p>No projects yet. Check back soon!</p>
      ) : (
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      <p className={styles.ssrNote}>Rendered on the server at {renderedAt} (UTC).</p>
    </section>
  );
}

// Server-side rendering: Next.js runs this on the server for EVERY request,
// then renders the page to HTML with these props before sending it.
export async function getServerSideProps() {
  const renderedAt = new Date().toISOString().replace('T', ' ').slice(0, 19);

  return {
    props: {
      title: 'Projects',
      projects,
      renderedAt,
    },
  };
}