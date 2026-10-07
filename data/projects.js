const projects = [
  {
    slug: 'movie-app-router',
    title: 'Movie App',
    summary: 'Browse, filter and add favourite movies, with a details page and trailer for each one.',
    description:
      'A React app where users can filter movies by title and rating, add their own, and open a details page with an embedded YouTube trailer. Built with React hooks for state and React Router for page navigation.',
    tech: ['React', 'React Router', 'Hooks', 'CSS'],
    image: '/images/movie-app.svg',
    githubUrl: 'https://github.com/YOUR-USERNAME/movie-app-router',
  },
  {
    slug: 'todo-app-redux',
    title: 'ToDo App',
    summary: 'A task manager with add, edit, done/not-done filtering and global state in Redux.',
    description:
      'Tasks can be added, edited, ticked off and filtered by status. All shared state lives in a Redux Toolkit store, with memoised selectors for the filtered list and counts.',
    tech: ['React', 'Redux Toolkit', 'React Redux'],
    image: '/images/todo-app.svg',
    githubUrl: 'https://github.com/YOUR-USERNAME/todo-app-redux',
  },
  {
    slug: 'user-directory',
    title: 'User Directory',
    summary: 'Fetches users from a public REST API with axios and shows them as cards.',
    description:
      'Consumes the JSONPlaceholder API with axios inside useEffect, with loading, error and retry states, and request cancellation when the component unmounts.',
    tech: ['React', 'Axios', 'REST API'],
    image: '/images/user-directory.svg',
    githubUrl: 'https://github.com/YOUR-USERNAME/user-list-app',
  },
  {
    slug: 'blogs-api',
    title: 'Blogs API',
    summary: 'A REST API for blog posts with full CRUD, built on Express and MongoDB.',
    description:
      'An Express server connected to MongoDB Atlas through Mongoose. It exposes create, read, update and delete routes for blog posts, with validation and proper HTTP status codes.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    image: '/images/blogs-api.svg',
    githubUrl: 'https://github.com/YOUR-USERNAME/BlogsExp',
  },
];

export default projects;

// Returns the project with this slug, or null if there is none.
export function findProjectBySlug(slug) {
  const match = projects.find((project) => project.slug === slug);
  return match ?? null;
}