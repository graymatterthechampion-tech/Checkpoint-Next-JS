import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const SKILLS = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Git'];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/profile.jpg"
          alt="Portrait of Johnnymax"
          width={180}
          height={180}
          className={styles.avatar}
          preload
        />
        <div>
          <p className={styles.kicker}>Hi, I&apos;m</p>
          <h1 className={styles.name}>Johnnymax</h1>
          <p className={styles.tagline}>
            A web developer building fast, accessible apps with React, Next.js and Node.js.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primary}>
              See my projects
            </Link>
            <Link href="/contact" className={styles.secondary}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.skills} aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <ul>
          {SKILLS.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </>
  );
}